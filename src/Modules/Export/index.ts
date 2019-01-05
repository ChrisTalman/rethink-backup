'use strict';

// To Do: It might be useful to throw an exception in the event that a plucked database or table is not available.

// External Modules
import { promises as FileSystemPromises, createReadStream, createWriteStream } from 'fs';
const { mkdir: makeDirectory, rmdir: deleteDirectory, readdir: getDirectoryFileNames, unlink: deleteFile } = FileSystemPromises;
import { create as createTar } from 'tar';
import { createCompressor as createXzCompressor } from 'lzma-native';
import { ulid } from 'ulid';
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import generateManifest from './Manifest';
import exportIndexes from './Indexes';
import exportDocuments from './Documents';
import generateWriteStreamPromise from 'src/Modules/Utilities/GenerateWriteStreamPromise';

// Types
import { Database } from 'src/Types/Export/Manifest';
export type Options = {} | { pluck?: DatabaseFilters } | { without?: DatabaseFilters };
export interface DatabaseFilters extends Array<string | DatabaseFiltersObject> {};
export interface DatabaseFiltersObject
{
    [databaseName: string]: TablesFilters;
};
export interface TablesFilters extends Array<string> {};
export interface Tables extends Array<Table> {};
export interface Table
{
    id: string;
    name: string;
};

export default async function(options: Options = {})
{
    const pool = await RethinkDB.connectPool();
    await exportDatabases(options);
    await pool.drain();
};

async function exportDatabases(options: Options)
{
    const exportId = ulid();
    const exportName = 'rethinkdb_export_' + exportId;
    const directoryPath = await createDirectory({name: exportName});
    const manifest = await generateManifest({directoryPath, options});
    for (let database of manifest.databases)
    {
        for (let table of database.tables)
        {
            await exportTable({database, table, directoryPath});
        };
    };
    await compressDirectory({directoryPath, name: exportName});
};

async function exportTable({database, table, directoryPath}: {database: Database, table: Table, directoryPath: string})
{
    await exportIndexes({database, table, directoryPath});
    await exportDocuments({database, table, directoryPath});
};

/** Creates a directory for the export, and returns its path. */
async function createDirectory({name}: {name: string})
{
    const path = './' + name;
    await makeDirectory(path);
    return path;
};

/** Compresses the given directory, deleting the directory once compressed. */
async function compressDirectory({directoryPath, name}: {directoryPath: string, name: string})
{
    const tarFileName = name + '.tar';
    await createTar({file: tarFileName, cwd: directoryPath}, ['./']);
    const xzFileName = tarFileName + '.xz';
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
};

/** Deletes all files from directory, and then deletes the directory. */
async function deleteDirectoryWithContents(directoryPath: string)
{
    const directoryFileNames = await getDirectoryFileNames(directoryPath);
    await Promise.all(directoryFileNames.map(fileName => deleteFile(directoryPath + '/' + fileName)));
    await deleteDirectory(directoryPath);
};

/** Generates a file path for table files. */
export function generateFilePath({database, table, directoryPath, fileName}: {database: Database, table: Table, directoryPath: string, fileName: string})
{
    const filePath = directoryPath + '/' + database.name + '_' + table.name + '_' + table.id + '_' + fileName + '.json';
    return filePath;
};