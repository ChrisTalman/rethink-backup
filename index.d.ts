declare module '@bluecewe/rethink-backup'
{
    /** Exports from database. */
    export function dump(): Promise<void>;
    /** Imports into database. */
    export function restore(): Promise<void>;
}