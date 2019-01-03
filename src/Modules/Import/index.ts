'use strict';

// External Modules
import { promises as FileSystemPromises, createReadStream, createWriteStream } from 'fs';
const { mkdir: makeDirectory, unlink: deleteFile, readFile } = FileSystemPromises;
import { extract as extractTar } from 'tar';
import { createDecompressor as createXzDecompressor } from 'lzma-native';
import * as Joi from 'joi';
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import generateWriteStreamPromise from 'src/Modules/Utilities/GenerateWriteStreamPromise';

// Types
import { Manifest } from 'src/Types/Manifest';
export interface Options
{
    /** File name of backup to import. */
    file: string;
    /** Delete documents and indexes from exisitng tables for which backup data is available. */
    clear?: boolean;
};

// Constants
const OPTIONS_DEFAULT =
{
    clear: false
};
const OPTIONS_SCHEMA = Joi.object
    (
        {
            file: Joi.string().required(),
            clear: Joi.boolean().default(OPTIONS_DEFAULT.clear)
        }
    )
    .default(OPTIONS_DEFAULT);

export default async function(options: Options = {} as Options)
{
    options = validateOptions(options);
    const pool = await RethinkDB.connectPool();
    await importDatabases(options);
    await pool.drain();
};

async function importDatabases(options: Options)
{
    const manifest = await decompress(options);
};

async function decompress(options: Options)
{
    const compressor = createXzDecompressor();
    const readStream = createReadStream(options.file);
    const tarFileName = options.file.replace(/\.xz$/, '');
    const writeStream = createWriteStream(tarFileName);
    const writePromise = generateWriteStreamPromise(writeStream);
    readStream.pipe(compressor).pipe(writeStream);
    await writePromise;
    const exportDirectory = './' + options.file.replace(/\.tar\.xz$/, '');
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

function validateOptions(options: Options)
{
    const validated = Joi.validate(options, OPTIONS_SCHEMA, {allowUnknown: false});
    if (validated.error) throw new Error(validated.error.message);
    options = validated.value;
    return options;
};