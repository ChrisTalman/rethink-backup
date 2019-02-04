'use strict';

// External Modules
import { r as RethinkDB } from 'rethinkdb-ts';

// Internal Modules
import Importment from './Importment';
import importTable from './Table';

// Types
import { Database } from 'src/Types/Export/Manifest';

export default async function({database, importment}: {database: Database, importment: Importment})
{
    await guaranteeDatabase({database, importment});
    await Promise.all(database.tables.map(table => importTable({database, table, importment})));
};

async function guaranteeDatabase({database, importment}: {database: Database, importment: Importment})
{
    const query = RethinkDB
        .branch
        (
            RethinkDB.dbList().contains(database.name).eq(false),
            RethinkDB.dbCreate(database.name),
            true
        );
    await query.run(importment.connection);
};