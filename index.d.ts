declare module '@bluecewe/rethink-backup'
{
    /** Exports from database. */
    export function archive(): Promise<void>;
    /** Imports into database. */
    export function insert(): Promise<void>;
}