'use strict';

// External Modules
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from 'src/Modules/Utilities/RethinkDB';

// Internal Modules
import importTable from './Table';

// Types
import { Database } from 'src/Types/Export/Manifest';
import { Options } from './';

export default async function({database, options}: {database: Database, options: Options})
{
    await guaranteeDatabase(database);
    await Promise.all(database.tables.map(table => importTable({database, table, options})));
};

async function guaranteeDatabase(database: Database)
{
    const query = RethinkDB
        .branch
        (
            RethinkDB.dbList().contains(database.name).eq(false),
            RethinkDB.dbCreate(database.name),
            true
        );
    await RethinkUtilities.run({query});
};