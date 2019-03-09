'use strict';

// External Modules
import * as Joi from 'joi';
import { r as RethinkDB } from 'rethinkdb-ts';
import Config from '@bluecewe/config';

// Internal Modules
import { RETHINKDB_CONNECTION_OPTIONS } from 'src/Constants';

// Types
import { Connection, RConnectionOptions } from 'rethinkdb-ts';
export interface Options
{
    /** RethinkDB connection options. */
	rethink: string | RConnectionOptions;
    pluck?: DatabaseFilters;
    without?: DatabaseFilters;
};
export interface DatabaseFilters extends Array<string | DatabaseFiltersObject> {};
export interface DatabaseFiltersObject
{
    [databaseName: string]: TablesFilters;
};
export interface TablesFilters extends Array<string> {};

// Constants
const DATABASE_FILTERS_OBJECT = Joi
	.object()
	.pattern(/.+/, Joi.array().items(Joi.string()));
const DATABASE_FILTERS = Joi.array().items(Joi.string(), DATABASE_FILTERS_OBJECT);
const OPTIONS_SCHEMA = Joi.object
	(
		{
			rethink: Joi.alternatives(Joi.string(), RETHINKDB_CONNECTION_OPTIONS).required(),
			pluck: DATABASE_FILTERS.optional(),
			without: DATABASE_FILTERS.optional()
		}
	)
	.required()
	.label('options');

/** Stores state for an export. Easily passable in deep call stacks. */
export default class Exportment
{
    public readonly options: Options;
    public connection: Connection;
	/** Initialises instance. */
    constructor({options}: {options: Options})
    {
        this.options = this.validateOptions(options);
    };
	/** Validates and transforms options object. */
    private validateOptions(options: Options)
    {
        const validated = Joi.validate(options, OPTIONS_SCHEMA);
		options = validated.value;
		return options;
    };
	/** Connects to RethinkDB. */
	public async initialise()
	{
		let rethinkConnectionOptions: RConnectionOptions;
		if (typeof this.options.rethink === 'string')
		{
			const config = new Config <RConnectionOptions> ({initialise: false, schema: false, file: this.options.rethink});
			try
			{
				await config.initialise();
			}
			catch (error)
			{
				throw new ConnectionConfigFileError(error);
			};
			const data = config.data;
			rethinkConnectionOptions = data;
		}
		else
		{
			rethinkConnectionOptions = this.options.rethink;
		};
		this.connection = await RethinkDB.connect(rethinkConnectionOptions);
	};
	/** Disconnects from RethinkDB. */
	public async finish()
	{
		await this.connection.close();
	};
};

export class ConnectionConfigFileError extends Error
{
	constructor(error: Error)
	{
		const message = 'RethinkDB connection options file error: ' + error.message;
		super(message);
	};
};