'use strict';

// To Do: It might be useful to throw an exception in the event that a plucked database or table is not available.

// External Modules
import { promises as FileSystemPromises, createReadStream, createWriteStream } from 'fs';
const { mkdir: makeDirectory, rmdir: deleteDirectory, readdir: getDirectoryFileNames, unlink: deleteFile } = FileSystemPromises;
import { create as createTar } from 'tar';
import { createCompressor as createXzCompressor } from 'lzma-native';
import { ulid } from 'ulid';

// Internal Modules
import Exportment from './Exportment';
import generateManifest from './Manifest';
import exportIndexes from './Indexes';
import exportDocuments from './Documents';
import generateWriteStreamPromise from 'src/Modules/Utilities/GenerateWriteStreamPromise';

// Types
import { Database } from 'src/Types/Export/Manifest';
import { Options } from './Exportment';
export interface Tables extends Array<Table> {};
export interface Table
{
	id: string;
	name: string;
};
interface Result
{
	fileName: string;
	fileExtension: string;
};
interface CompressResult
{
	fileName: string;
	fileExtension: string;
};

export async function archive(options: Options)
{
	const exportment = new Exportment({options});
	await exportment.initialise();
	let result: Result;
	try
	{
		result = await exportDatabases({exportment});
	}
	catch (error)
	{
		throw error;
	}
	finally
	{
		await exportment.finish();
	};
	return result;
};

async function exportDatabases({exportment}: {exportment: Exportment})
{
	const exportId = ulid();
	const exportName = 'rethinkdb_export_' + exportId;
	const directoryPath = await createDirectory({name: exportName, exportment});
	const manifest = await generateManifest({directoryPath, exportment});
	for (let database of manifest.databases)
	{
		for (let table of database.tables)
		{
			await exportTable({database, table, directoryPath, exportment});
		};
	};
	const { fileName, fileExtension } = await compressDirectory({directoryPath, name: exportName, exportment});
	const result: Result =
	{
		fileName,
		fileExtension
	};
	return result;
};

async function exportTable({database, table, directoryPath, exportment}: {database: Database, table: Table, directoryPath: string, exportment: Exportment})
{
	await exportIndexes({database, table, directoryPath, exportment});
	await exportDocuments({database, table, directoryPath, exportment});
};

/** Creates a directory for the export, and returns its path. */
async function createDirectory({name, exportment}: {name: string, exportment: Exportment})
{
	const path = exportment.generateOutputFilePath([name]);
	await makeDirectory(path);
	return path;
};

/** Compresses the given directory, deleting the directory once compressed. */
async function compressDirectory({directoryPath, name, exportment}: {directoryPath: string, name: string, exportment: Exportment})
{
	const tarFileName = exportment.generateOutputFilePath([`${name}.tar`]);
	await createTar({file: tarFileName, cwd: directoryPath}, ['./']);
	const xzFileName = `${tarFileName}.xz`;
	const compressor = createXzCompressor();
	const readStream = createReadStream(tarFileName);
	const writeStream = createWriteStream(xzFileName);
	const writePromise = generateWriteStreamPromise(writeStream);
	readStream.pipe(compressor).pipe(writeStream);
	await writePromise;
	await Promise.all
	(
		[
			deleteFile(tarFileName),
			deleteDirectoryWithContents(directoryPath)
		]
	);
	const result: CompressResult =
	{
		fileName: xzFileName,
		fileExtension: xzFileName.split('.').slice(1).join('.')
	};
	return result;
};

/** Deletes all files from directory, and then deletes the directory. */
async function deleteDirectoryWithContents(directoryPath: string)
{
	const directoryFileNames = await getDirectoryFileNames(directoryPath);
	await Promise.all(directoryFileNames.map(fileName => deleteFile(`${directoryPath}/${fileName}`)));
	await deleteDirectory(directoryPath);
};

/** Generates a file path for table files. */
export function generateFilePath({database, table, directoryPath, fileName}: {database: Database, table: Table, directoryPath: string, fileName: string})
{
	const filePath = `${directoryPath}/${database.name}_${table.name}_${table.id}_${fileName}.json`;
	return filePath;
};