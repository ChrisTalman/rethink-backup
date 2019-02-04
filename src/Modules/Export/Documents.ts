'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import { generateFilePath } from './';
import Exportment from './Exportment';

// Types
import { Database } from 'src/Types/Export/Manifest';
import { Table } from './';

export default async function({database, table, directoryPath, exportment}: {database: Database, table: Table, directoryPath: string, exportment: Exportment})
{
    const documents = await getIndexes({database, table, exportment});
    const fileContents = JSON.stringify(documents);
    const filePath = generateFilePath({database, table, directoryPath, fileName: 'documents'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({database, table, exportment}: {database: Database, table: Table, exportment: Exportment})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name);
    const documents: Array<any> = await query.run(exportment.connection);
    return documents;
};