(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Modules/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Constants.ts":
/*!**************************!*\
  !*** ./src/Constants.ts ***!
  \**************************/
/*! exports provided: RETHINKDB_CONNECTION_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETHINKDB_CONNECTION_OPTIONS\", function() { return RETHINKDB_CONNECTION_OPTIONS; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst RETHINKDB_CONNECTION_OPTIONS = joi__WEBPACK_IMPORTED_MODULE_0__[\"object\"]({\r\n    host: joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().optional(),\r\n    port: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    server: joi__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().optional(),\r\n    db: joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().optional(),\r\n    user: joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().optional(),\r\n    password: joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().optional(),\r\n    discovery: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().optional(),\r\n    pool: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().optional(),\r\n    buffer: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    max: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    timeout: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    pingInterval: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    timeoutError: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    timeoutGb: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    maxExponent: joi__WEBPACK_IMPORTED_MODULE_0__[\"number\"]().optional(),\r\n    silent: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().optional(),\r\n    log: joi__WEBPACK_IMPORTED_MODULE_0__[\"func\"]().optional()\r\n});\r\n\n\n//# sourceURL=webpack:///./src/Constants.ts?");

/***/ }),

/***/ "./src/Modules/Export/Documents.ts":
/*!*****************************************!*\
  !*** ./src/Modules/Export/Documents.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/Modules/Export/index.ts\");\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, table, directoryPath, exportment }) {\r\n    const documents = await getIndexes({ database, table, exportment });\r\n    const fileContents = JSON.stringify(documents);\r\n    const filePath = Object(___WEBPACK_IMPORTED_MODULE_2__[\"generateFilePath\"])({ database, table, directoryPath, fileName: 'documents' });\r\n    await writeFile(filePath, fileContents);\r\n});\r\n;\r\nasync function getIndexes({ database, table, exportment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name);\r\n    const documents = await query.run(exportment.connection);\r\n    return documents;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Documents.ts?");

/***/ }),

/***/ "./src/Modules/Export/Exportment.ts":
/*!******************************************!*\
  !*** ./src/Modules/Export/Exportment.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Exportment; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Constants */ \"./src/Constants.ts\");\n\r\n\r\n\r\n\r\n;\r\n;\r\n;\r\n;\r\nconst DATABASE_FILTERS_OBJECT = joi__WEBPACK_IMPORTED_MODULE_0__[\"object\"]()\r\n    .pattern(/.+/, joi__WEBPACK_IMPORTED_MODULE_0__[\"array\"]().items(joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]()));\r\nconst DATABASE_FILTERS = joi__WEBPACK_IMPORTED_MODULE_0__[\"array\"]().items(joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"](), DATABASE_FILTERS_OBJECT);\r\nconst OPTIONS_SCHEMA = joi__WEBPACK_IMPORTED_MODULE_0__[\"object\"]({\r\n    rethink: src_Constants__WEBPACK_IMPORTED_MODULE_2__[\"RETHINKDB_CONNECTION_OPTIONS\"].required(),\r\n    pluck: DATABASE_FILTERS.optional(),\r\n    without: DATABASE_FILTERS.optional()\r\n})\r\n    .required()\r\n    .label('options');\r\nclass Exportment {\r\n    constructor({ options }) {\r\n        this.options = this.validateOptions(options);\r\n    }\r\n    ;\r\n    validateOptions(options) {\r\n        const validated = joi__WEBPACK_IMPORTED_MODULE_0__[\"validate\"](options, OPTIONS_SCHEMA);\r\n        options = validated.value;\r\n        return options;\r\n    }\r\n    ;\r\n    async initialise() {\r\n        this.connection = await rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].connect(this.options.rethink);\r\n    }\r\n    ;\r\n    async finish() {\r\n        await this.connection.close();\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Exportment.ts?");

/***/ }),

/***/ "./src/Modules/Export/Indexes.ts":
/*!***************************************!*\
  !*** ./src/Modules/Export/Indexes.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/Modules/Export/index.ts\");\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, table, directoryPath, exportment }) {\r\n    const indexes = await getIndexes({ database, table, exportment });\r\n    const exported = indexes.map(index => ({\r\n        index: index.index,\r\n        function: index.function.toJSON().data,\r\n        multi: index.multi,\r\n        geo: index.geo\r\n    }));\r\n    const fileContents = JSON.stringify(exported);\r\n    const filePath = Object(___WEBPACK_IMPORTED_MODULE_2__[\"generateFilePath\"])({ database, table, directoryPath, fileName: 'indexes' });\r\n    await writeFile(filePath, fileContents);\r\n});\r\n;\r\nasync function getIndexes({ database, table, exportment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .indexStatus();\r\n    const indexes = await query.run(exportment.connection);\r\n    return indexes;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Indexes.ts?");

/***/ }),

/***/ "./src/Modules/Export/Manifest.ts":
/*!****************************************!*\
  !*** ./src/Modules/Export/Manifest.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generate; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n;\r\nasync function generate({ directoryPath, exportment }) {\r\n    const databases = await getDatabases({ exportment });\r\n    const manifest = {\r\n        moduleVersion: \"2.0.0\",\r\n        databases\r\n    };\r\n    const json = JSON.stringify(manifest);\r\n    const fileName = 'manifest.json';\r\n    const filePath = directoryPath + '/' + fileName;\r\n    await writeFile(filePath, json);\r\n    return manifest;\r\n}\r\n;\r\nasync function getDatabases({ exportment }) {\r\n    const databaseFilters = getFilters(exportment.options);\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db('rethinkdb')\r\n        .table('db_config')\r\n        .filter(database => filterDatabase(database, databaseFilters, exportment.options))\r\n        .merge((database) => ({\r\n        tables: rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n            .db('rethinkdb')\r\n            .table('table_config')\r\n            .filter({ db: database('name') })\r\n            .pluck('id', 'name', 'primary_key', 'durability', 'shards')\r\n            .merge((table) => ({\r\n            shards: table('shards').count(),\r\n            replicas: table('shards').nth(0)('replicas').count()\r\n        }))\r\n            .coerceTo('array')\r\n    }));\r\n    const tables = await query.run(exportment.connection);\r\n    return tables;\r\n}\r\n;\r\nfunction filterDatabase(database, filters, options) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .or(filters.typeOf().eq('NULL'), filters.contains(database('name')).eq('pluck' in options));\r\n    return query;\r\n}\r\n;\r\nfunction getFilters(options) {\r\n    if (!('pluck' in options) && !('without' in options))\r\n        return null;\r\n    const filters = ('pluck' in options && options.pluck) || ('without' in options && options.without);\r\n    const flattened = filters.reduce((names, databaseVariant) => {\r\n        if (typeof databaseVariant === 'string')\r\n            names.push(databaseVariant);\r\n        else\r\n            names.push(...Object.keys(databaseVariant));\r\n        return names;\r\n    }, []);\r\n    const expression = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].expr(flattened);\r\n    return expression;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Manifest.ts?");

/***/ }),

/***/ "./src/Modules/Export/index.ts":
/*!*************************************!*\
  !*** ./src/Modules/Export/index.ts ***!
  \*************************************/
/*! exports provided: default, generateFilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateFilePath\", function() { return generateFilePath; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tar */ \"tar\");\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lzma-native */ \"lzma-native\");\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lzma_native__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ulid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ulid */ \"ulid\");\n/* harmony import */ var ulid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ulid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Exportment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Exportment */ \"./src/Modules/Export/Exportment.ts\");\n/* harmony import */ var _Manifest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Manifest */ \"./src/Modules/Export/Manifest.ts\");\n/* harmony import */ var _Indexes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Indexes */ \"./src/Modules/Export/Indexes.ts\");\n/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Documents */ \"./src/Modules/Export/Documents.ts\");\n/* harmony import */ var src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Modules/Utilities/GenerateWriteStreamPromise */ \"./src/Modules/Utilities/GenerateWriteStreamPromise.ts\");\n\r\n\r\nconst { mkdir: makeDirectory, rmdir: deleteDirectory, readdir: getDirectoryFileNames, unlink: deleteFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n;\r\n;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ options }) {\r\n    const exportment = new _Exportment__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ options });\r\n    await exportment.initialise();\r\n    try {\r\n        await exportDatabases({ exportment });\r\n    }\r\n    catch (error) {\r\n        throw error;\r\n    }\r\n    finally {\r\n        await exportment.finish();\r\n    }\r\n    ;\r\n});\r\n;\r\nasync function exportDatabases({ exportment }) {\r\n    const exportId = Object(ulid__WEBPACK_IMPORTED_MODULE_3__[\"ulid\"])();\r\n    const exportName = 'rethinkdb_export_' + exportId;\r\n    const directoryPath = await createDirectory({ name: exportName });\r\n    const manifest = await Object(_Manifest__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ directoryPath, exportment });\r\n    for (let database of manifest.databases) {\r\n        for (let table of database.tables) {\r\n            await exportTable({ database, table, directoryPath, exportment });\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    await compressDirectory({ directoryPath, name: exportName });\r\n}\r\n;\r\nasync function exportTable({ database, table, directoryPath, exportment }) {\r\n    await Object(_Indexes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ database, table, directoryPath, exportment });\r\n    await Object(_Documents__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ database, table, directoryPath, exportment });\r\n}\r\n;\r\nasync function createDirectory({ name }) {\r\n    const path = './' + name;\r\n    await makeDirectory(path);\r\n    return path;\r\n}\r\n;\r\nasync function compressDirectory({ directoryPath, name }) {\r\n    const tarFileName = name + '.tar';\r\n    await Object(tar__WEBPACK_IMPORTED_MODULE_1__[\"create\"])({ file: tarFileName, cwd: directoryPath }, ['./']);\r\n    const xzFileName = tarFileName + '.xz';\r\n    const compressor = Object(lzma_native__WEBPACK_IMPORTED_MODULE_2__[\"createCompressor\"])();\r\n    const readStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createReadStream\"])(tarFileName);\r\n    const writeStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createWriteStream\"])(xzFileName);\r\n    const writePromise = Object(src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(writeStream);\r\n    readStream.pipe(compressor).pipe(writeStream);\r\n    await writePromise;\r\n    await Promise.all([\r\n        deleteFile(tarFileName),\r\n        deleteDirectoryWithContents(directoryPath)\r\n    ]);\r\n}\r\n;\r\nasync function deleteDirectoryWithContents(directoryPath) {\r\n    const directoryFileNames = await getDirectoryFileNames(directoryPath);\r\n    await Promise.all(directoryFileNames.map(fileName => deleteFile(directoryPath + '/' + fileName)));\r\n    await deleteDirectory(directoryPath);\r\n}\r\n;\r\nfunction generateFilePath({ database, table, directoryPath, fileName }) {\r\n    const filePath = directoryPath + '/' + database.name + '_' + table.name + '_' + table.id + '_' + fileName + '.json';\r\n    return filePath;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/index.ts?");

/***/ }),

/***/ "./src/Modules/Import/Database.ts":
/*!****************************************!*\
  !*** ./src/Modules/Import/Database.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table */ \"./src/Modules/Import/Table.ts\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, importment }) {\r\n    await guaranteeDatabase({ database, importment });\r\n    await Promise.all(database.tables.map(table => Object(_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ database, table, importment })));\r\n});\r\n;\r\nasync function guaranteeDatabase({ database, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__[\"r\"]\r\n        .branch(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__[\"r\"].dbList().contains(database.name).eq(false), rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__[\"r\"].dbCreate(database.name), true);\r\n    await query.run(importment.connection);\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Import/Database.ts?");

/***/ }),

/***/ "./src/Modules/Import/Importment.ts":
/*!******************************************!*\
  !*** ./src/Modules/Import/Importment.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Importment; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Constants */ \"./src/Constants.ts\");\n\r\n\r\n\r\n\r\n;\r\n;\r\n;\r\n;\r\nconst OPTIONS_SCHEMA = joi__WEBPACK_IMPORTED_MODULE_0__[\"object\"]({\r\n    rethink: src_Constants__WEBPACK_IMPORTED_MODULE_2__[\"RETHINKDB_CONNECTION_OPTIONS\"].required(),\r\n    file: joi__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\r\n    clear: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().default(false),\r\n    shard: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().default(false),\r\n    replicate: joi__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"]().default(false)\r\n})\r\n    .required()\r\n    .label('options');\r\nclass Importment {\r\n    constructor({ options }) {\r\n        this.options = this.validateOptions(options);\r\n    }\r\n    ;\r\n    validateOptions(options) {\r\n        const validated = joi__WEBPACK_IMPORTED_MODULE_0__[\"validate\"](options, OPTIONS_SCHEMA);\r\n        options = validated.value;\r\n        return options;\r\n    }\r\n    ;\r\n    async initialise() {\r\n        this.connection = await rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].connect(this.options.rethink);\r\n    }\r\n    ;\r\n    async finish() {\r\n        await this.connection.close();\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Import/Importment.ts?");

/***/ }),

/***/ "./src/Modules/Import/Table.ts":
/*!*************************************!*\
  !*** ./src/Modules/Import/Table.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Modules_Export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Modules/Export */ \"./src/Modules/Export/index.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ \"./src/Modules/Import/index.ts\");\n\r\n\r\nconst { readFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, table, importment }) {\r\n    await guaranteeTable({ database, table, importment });\r\n    await clearTable({ database, table, importment });\r\n    await populateTable({ database, table, importment });\r\n});\r\n;\r\nasync function guaranteeTable({ database, table, importment }) {\r\n    const tableOptions = {\r\n        primaryKey: table.primary_key,\r\n        durability: table.durability\r\n    };\r\n    if (importment.options.shard)\r\n        tableOptions.shards = table.shards;\r\n    if (importment.options.replicate)\r\n        tableOptions.replicas = table.replicas;\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .branch(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].db(database.name).tableList().contains(table.name).eq(false), rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].db(database.name).tableCreate(table.name, tableOptions), true);\r\n    await query.run(importment.connection);\r\n}\r\n;\r\nasync function clearTable({ database, table, importment }) {\r\n    if (!importment.options.clear)\r\n        return;\r\n    await Promise.all([\r\n        clearDocuments({ database, table, importment }),\r\n        clearIndexes({ database, table, importment })\r\n    ]);\r\n}\r\n;\r\nasync function clearDocuments({ database, table, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .delete();\r\n    await query.run(importment.connection);\r\n}\r\n;\r\nasync function clearIndexes({ database, table, importment }) {\r\n    const indexNames = await getIndexNames({ database, table, importment });\r\n    await Promise.all(indexNames.map(indexName => deleteIndex({ database, table, indexName, importment })));\r\n}\r\n;\r\nasync function deleteIndex({ database, table, indexName, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .indexDrop(indexName);\r\n    await query.run(importment.connection);\r\n}\r\n;\r\nasync function getIndexNames({ database, table, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .indexList();\r\n    const names = await query.run(importment.connection);\r\n    return names;\r\n}\r\n;\r\nasync function populateTable({ database, table, importment }) {\r\n    await populateIndexes({ database, table, importment });\r\n    await populateDocuments({ database, table, importment });\r\n}\r\n;\r\nasync function populateIndexes({ database, table, importment }) {\r\n    const filePath = Object(src_Modules_Export__WEBPACK_IMPORTED_MODULE_2__[\"generateFilePath\"])({ database, table, directoryPath: Object(___WEBPACK_IMPORTED_MODULE_3__[\"generateRelativeExportDirectoryPath\"])({ importment }), fileName: 'indexes' });\r\n    const source = await readFile(filePath, 'utf8');\r\n    const indexes = JSON.parse(source);\r\n    await Promise.all(indexes.map(index => insertIndex({ database, table, index, importment })));\r\n}\r\n;\r\nasync function insertIndex({ database, table, index, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .indexCreate(index.index, Buffer.from(index.function), { multi: index.multi, geo: index.geo });\r\n    await query.run(importment.connection);\r\n}\r\n;\r\nasync function populateDocuments({ database, table, importment }) {\r\n    const filePath = Object(src_Modules_Export__WEBPACK_IMPORTED_MODULE_2__[\"generateFilePath\"])({ database, table, directoryPath: Object(___WEBPACK_IMPORTED_MODULE_3__[\"generateRelativeExportDirectoryPath\"])({ importment }), fileName: 'documents' });\r\n    const source = await readFile(filePath, 'utf8');\r\n    const documents = JSON.parse(source);\r\n    await insertDocuments({ database, table, documents, importment });\r\n}\r\n;\r\nasync function insertDocuments({ database, table, documents, importment }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .insert(documents);\r\n    await query.run(importment.connection);\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Import/Table.ts?");

/***/ }),

/***/ "./src/Modules/Import/index.ts":
/*!*************************************!*\
  !*** ./src/Modules/Import/index.ts ***!
  \*************************************/
/*! exports provided: default, generateRelativeExportDirectoryPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRelativeExportDirectoryPath\", function() { return generateRelativeExportDirectoryPath; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tar */ \"tar\");\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lzma-native */ \"lzma-native\");\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lzma_native__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Modules/Utilities/GenerateWriteStreamPromise */ \"./src/Modules/Utilities/GenerateWriteStreamPromise.ts\");\n/* harmony import */ var _Importment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Importment */ \"./src/Modules/Import/Importment.ts\");\n/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Database */ \"./src/Modules/Import/Database.ts\");\n\r\n\r\nconst { mkdir: makeDirectory, unlink: deleteFile, readFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (options) {\r\n    const importment = new _Importment__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ options });\r\n    await importment.initialise();\r\n    try {\r\n        await importDatabases({ importment });\r\n    }\r\n    catch (error) {\r\n        throw error;\r\n    }\r\n    finally {\r\n        await importment.finish();\r\n    }\r\n    ;\r\n});\r\n;\r\nasync function importDatabases({ importment }) {\r\n    const manifest = await decompress({ importment });\r\n    await Promise.all(manifest.databases.map(database => Object(_Database__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ database, importment })));\r\n}\r\n;\r\nasync function decompress({ importment }) {\r\n    const compressor = Object(lzma_native__WEBPACK_IMPORTED_MODULE_2__[\"createDecompressor\"])();\r\n    const readStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createReadStream\"])(importment.options.file);\r\n    const tarFileName = importment.options.file.replace(/\\.xz$/, '');\r\n    const writeStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createWriteStream\"])(tarFileName);\r\n    const writePromise = Object(src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(writeStream);\r\n    readStream.pipe(compressor).pipe(writeStream);\r\n    await writePromise;\r\n    const exportDirectory = generateRelativeExportDirectoryPath({ importment });\r\n    try {\r\n        await makeDirectory(exportDirectory);\r\n    }\r\n    catch (error) {\r\n        const nodeError = error;\r\n        if (nodeError.code !== 'EEXIST')\r\n            throw error;\r\n    }\r\n    ;\r\n    await Object(tar__WEBPACK_IMPORTED_MODULE_1__[\"extract\"])({ file: tarFileName, cwd: exportDirectory });\r\n    await deleteFile(tarFileName);\r\n    const manifestFileName = exportDirectory + '/manifest.json';\r\n    const manifestSource = await readFile(manifestFileName, 'utf8');\r\n    const manifest = JSON.parse(manifestSource);\r\n    return manifest;\r\n}\r\n;\r\nfunction generateRelativeExportDirectoryPath({ importment }) {\r\n    const path = './' + importment.options.file.replace(/\\.tar\\.xz$/, '');\r\n    return path;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Import/index.ts?");

/***/ }),

/***/ "./src/Modules/Utilities/GenerateWriteStreamPromise.ts":
/*!*************************************************************!*\
  !*** ./src/Modules/Utilities/GenerateWriteStreamPromise.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (stream) {\r\n    const promise = new Promise(resolve => stream.once('finish', resolve));\r\n    return promise;\r\n});\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Utilities/GenerateWriteStreamPromise.ts?");

/***/ }),

/***/ "./src/Modules/index.ts":
/*!******************************!*\
  !*** ./src/Modules/index.ts ***!
  \******************************/
/*! exports provided: archive, insert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_Modules_Export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Modules/Export */ \"./src/Modules/Export/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"archive\", function() { return src_Modules_Export__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var src_Modules_Import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Modules/Import */ \"./src/Modules/Import/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return src_Modules_Import__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/Modules/index.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "lzma-native":
/*!******************************!*\
  !*** external "lzma-native" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lzma-native\");\n\n//# sourceURL=webpack:///external_%22lzma-native%22?");

/***/ }),

/***/ "rethinkdb-ts":
/*!*******************************!*\
  !*** external "rethinkdb-ts" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rethinkdb-ts\");\n\n//# sourceURL=webpack:///external_%22rethinkdb-ts%22?");

/***/ }),

/***/ "tar":
/*!**********************!*\
  !*** external "tar" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tar\");\n\n//# sourceURL=webpack:///external_%22tar%22?");

/***/ }),

/***/ "ulid":
/*!***********************!*\
  !*** external "ulid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ulid\");\n\n//# sourceURL=webpack:///external_%22ulid%22?");

/***/ })

/******/ });
});