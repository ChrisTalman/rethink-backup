declare module '@chris-talman/rethink-backup'
{
	// Types
	import { RConnectionOptions } from 'rethinkdb-ts';

	/** Exports from database. */
	export function archive(options: ArchiveOptions): Promise<ArchiveResult>;
	export interface ArchiveOptions
	{
		/** RethinkDB connection options. */
		rethink: string | RConnectionOptions;
		pluck?: DatabaseFilters;
		without?: DatabaseFilters;
	}
	export interface DatabaseFilters extends Array<string | DatabaseFiltersObject> {}
	export interface DatabaseFiltersObject
	{
		[databaseName: string]: TablesFilters;
	}
	export interface TablesFilters extends Array<string> {}
	export interface ArchiveResult
	{
		fileName: string;
		fileExtension: string;
	}
	/** Imports into database. */
	export function insert(options: InsertOptions): Promise<void>;
	export interface InsertOptions
	{
		/** RethinkDB connection options. */
		rethink: string | RConnectionOptions;
	    /** File name of backup to import. Must be .tar.xz file. */
	    file: string;
	    /** Delete documents and indexes from exisitng tables for which backup data is available. Default: false. */
	    clear?: boolean;
	    /** Shard tables according to backup data. Default: false. */
	    shard?: boolean;
	    /** Replicate tables according to backup data. Default: false. */
	    replicate?: boolean;
	}
}