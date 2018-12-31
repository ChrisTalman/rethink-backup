'use strict';

// External Modules
import { r as RethinkDB } from 'rethinkdb-ts';
import RethinkUtilities from '@bluecewe/rethink-utilities';

const instance = new RethinkUtilities({RethinkDB});
export default instance;