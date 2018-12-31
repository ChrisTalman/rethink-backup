'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import { generateFilePath } from './';

// Types
import { IndexStatus } from 'rethinkdb-ts';

export default async function({databaseName, tableName, directoryPath}: {databaseName: string, tableName: string, directoryPath: string})
{
    const indexes = await getIndexes({databaseName, tableName});
    const exported = indexes.map
    (
        index =>
        (
            {
                index: index.index,
                function: index.function.toJSON().data,
                multi: index.multi,
                geo: index.geo
            }
        )
    );
    const fileContents = JSON.stringify(exported);
    const filePath = generateFilePath({databaseName, tableName, directoryPath, fileName: 'indexes'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({databaseName, tableName}: {databaseName: string, tableName: string})
{
    const query = RethinkDB
        .db(databaseName)
        .table(tableName)
        .indexStatus();
    const indexes: Array<IndexStatus> = await RethinkUtilities.run({query});
    return indexes;
};