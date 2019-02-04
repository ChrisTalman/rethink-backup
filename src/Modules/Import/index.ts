'use strict';

// To Do: Allow import of .tar and folders. Currently, you can only import a .tar.xz.

// External Modules
import { promises as FileSystemPromises, createReadStream, createWriteStream } from 'fs';
const { mkdir: makeDirectory, unlink: deleteFile, readFile } = FileSystemPromises;
import { extract as extractTar } from 'tar';
import { createDecompressor as createXzDecompressor } from 'lzma-native';

// Internal Modules
import generateWriteStreamPromise from 'src/Modules/Utilities/GenerateWriteStreamPromise';
import Importment from './Importment';
import importDatabase from './Database';

// Types
import { Manifest } from 'src/Types/Export/Manifest';
import { Options } from './Importment';

export default async function(options: Options)
{
    const importment = new Importment({options});
	await importment.initialise();
    try
    {
        await importDatabases({importment});
    }
    catch (error)
    {
        throw error;
    }
    finally
    {
        await importment.finish();
    };
};

async function importDatabases({importment}: {importment: Importment})
{
    const manifest = await decompress({importment});
    await Promise.all
    (
        manifest.databases.map
        (
            database => importDatabase({database, importment})
        )
    );
};

async function decompress({importment}: {importment: Importment})
{
    const compressor = createXzDecompressor();
    const readStream = createReadStream(importment.options.file);
    const tarFileName = importment.options.file.replace(/\.xz$/, '');
    const writeStream = createWriteStream(tarFileName);
    const writePromise = generateWriteStreamPromise(writeStream);
    readStream.pipe(compressor).pipe(writeStream);
    await writePromise;
    const exportDirectory = generateRelativeExportDirectoryPath({importment});
    try
    {
        await makeDirectory(exportDirectory);
    }
    catch (error)
    {
        const nodeError: NodeJS.ErrnoException = error;
        if (nodeError.code !== 'EEXIST') throw error;
    };
    await extractTar({file: tarFileName, cwd: exportDirectory});
    await deleteFile(tarFileName);
    const manifestFileName = exportDirectory + '/manifest.json';
    const manifestSource = await readFile(manifestFileName, 'utf8');
    const manifest: Manifest = JSON.parse(manifestSource);
    return manifest;
};

export function generateRelativeExportDirectoryPath({importment}: {importment: Importment})
{
    const path = './' + importment.options.file.replace(/\.tar\.xz$/, '');
    return path;
};