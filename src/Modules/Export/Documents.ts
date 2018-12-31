'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import { generateFilePath } from './';

export default async function({databaseName, tableName, directoryPath}: {databaseName: string, tableName: string, directoryPath: string})
{
    const documents = await getIndexes({databaseName, tableName});
    const fileContents = JSON.stringify(documents);
    const filePath = generateFilePath({databaseName, tableName, directoryPath, fileName: 'documents'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({databaseName, tableName}: {databaseName: string, tableName: string})
{
    const query = RethinkDB
        .db(databaseName)
        .table(tableName);
    const documents: Array<any> = await RethinkUtilities.run({query});
    return documents;
};