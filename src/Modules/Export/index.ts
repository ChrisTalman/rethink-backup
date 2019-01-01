'use strict';

// To Do: Guarantee file name uniqueness.

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { mkdir: makeDirectory, rmdir: deleteDirectory, readdir: getDirectoryFileNames, unlink: deleteFile } = FileSystemPromises;
import { create as createTar } from 'tar';
import { ulid } from 'ulid';
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import generateManifest from './Manifest';
import exportIndexes from './Indexes';
import exportDocuments from './Documents';

// Types
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
    await generateManifest({directoryPath});
    const databaseNames = await getDatabaseNames(options);
    for (let databaseName of databaseNames)
    {
        const tables = await getTables(databaseName);
        for (let table of tables)
        {
            await exportTable({databaseName, table, directoryPath});
        };
    };
    await compressDirectory({directoryPath, name: exportName});
};

async function exportTable({databaseName, table, directoryPath}: {databaseName: string, table: Table, directoryPath: string})
{
    await exportIndexes({databaseName, table, directoryPath});
    await exportDocuments({databaseName, table, directoryPath});
};

async function getDatabaseNames(options: Options)
{
    let query = RethinkDB
        .dbList()
        .filter(name => name.ne('rethinkdb'));
    if ('pluck' in options || 'without' in options)
    {
        const filters = ('pluck' in options && options.pluck) || ('without' in options && options.without);
        const evaluatedFilters = filters.reduce
        (
            (names, databaseVariant) =>
            {
                if (typeof databaseVariant === 'string') names.push(databaseVariant);
                else names.push(... Object.keys(databaseVariant));
                return names;
            },
            [] as Array<string>
        );
        if ('pluck' in options) query = query.filter(name => RethinkDB.expr(evaluatedFilters).contains(name).eq(true));
        else query = query.filter(name => RethinkDB.expr(evaluatedFilters).contains(name).eq(false));
    };
    const names: Array<string> = await RethinkUtilities.run({query});
    return names;
};

async function getTables(databaseName: string)
{
    const query = RethinkDB
        .db('rethinkdb')
        .table('table_config')
        .filter({db: databaseName})
        .pluck('id', 'name');
    const tables: Tables = await RethinkUtilities.run({query});
    return tables;
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
    const fileName = name + '.tar.gz';
    await createTar({file: fileName, cwd: directoryPath, gzip: true}, ['./']);
    const directoryFileNames = await getDirectoryFileNames(directoryPath);
    await Promise.all(directoryFileNames.map(fileName => deleteFile(directoryPath + '/' + fileName)));
    await deleteDirectory(directoryPath);
};

/** Generates a file path for table files. */
export function generateFilePath({databaseName, table, directoryPath, fileName}: {databaseName: string, table: Table, directoryPath: string, fileName: string})
{
    const filePath = directoryPath + '/' + databaseName + '_' + table.name + '_' + table.id + '_' + fileName + '.json';
    return filePath;
};