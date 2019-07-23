'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import { generateFilePath } from './';
import Exportment from './Exportment';

// Types
import { IndexStatus } from 'rethinkdb-ts';
import { Database } from 'src/Types/Export/Manifest';
import { Indexes } from 'src/Types/Export/Indexes';
import { Table } from './';

export default async function({database, table, directoryPath, exportment}: {database: Database, table: Table, directoryPath: string, exportment: Exportment})
{
	const indexes = await getIndexes({database, table, exportment});
	const exported: Indexes = indexes.map
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
	const filePath = generateFilePath({database, table, directoryPath, fileName: 'indexes'});
	await writeFile(filePath, fileContents);
};

async function getIndexes({database, table, exportment}: {database: Database, table: Table, exportment: Exportment})
{
	const query = RethinkDB
		.db(database.name)
		.table(table.name)
		.indexStatus();
	const indexes: Array<IndexStatus> = await query.run(exportment.connection);
	return indexes;
};