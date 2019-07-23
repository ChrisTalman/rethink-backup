'use strict';

// External Modules
import * as Joi from 'joi';

export const RETHINKDB_CONNECTION_OPTIONS = Joi.object
	(
		{
			host: Joi.string().optional(),
			port: Joi.number().optional(),
			server: Joi.object().optional(),
			db: Joi.string().optional(),
			user: Joi.string().optional(),
			password: Joi.string().optional(),
			discovery: Joi.boolean().optional(),
			pool: Joi.boolean().optional(),
			buffer: Joi.number().optional(),
			max: Joi.number().optional(),
			timeout: Joi.number().optional(),
			pingInterval: Joi.number().optional(),
			timeoutError: Joi.number().optional(),
			timeoutGb: Joi.number().optional(),
			maxExponent: Joi.number().optional(),
			silent: Joi.boolean().optional(),
			log: Joi.func().optional()
		}
	);