'use strict';

// External Modules
import { promises as FileSystemPromises } from 'fs';
const { writeFile } = FileSystemPromises;
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Types
import { Manifest, Databases } from 'src/Types/Manifest';

export default async function generate({directoryPath}: {directoryPath: string})
{
    const databases = await getDatabases();
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

async function getDatabases()
{
    const query = RethinkDB
        .db('rethinkdb')
        .table('db_config')
        .merge
        (
            (database: any) =>
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