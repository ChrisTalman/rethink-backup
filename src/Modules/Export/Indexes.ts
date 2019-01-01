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
import { Table } from './';

export default async function({databaseName, table, directoryPath}: {databaseName: string, table: Table, directoryPath: string})
{
    const indexes = await getIndexes({databaseName, table});
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
    const filePath = generateFilePath({databaseName, table, directoryPath, fileName: 'indexes'});
    await writeFile(filePath, fileContents);
};

async function getIndexes({databaseName, table}: {databaseName: string, table: Table})
{
    const query = RethinkDB
        .db(databaseName)
        .table(table.name)
        .indexStatus();
    const indexes: Array<IndexStatus> = await RethinkUtilities.run({query});
    return indexes;
};