'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { readFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import { generateFilePath } from 'src/Modules/Export';
import { generateRelativeExportDirectoryPath } from './';

// Types
import { TableCreateOptions } from 'rethinkdb-ts';
import { Database, Table } from 'src/Types/Export/Manifest';
import { Index, Indexes } from 'src/Types/Export/Indexes';
import { Options } from './';

export default async function({database, table, options}: {database: Database, table: Table, options: Options})
{
    await guaranteeTable({database, table, options});
    await clearTable({database, table, options});
    await populateTable({database, table, options});
};

async function guaranteeTable({database, table, options}: {database: Database, table: Table, options: Options})
{
    const tableOptions: TableCreateOptions =
    {
        primaryKey: table.primary_key,
        durability: table.durability
    };
    if (options.shard) tableOptions.shards = table.shards;
    if (options.replicate) tableOptions.replicas = table.replicas;
    const query = RethinkDB
        .branch
        (
            RethinkDB.db(database.name).tableList().contains(table.name).eq(false),
            RethinkDB.db(database.name).tableCreate(table.name, tableOptions),
            true
        );
    await RethinkUtilities.run({query});
};

async function clearTable({database, table, options}: {database: Database, table: Table, options: Options})
{
    if (!options.clear) return;
    await Promise.all
    (
        [
            clearDocuments({database, table}),
            clearIndexes({database, table})
        ]
    );
};

async function clearDocuments({database, table}: {database: Database, table: Table})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name)
        .delete();
    await RethinkUtilities.run({query});
};

async function clearIndexes({database, table}: {database: Database, table: Table})
{
    const indexNames = await getIndexNames({database, table});
    await Promise.all(indexNames.map(indexName => deleteIndex({database, table, indexName})));
};

async function deleteIndex({database, table, indexName}: {database: Database, table: Table, indexName: string})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name)
        .indexDrop(indexName);
    await query.run();
};

async function getIndexNames({database, table}: {database: Database, table: Table})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name)
        .indexList();
    const names = await query.run();
    return names;
};

async function populateTable({database, table, options}: {database: Database, table: Table, options: Options})
{
    await populateIndexes({database, table, options});
    await populateDocuments({database, table, options});
};

async function populateIndexes({database, table, options}: {database: Database, table: Table, options: Options})
{
    const filePath = generateFilePath({database, table, directoryPath: generateRelativeExportDirectoryPath(options), fileName: 'indexes'});
    const source = await readFile(filePath, 'utf8');
    const indexes: Indexes = JSON.parse(source);
    await Promise.all(indexes.map(index => insertIndex({database, table, index})));
};

async function insertIndex({database, table, index}: {database: Database, table: Table, index: Index})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name)
        .indexCreate(index.index, Buffer.from(index.function), {multi: index.multi, geo: index.geo});
    await query.run();
};

async function populateDocuments({database, table, options}: {database: Database, table: Table, options: Options})
{
    const filePath = generateFilePath({database, table, directoryPath: generateRelativeExportDirectoryPath(options), fileName: 'documents'});
    const source = await readFile(filePath, 'utf8');
    const documents: Array<object> = JSON.parse(source);
    await insertDocuments({database, table, documents});
};

async function insertDocuments({database, table, documents}: {database: Database, table: Table, documents: Array<object>})
{
    const query = RethinkDB
        .db(database.name)
        .table(table.name)
        .insert(documents);
    await query.run();
};