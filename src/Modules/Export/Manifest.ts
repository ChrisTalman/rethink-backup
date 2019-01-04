'use strict';

// To Do: Filter tables.

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Types
import { RDatum } from 'rethinkdb-ts';
import { Manifest, Databases } from 'src/Types/Manifest';
import { Options, DatabaseFilters } from './';
interface DatabaseFiltersExpression extends RDatum<DatabaseFilters> {};

export default async function generate({directoryPath, options}: {directoryPath: string, options: Options})
{
    const databases = await getDatabases(options);
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

async function getDatabases(options: Options)
{
    const databaseFilters = getFilters(options);
    const query = RethinkDB
        .db('rethinkdb')
        .table('db_config')
        .filter(database => filterDatabase(database, databaseFilters, options))
        .merge
        (
            (database: RDatum) =>
            (
                {
                    tables: RethinkDB
                        .db('rethinkdb')
                        .table('table_config')
                        .filter({db: database('name')})
                        .pluck('id', 'name')
                        .coerceTo('array')
                }
            )
        );
    const tables: Databases = await RethinkUtilities.run({query});
    return tables;
};

function filterDatabase(database: RDatum, filters: DatabaseFiltersExpression, options: Options)
{
    const query = RethinkDB
        .or
        (
            filters.typeOf().eq('NULL'),
            filters.contains(database('name')).eq('pluck' in options)
        );
    return query;
};

function getFilters(options: Options)
{
    if (!('pluck' in options) && !('without' in options)) return null;
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
    const expression: DatabaseFiltersExpression = RethinkDB.expr(flattened);
    return expression;
};