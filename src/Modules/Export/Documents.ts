'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import { generateFilePath } from './';

// Types
import { Table } from './';

export default async function({databaseName, table, directoryPath}: {databaseName: string, table: Table, directoryPath: string})
{
    const documents = await getIndexes({databaseName, table});
    const fileContents = JSON.stringify(documents);
    const filePath = generateFilePath({databaseName, table, directoryPath, fileName: 'documents'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({databaseName, table}: {databaseName: string, table: Table})
{
    const query = RethinkDB
        .db(databaseName)
        .table(table.name);
    const documents: Array<any> = await RethinkUtilities.run({query});
    return documents;
};