// Types
import { RConnectionOptions } from 'rethinkdb-ts';

declare module '@chris-talman/rethink-backup'
{
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
	export function insert(): Promise<void>;
}