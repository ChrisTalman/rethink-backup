'use strict';

// To Do: Filter tables.

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import Exportment from './Exportment';

// Types
import { RDatum } from 'rethinkdb-ts';
import { Manifest, Databases } from 'src/Types/Export/Manifest';
import { Options, DatabaseFilters } from './Exportment';
type DatabaseFiltersExpression = RDatum<DatabaseFilters> | RDatum<null>;

export default async function generate({directoryPath, exportment}: {directoryPath: string, exportment: Exportment})
{
	const databases = await getDatabases({exportment});
	const manifest: Manifest =
	{
		moduleVersion: MODULE_VERSION,
		databases
	};
	const json = JSON.stringify(manifest);
	const fileName = 'manifest.json';
	const filePath = directoryPath + '/' + fileName;
	await writeFile(filePath, json);
	return manifest;
};

async function getDatabases({exportment}: {exportment: Exportment})
{
	const databaseFilters = getFilters(exportment.options);
	const query = RethinkDB
		.db('rethinkdb')
		.table('db_config')
		.filter(database => filterDatabase(database, databaseFilters, exportment.options))
		.merge
		(
			(database: RDatum) =>
			(
				{
					tables: RethinkDB
						.db('rethinkdb')
						.table('table_config')
						.filter({db: database('name')})
						.pluck('id', 'name', 'primary_key', 'durability', 'shards')
						.merge
						(
							(table: RDatum) =>
							(
								{
									shards: table('shards').count(),
									replicas: table('shards').nth(0)('replicas').count()
								}
							)
						)
						.coerceTo('array')
				}
			)
		);
	const tables: Databases = await query.run(exportment.connection);
	return tables;
};

function filterDatabase(database: RDatum, filters: DatabaseFiltersExpression, options: Options)
{
	const query = RethinkDB
		.or
		(
			filters.typeOf().eq('NULL'),
			(filters as any).contains(database('name')).eq('pluck' in options)
		);
	return query;
};

function getFilters(options: Options)
{
	if (!('pluck' in options) && !('without' in options)) return RethinkDB.expr<null>(null);
	const filters = ('pluck' in options && options.pluck) || ('without' in options && options.without);
	const flattened = filters.reduce
	(
		(names, databaseVariant) =>
		{
			if (typeof databaseVariant === 'string') names.push(databaseVariant);
			else names.push(... Object.keys(databaseVariant));
			return names;
		},
		[] as Array<string>
	);
	const expression = RethinkDB.expr(flattened) as DatabaseFiltersExpression;
	return expression;
};