'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { mkdir: makeDirectory } = FileSystemPromises;
import { ulid } from 'ulid';
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import exportIndexes from './Indexes';
import exportDocuments from './Documents';

export default async function()
{
    const pool = await RethinkDB.connectPool();
    await exportDatabases();
    await pool.drain();
};

async function exportDatabases()
{
    const directoryPath = await createDirectory();
    const databaseNames = await getDatabaseNames();
    for (let databaseName of databaseNames)
    {
        const tableNames = await getTableNames(databaseName);
        for (let tableName of tableNames)
        {
            await exportIndexes({databaseName, tableName, directoryPath});
            await exportDocuments({databaseName, tableName, directoryPath});
        };
    };
};

async function getDatabaseNames()
{
    const query = RethinkDB.dbList();
    const names: Array<string> = await RethinkUtilities.run({query});
    names.splice(names.findIndex(name => name === 'rethinkdb'), 1);
    return names;
};

async function getTableNames(databaseName: string)
{
    const query = RethinkDB
        .db(databaseName)
        .tableList();
    const names: Array<string> = await RethinkUtilities.run({query});
    return names;
};

/** Creates a directory for the export, and returns its path. */
async function createDirectory()
{
    const id = ulid();
    const name = 'rethinkdb_export_' + id;
    const path = './' + name;
    await makeDirectory(path);
    return path;
};

/** Generates a file path for table files. */
export function generateFilePath({databaseName, tableName, directoryPath, fileName}: {databaseName: string, tableName: string, directoryPath: string, fileName: string})
{
    const filePath = directoryPath + '/' + databaseName + '_' + tableName + '_' + fileName + '.json';
    return filePath;
};