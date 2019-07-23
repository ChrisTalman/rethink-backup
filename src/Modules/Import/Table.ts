'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { readFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import { generateFilePath } from 'src/Modules/Export';
import Importment from './Importment';
import { generateRelativeExportDirectoryPath } from './';

// Types
import { TableCreateOptions } from 'rethinkdb-ts';
import { Database, Table } from 'src/Types/Export/Manifest';
import { Index, Indexes } from 'src/Types/Export/Indexes';

export default async function({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	await guaranteeTable({database, table, importment});
	await clearTable({database, table, importment});
	await populateTable({database, table, importment});
};

async function guaranteeTable({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const tableOptions: TableCreateOptions =
	{
		primaryKey: table.primary_key,
		durability: table.durability
	};
	if (importment.options.shard) tableOptions.shards = table.shards;
	if (importment.options.replicate) tableOptions.replicas = table.replicas;
	const query = RethinkDB
		.branch
		(
			RethinkDB.db(database.name).tableList().contains(table.name).eq(false),
			RethinkDB.db(database.name).tableCreate(table.name, tableOptions),
			true
		);
	await query.run(importment.connection);
};

async function clearTable({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	if (!importment.options.clear) return;
	await Promise.all
	(
		[
			clearDocuments({database, table, importment}),
			clearIndexes({database, table, importment})
		]
	);
};

async function clearDocuments({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.delete();
	await query.run(importment.connection);
};

async function clearIndexes({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const indexNames = await getIndexNames({database, table, importment});
	await Promise.all
	(
		indexNames.map
		(
			indexName => deleteIndex({database, table, indexName, importment})
		)
	);
};

async function deleteIndex({database, table, indexName, importment}: {database: Database, table: Table, indexName: string, importment: Importment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.indexDrop(indexName);
	await query.run(importment.connection);
};

async function getIndexNames({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.indexList();
	const names = await query.run(importment.connection);
	return names;
};

async function populateTable({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	await populateIndexes({database, table, importment});
	await populateDocuments({database, table, importment});
};

async function populateIndexes({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const filePath = generateFilePath({database, table, directoryPath: generateRelativeExportDirectoryPath({importment}), fileName: 'indexes'});
	const source = await readFile(filePath, 'utf8');
	const indexes: Indexes = JSON.parse(source);
	await Promise.all(indexes.map(index => insertIndex({database, table, index, importment})));
};

async function insertIndex({database, table, index, importment}: {database: Database, table: Table, index: Index, importment: Importment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.indexCreate(index.index, Buffer.from(index.function), {multi: index.multi, geo: index.geo});
	await query.run(importment.connection);
};

async function populateDocuments({database, table, importment}: {database: Database, table: Table, importment: Importment})
{
	const filePath = generateFilePath({database, table, directoryPath: generateRelativeExportDirectoryPath({importment}), fileName: 'documents'});
	const source = await readFile(filePath, 'utf8');
	const documents: Array<object> = JSON.parse(source);
	await insertDocuments({database, table, documents, importment});
};

async function insertDocuments({database, table, documents, importment}: {database: Database, table: Table, documents: Array<object>, importment: Importment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.insert(documents);
	await query.run(importment.connection);
};