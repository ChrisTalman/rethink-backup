'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import { generateFilePath } from './';

// Types
import { Database } from 'src/Types/Manifest';
import { Table } from './';

export default async function({database, table, directoryPath}: {database: Database, table: Table, directoryPath: string})
{
    const documents = await getIndexes({database, table});
    const fileContents = JSON.stringify(documents);
    const filePath = generateFilePath({database, table, directoryPath, fileName: 'documents'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({database, table}: {database: Database, table: Table})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name);
    const documents: Array<any> = await RethinkUtilities.run({query});
    return documents;
};