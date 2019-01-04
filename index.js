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

/***/ "./node_modules/@bluecewe/rethink-utilities/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@bluecewe/rethink-utilities/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\r\n\tif(true)\r\n\t\tmodule.exports = factory();\r\n\telse { var i, a; }\r\n})(global, function() {\r\nreturn /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// define __esModule on exports\r\n/******/ \t__webpack_require__.r = function(exports) {\r\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n/******/ \t\t}\r\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\r\n/******/ \t};\r\n/******/\r\n/******/ \t// create a fake namespace object\r\n/******/ \t// mode & 1: value is a module id, require it\r\n/******/ \t// mode & 2: merge all properties of value into the ns\r\n/******/ \t// mode & 4: return value when already ns object\r\n/******/ \t// mode & 8|1: behave like require\r\n/******/ \t__webpack_require__.t = function(value, mode) {\r\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\r\n/******/ \t\tif(mode & 8) return value;\r\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\r\n/******/ \t\tvar ns = Object.create(null);\r\n/******/ \t\t__webpack_require__.r(ns);\r\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\r\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\r\n/******/ \t\treturn ns;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = \"\";\r\n/******/\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.ts\");\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ({\r\n\r\n/***/ \"./node_modules/@bluecewe/empty-promise/index.js\":\r\n/*!*******************************************************!*\\\r\n  !*** ./node_modules/@bluecewe/empty-promise/index.js ***!\r\n  \\*******************************************************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\neval(\"(function webpackUniversalModuleDefinition(root, factory) {\\r\\n\\tif(true)\\r\\n\\t\\tmodule.exports = factory();\\r\\n\\telse { var i, a; }\\r\\n})(global, function() {\\r\\nreturn /******/ (function(modules) { // webpackBootstrap\\r\\n/******/ \\t// The module cache\\r\\n/******/ \\tvar installedModules = {};\\r\\n/******/\\r\\n/******/ \\t// The require function\\r\\n/******/ \\tfunction __webpack_require__(moduleId) {\\r\\n/******/\\r\\n/******/ \\t\\t// Check if module is in cache\\r\\n/******/ \\t\\tif(installedModules[moduleId]) {\\r\\n/******/ \\t\\t\\treturn installedModules[moduleId].exports;\\r\\n/******/ \\t\\t}\\r\\n/******/ \\t\\t// Create a new module (and put it into the cache)\\r\\n/******/ \\t\\tvar module = installedModules[moduleId] = {\\r\\n/******/ \\t\\t\\ti: moduleId,\\r\\n/******/ \\t\\t\\tl: false,\\r\\n/******/ \\t\\t\\texports: {}\\r\\n/******/ \\t\\t};\\r\\n/******/\\r\\n/******/ \\t\\t// Execute the module function\\r\\n/******/ \\t\\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\\r\\n/******/\\r\\n/******/ \\t\\t// Flag the module as loaded\\r\\n/******/ \\t\\tmodule.l = true;\\r\\n/******/\\r\\n/******/ \\t\\t// Return the exports of the module\\r\\n/******/ \\t\\treturn module.exports;\\r\\n/******/ \\t}\\r\\n/******/\\r\\n/******/\\r\\n/******/ \\t// expose the modules object (__webpack_modules__)\\r\\n/******/ \\t__webpack_require__.m = modules;\\r\\n/******/\\r\\n/******/ \\t// expose the module cache\\r\\n/******/ \\t__webpack_require__.c = installedModules;\\r\\n/******/\\r\\n/******/ \\t// define getter function for harmony exports\\r\\n/******/ \\t__webpack_require__.d = function(exports, name, getter) {\\r\\n/******/ \\t\\tif(!__webpack_require__.o(exports, name)) {\\r\\n/******/ \\t\\t\\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\\r\\n/******/ \\t\\t}\\r\\n/******/ \\t};\\r\\n/******/\\r\\n/******/ \\t// define __esModule on exports\\r\\n/******/ \\t__webpack_require__.r = function(exports) {\\r\\n/******/ \\t\\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\\r\\n/******/ \\t\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\\r\\n/******/ \\t\\t}\\r\\n/******/ \\t\\tObject.defineProperty(exports, '__esModule', { value: true });\\r\\n/******/ \\t};\\r\\n/******/\\r\\n/******/ \\t// create a fake namespace object\\r\\n/******/ \\t// mode & 1: value is a module id, require it\\r\\n/******/ \\t// mode & 2: merge all properties of value into the ns\\r\\n/******/ \\t// mode & 4: return value when already ns object\\r\\n/******/ \\t// mode & 8|1: behave like require\\r\\n/******/ \\t__webpack_require__.t = function(value, mode) {\\r\\n/******/ \\t\\tif(mode & 1) value = __webpack_require__(value);\\r\\n/******/ \\t\\tif(mode & 8) return value;\\r\\n/******/ \\t\\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\\r\\n/******/ \\t\\tvar ns = Object.create(null);\\r\\n/******/ \\t\\t__webpack_require__.r(ns);\\r\\n/******/ \\t\\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\\r\\n/******/ \\t\\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\\r\\n/******/ \\t\\treturn ns;\\r\\n/******/ \\t};\\r\\n/******/\\r\\n/******/ \\t// getDefaultExport function for compatibility with non-harmony modules\\r\\n/******/ \\t__webpack_require__.n = function(module) {\\r\\n/******/ \\t\\tvar getter = module && module.__esModule ?\\r\\n/******/ \\t\\t\\tfunction getDefault() { return module['default']; } :\\r\\n/******/ \\t\\t\\tfunction getModuleExports() { return module; };\\r\\n/******/ \\t\\t__webpack_require__.d(getter, 'a', getter);\\r\\n/******/ \\t\\treturn getter;\\r\\n/******/ \\t};\\r\\n/******/\\r\\n/******/ \\t// Object.prototype.hasOwnProperty.call\\r\\n/******/ \\t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\\r\\n/******/\\r\\n/******/ \\t// __webpack_public_path__\\r\\n/******/ \\t__webpack_require__.p = \\\"\\\";\\r\\n/******/\\r\\n/******/\\r\\n/******/ \\t// Load entry module and return exports\\r\\n/******/ \\treturn __webpack_require__(__webpack_require__.s = \\\"./src/index.ts\\\");\\r\\n/******/ })\\r\\n/************************************************************************/\\r\\n/******/ ({\\r\\n\\r\\n/***/ \\\"./src/index.ts\\\":\\r\\n/*!**********************!*\\\\\\r\\n  !*** ./src/index.ts ***!\\r\\n  \\\\**********************/\\r\\n/*! exports provided: default */\\r\\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\\r\\n\\r\\n\\\"use strict\\\";\\r\\neval(\\\"__webpack_require__.r(__webpack_exports__);\\\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\\\\\"default\\\\\\\", function() { return EmptyPromise; });\\\\n\\\\r\\\\n;\\\\r\\\\nclass EmptyPromise extends Promise {\\\\r\\\\n    constructor(executor) {\\\\r\\\\n        super(executor);\\\\r\\\\n    }\\\\r\\\\n    ;\\\\r\\\\n    static generate() {\\\\r\\\\n        let settlers = {};\\\\r\\\\n        const promise = new this(function (resolve, reject) {\\\\r\\\\n            settlers =\\\\r\\\\n                {\\\\r\\\\n                    resolve,\\\\r\\\\n                    reject\\\\r\\\\n                };\\\\r\\\\n        });\\\\r\\\\n        promise.resolve = settlers.resolve;\\\\r\\\\n        promise.reject = settlers.reject;\\\\r\\\\n        return promise;\\\\r\\\\n    }\\\\r\\\\n    ;\\\\r\\\\n}\\\\r\\\\n;\\\\r\\\\n\\\\n\\\\n//# sourceURL=webpack:///./src/index.ts?\\\");\\r\\n\\r\\n/***/ })\\r\\n\\r\\n/******/ });\\r\\n});\\n\\n//# sourceURL=webpack:///./node_modules/@bluecewe/empty-promise/index.js?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/EmptyDictionaryFromArray.ts\":\r\n/*!*****************************************!*\\\r\n  !*** ./src/EmptyDictionaryFromArray.ts ***!\r\n  \\*****************************************/\r\n/*! exports provided: default */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var src_Utilities_GetInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Utilities/GetInstance */ \\\"./src/Utilities/GetInstance.ts\\\");\\n\\r\\n\\r\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (function (array, id) {\\r\\n    const instance = Object(src_Utilities_GetInstance__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(this);\\r\\n    const query = instance.RethinkDB\\r\\n        .expr(array.map(item => item[id]))\\r\\n        .map(id => [id, true])\\r\\n        .coerceTo('object');\\r\\n    return query;\\r\\n});\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/EmptyDictionaryFromArray.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/ExtendInsertOptions.ts\":\r\n/*!************************************!*\\\r\n  !*** ./src/ExtendInsertOptions.ts ***!\r\n  \\************************************/\r\n/*! exports provided: default, RethinkExtendInsertOptionsError */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return parse; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"RethinkExtendInsertOptionsError\\\", function() { return RethinkExtendInsertOptionsError; });\\n\\r\\n;\\r\\n;\\r\\n;\\r\\nfunction parse(options) {\\r\\n    if ('conflict' in options && typeof options.conflict === 'object' && options.conflict !== null && 'withoutOld' in options.conflict) {\\r\\n        const helper = options.conflict;\\r\\n        options.conflict = (id, oldDocument, newDocument) => oldDocument.without(...helper.withoutOld).merge(newDocument);\\r\\n        return options;\\r\\n    }\\r\\n    else {\\r\\n        return options;\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\nclass RethinkExtendInsertOptionsError extends Error {\\r\\n}\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/ExtendInsertOptions.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/Instance.ts\":\r\n/*!*************************!*\\\r\n  !*** ./src/Instance.ts ***!\r\n  \\*************************/\r\n/*! exports provided: default */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return Instance; });\\n/* harmony import */ var _Run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Run */ \\\"./src/Run.ts\\\");\\n/* harmony import */ var _ExtendInsertOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtendInsertOptions */ \\\"./src/ExtendInsertOptions.ts\\\");\\n/* harmony import */ var _EmptyDictionaryFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyDictionaryFromArray */ \\\"./src/EmptyDictionaryFromArray.ts\\\");\\n\\r\\n\\r\\n\\r\\n\\r\\nclass Instance {\\r\\n    constructor({ RethinkDB }) {\\r\\n        this.run = _Run__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"];\\r\\n        this.parseExtendedInsertOptions = _ExtendInsertOptions__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"];\\r\\n        this.emptyDictionaryFromArray = _EmptyDictionaryFromArray__WEBPACK_IMPORTED_MODULE_2__[\\\"default\\\"];\\r\\n        this.RethinkDB = RethinkDB;\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/Instance.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/Pluck.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/Pluck.ts ***!\r\n  \\**********************/\r\n/*! exports provided: Pluck, default */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Pluck\\\", function() { return Pluck; });\\n\\r\\n;\\r\\nvar Pluck;\\r\\n(function (Pluck) {\\r\\n    ;\\r\\n    ;\\r\\n})(Pluck || (Pluck = {}));\\r\\n;\\r\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (function ({ rows, pluck }) {\\r\\n    const rowsList = Array.isArray(rows) ? rows : [rows];\\r\\n    const pluckedRows = [];\\r\\n    for (let row of rowsList) {\\r\\n        const pluckedRow = {};\\r\\n        pluckFields(pluck, row, pluckedRow);\\r\\n        pluckedRows.push(pluckedRow);\\r\\n    }\\r\\n    ;\\r\\n    const output = Array.isArray(rows) ? pluckedRows : pluckedRows[0];\\r\\n    return output;\\r\\n});\\r\\n;\\r\\nfunction pluckFields(pluck, document, pluckedDocument) {\\r\\n    const pluckList = Array.isArray(pluck) ? pluck : Object.keys(pluck).map(key => ({ [key]: pluck[key] }));\\r\\n    for (let field of pluckList) {\\r\\n        if (typeof field === 'string' && document.hasOwnProperty(field)) {\\r\\n            pluckedDocument[field] = document[field];\\r\\n        }\\r\\n        else if (typeof field === 'object') {\\r\\n            const subFieldKeys = Object.keys(field);\\r\\n            for (let subFieldKey of subFieldKeys) {\\r\\n                if (!document.hasOwnProperty(subFieldKey)) {\\r\\n                    continue;\\r\\n                }\\r\\n                ;\\r\\n                const subDocument = document[subFieldKey];\\r\\n                const pluckedSubdocument = {};\\r\\n                const subField = field[subFieldKey];\\r\\n                if (typeof subField === 'boolean') {\\r\\n                    pluckedSubdocument[subFieldKey] = document[subFieldKey];\\r\\n                }\\r\\n                else {\\r\\n                    pluckFields(subField, subDocument, pluckedSubdocument);\\r\\n                }\\r\\n                ;\\r\\n                const somePlucked = Object.keys(pluckedSubdocument).length > 0;\\r\\n                if (somePlucked) {\\r\\n                    pluckedDocument[subFieldKey] = pluckedSubdocument;\\r\\n                }\\r\\n                ;\\r\\n            }\\r\\n            ;\\r\\n        }\\r\\n        ;\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/Pluck.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/Run.ts\":\r\n/*!********************!*\\\r\n  !*** ./src/Run.ts ***!\r\n  \\********************/\r\n/*! exports provided: default, RethinkRunError */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"RethinkRunError\\\", function() { return RethinkRunError; });\\n/* harmony import */ var _bluecewe_empty_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluecewe/empty-promise */ \\\"./node_modules/@bluecewe/empty-promise/index.js\\\");\\n/* harmony import */ var _bluecewe_empty_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bluecewe_empty_promise__WEBPACK_IMPORTED_MODULE_0__);\\n/* harmony import */ var _ThrowResultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThrowResultError */ \\\"./src/ThrowResultError.ts\\\");\\n/* harmony import */ var src_Utilities_GetInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Utilities/GetInstance */ \\\"./src/Utilities/GetInstance.ts\\\");\\n\\r\\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\\r\\n    return new (P || (P = Promise))(function (resolve, reject) {\\r\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\r\\n        function rejected(value) { try { step(generator[\\\"throw\\\"](value)); } catch (e) { reject(e); } }\\r\\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\\r\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\r\\n    });\\r\\n};\\r\\n\\r\\n\\r\\n\\r\\n;\\r\\nconst MAX_ATTEMPTS = 3;\\r\\nconst DELAY_MILLISECONDS = 200;\\r\\nconst WRITE_COMMANDS = [\\r\\n    'insert',\\r\\n    'update',\\r\\n    'replace',\\r\\n    'delete'\\r\\n];\\r\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (function ({ query, options }) {\\r\\n    return __awaiter(this, void 0, void 0, function* () {\\r\\n        if (typeof query !== 'function') {\\r\\n            throw new RethinkRunError('\\\\'query\\\\' parameter must be function.');\\r\\n        }\\r\\n        ;\\r\\n        const instance = Object(src_Utilities_GetInstance__WEBPACK_IMPORTED_MODULE_2__[\\\"default\\\"])(this);\\r\\n        options = parseOptions(options);\\r\\n        validateQuery({ query, instance });\\r\\n        for (let attemptNumber = 0; attemptNumber < (MAX_ATTEMPTS + 1); attemptNumber++) {\\r\\n            let output;\\r\\n            try {\\r\\n                output = yield attempt({ query, options });\\r\\n            }\\r\\n            catch (error) {\\r\\n                const moreAttempts = attemptNumber < MAX_ATTEMPTS;\\r\\n                if (moreAttempts) {\\r\\n                    yield delay(attemptNumber);\\r\\n                    continue;\\r\\n                }\\r\\n                else {\\r\\n                    throw error;\\r\\n                }\\r\\n                ;\\r\\n            }\\r\\n            ;\\r\\n            handleResultError(output, options, query);\\r\\n            return output;\\r\\n        }\\r\\n        ;\\r\\n    });\\r\\n});\\r\\n;\\r\\nfunction attempt({ query, options }) {\\r\\n    return __awaiter(this, void 0, void 0, function* () {\\r\\n        const output = yield query.run(options.rethink);\\r\\n        return output;\\r\\n    });\\r\\n}\\r\\n;\\r\\nfunction delay(attemptNumber) {\\r\\n    const promise = _bluecewe_empty_promise__WEBPACK_IMPORTED_MODULE_0___default.a.generate();\\r\\n    const delay = DELAY_MILLISECONDS + ((DELAY_MILLISECONDS * 2) * attemptNumber);\\r\\n    setTimeout(promise.resolve, delay);\\r\\n    return promise;\\r\\n}\\r\\n;\\r\\nfunction validateQuery({ query, instance }) {\\r\\n    return;\\r\\n    const RethinkDbTerm = Object.getPrototypeOf(instance.RethinkDB.table('none')).constructor;\\r\\n    if (typeof query === 'function') {\\r\\n        console.log('Constant:', RethinkDbTerm);\\r\\n        console.log('Type:', Object.getPrototypeOf(query).constructor);\\r\\n        const isTerm = Object.getPrototypeOf(query).constructor === RethinkDbTerm;\\r\\n        if (isTerm) {\\r\\n            throw new RethinkRunError('Query not of RethinkDB Term type.');\\r\\n        }\\r\\n        ;\\r\\n    }\\r\\n    else if (typeof query === 'object' && query !== null && !(query instanceof Promise)) {\\r\\n        console.log('Constructor:', query.constructor);\\r\\n        console.log('Prototype:', Object.getPrototypeOf(query));\\r\\n    }\\r\\n    else {\\r\\n        throw new RethinkRunError('Query must be function or response object.');\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\nfunction parseOptions(options = {}) {\\r\\n    if (!options.hasOwnProperty('throwResultError')) {\\r\\n        options.throwResultError = true;\\r\\n    }\\r\\n    ;\\r\\n    return options;\\r\\n}\\r\\n;\\r\\nfunction handleResultError(output, options, query) {\\r\\n    const isWriteQuery = WRITE_COMMANDS.includes(Object.getPrototypeOf(query).mt);\\r\\n    if (!options.throwResultError || !isWriteQuery) {\\r\\n        return;\\r\\n    }\\r\\n    ;\\r\\n    Object(_ThrowResultError__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"])(output);\\r\\n}\\r\\n;\\r\\nclass RethinkRunError extends Error {\\r\\n    constructor(message) {\\r\\n        super(message);\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/Run.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/ThrowResultError.ts\":\r\n/*!*********************************!*\\\r\n  !*** ./src/ThrowResultError.ts ***!\r\n  \\*********************************/\r\n/*! exports provided: default */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return throwResultError; });\\n\\r\\nfunction throwResultError(result) {\\r\\n    if (result.errors > 0) {\\r\\n        throw new Error(result.first_error);\\r\\n    }\\r\\n    ;\\r\\n}\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/ThrowResultError.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/Utilities/GetInstance.ts\":\r\n/*!**************************************!*\\\r\n  !*** ./src/Utilities/GetInstance.ts ***!\r\n  \\**************************************/\r\n/*! exports provided: default */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var src_Instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Instance */ \\\"./src/Instance.ts\\\");\\n\\r\\n\\r\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (function (value) {\\r\\n    const instance = value;\\r\\n    if (!(instance instanceof src_Instance__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])) {\\r\\n        throw new Error('Method can only be called on instances of the Instance class.');\\r\\n    }\\r\\n    ;\\r\\n    return instance;\\r\\n});\\r\\n;\\r\\n\\n\\n//# sourceURL=webpack:///./src/Utilities/GetInstance.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/index.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/index.ts ***!\r\n  \\**********************/\r\n/*! exports provided: default, throwResultError, pluck */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _Instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Instance */ \\\"./src/Instance.ts\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return _Instance__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; });\\n\\n/* harmony import */ var _ThrowResultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThrowResultError */ \\\"./src/ThrowResultError.ts\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"throwResultError\\\", function() { return _ThrowResultError__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"]; });\\n\\n/* harmony import */ var _Pluck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pluck */ \\\"./src/Pluck.ts\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"pluck\\\", function() { return _Pluck__WEBPACK_IMPORTED_MODULE_2__[\\\"default\\\"]; });\\n\\n\\r\\n\\r\\n\\r\\n\\r\\n\\n\\n//# sourceURL=webpack:///./src/index.ts?\");\r\n\r\n/***/ })\r\n\r\n/******/ });\r\n});\n\n//# sourceURL=webpack:///./node_modules/@bluecewe/rethink-utilities/index.js?");

/***/ }),

/***/ "./src/Modules/Export/Documents.ts":
/*!*****************************************!*\
  !*** ./src/Modules/Export/Documents.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Modules/Utilities/RethinkDB */ \"./src/Modules/Utilities/RethinkDB.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ \"./src/Modules/Export/index.ts\");\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, table, directoryPath }) {\r\n    const documents = await getIndexes({ database, table });\r\n    const fileContents = JSON.stringify(documents);\r\n    const filePath = Object(___WEBPACK_IMPORTED_MODULE_3__[\"generateFilePath\"])({ database, table, directoryPath, fileName: 'documents' });\r\n    await writeFile(filePath, fileContents);\r\n});\r\n;\r\nasync function getIndexes({ database, table }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name);\r\n    const documents = await src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run({ query });\r\n    return documents;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Documents.ts?");

/***/ }),

/***/ "./src/Modules/Export/Indexes.ts":
/*!***************************************!*\
  !*** ./src/Modules/Export/Indexes.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Modules/Utilities/RethinkDB */ \"./src/Modules/Utilities/RethinkDB.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ \"./src/Modules/Export/index.ts\");\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function ({ database, table, directoryPath }) {\r\n    const indexes = await getIndexes({ database, table });\r\n    const exported = indexes.map(index => ({\r\n        index: index.index,\r\n        function: index.function.toJSON().data,\r\n        multi: index.multi,\r\n        geo: index.geo\r\n    }));\r\n    const fileContents = JSON.stringify(exported);\r\n    const filePath = Object(___WEBPACK_IMPORTED_MODULE_3__[\"generateFilePath\"])({ database, table, directoryPath, fileName: 'indexes' });\r\n    await writeFile(filePath, fileContents);\r\n});\r\n;\r\nasync function getIndexes({ database, table }) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db(database.name)\r\n        .table(table.name)\r\n        .indexStatus();\r\n    const indexes = await src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run({ query });\r\n    return indexes;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Indexes.ts?");

/***/ }),

/***/ "./src/Modules/Export/Manifest.ts":
/*!****************************************!*\
  !*** ./src/Modules/Export/Manifest.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generate; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Modules/Utilities/RethinkDB */ \"./src/Modules/Utilities/RethinkDB.ts\");\n\r\n\r\nconst { writeFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n;\r\nasync function generate({ directoryPath, options }) {\r\n    const databases = await getDatabases(options);\r\n    const manifest = {\r\n        moduleVersion: \"1.0.0\",\r\n        databases\r\n    };\r\n    const json = JSON.stringify(manifest);\r\n    const fileName = 'manifest.json';\r\n    const filePath = directoryPath + '/' + fileName;\r\n    await writeFile(filePath, json);\r\n    return manifest;\r\n}\r\n;\r\nasync function getDatabases(options) {\r\n    const databaseFilters = getFilters(options);\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .db('rethinkdb')\r\n        .table('db_config')\r\n        .filter(database => filterDatabase(database, databaseFilters, options))\r\n        .merge((database) => ({\r\n        tables: rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n            .db('rethinkdb')\r\n            .table('table_config')\r\n            .filter({ db: database('name') })\r\n            .pluck('id', 'name')\r\n            .coerceTo('array')\r\n    }));\r\n    const tables = await src_Modules_Utilities_RethinkDB__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run({ query });\r\n    return tables;\r\n}\r\n;\r\nfunction filterDatabase(database, filters, options) {\r\n    const query = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"]\r\n        .or(filters.typeOf().eq('NULL'), filters.contains(database('name')).eq('pluck' in options));\r\n    return query;\r\n}\r\n;\r\nfunction getFilters(options) {\r\n    if (!('pluck' in options) && !('without' in options))\r\n        return null;\r\n    const filters = ('pluck' in options && options.pluck) || ('without' in options && options.without);\r\n    const flattened = filters.reduce((names, databaseVariant) => {\r\n        if (typeof databaseVariant === 'string')\r\n            names.push(databaseVariant);\r\n        else\r\n            names.push(...Object.keys(databaseVariant));\r\n        return names;\r\n    }, []);\r\n    const expression = rethinkdb_ts__WEBPACK_IMPORTED_MODULE_1__[\"r\"].expr(flattened);\r\n    return expression;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/Manifest.ts?");

/***/ }),

/***/ "./src/Modules/Export/index.ts":
/*!*************************************!*\
  !*** ./src/Modules/Export/index.ts ***!
  \*************************************/
/*! exports provided: default, generateFilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateFilePath\", function() { return generateFilePath; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tar */ \"tar\");\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lzma-native */ \"lzma-native\");\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lzma_native__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ulid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ulid */ \"ulid\");\n/* harmony import */ var ulid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ulid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Manifest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Manifest */ \"./src/Modules/Export/Manifest.ts\");\n/* harmony import */ var _Indexes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Indexes */ \"./src/Modules/Export/Indexes.ts\");\n/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Documents */ \"./src/Modules/Export/Documents.ts\");\n/* harmony import */ var src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Modules/Utilities/GenerateWriteStreamPromise */ \"./src/Modules/Utilities/GenerateWriteStreamPromise.ts\");\n\r\n\r\nconst { mkdir: makeDirectory, rmdir: deleteDirectory, readdir: getDirectoryFileNames, unlink: deleteFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n;\r\n;\r\n;\r\n;\r\n;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (options = {}) {\r\n    const pool = await rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__[\"r\"].connectPool();\r\n    await exportDatabases(options);\r\n    await pool.drain();\r\n});\r\n;\r\nasync function exportDatabases(options) {\r\n    const exportId = Object(ulid__WEBPACK_IMPORTED_MODULE_3__[\"ulid\"])();\r\n    const exportName = 'rethinkdb_export_' + exportId;\r\n    const directoryPath = await createDirectory({ name: exportName });\r\n    const manifest = await Object(_Manifest__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ directoryPath, options });\r\n    for (let database of manifest.databases) {\r\n        for (let table of database.tables) {\r\n            await exportTable({ database, table, directoryPath });\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    await compressDirectory({ directoryPath, name: exportName });\r\n}\r\n;\r\nasync function exportTable({ database, table, directoryPath }) {\r\n    await Object(_Indexes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ database, table, directoryPath });\r\n    await Object(_Documents__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ database, table, directoryPath });\r\n}\r\n;\r\nasync function createDirectory({ name }) {\r\n    const path = './' + name;\r\n    await makeDirectory(path);\r\n    return path;\r\n}\r\n;\r\nasync function compressDirectory({ directoryPath, name }) {\r\n    const tarFileName = name + '.tar';\r\n    await Object(tar__WEBPACK_IMPORTED_MODULE_1__[\"create\"])({ file: tarFileName, cwd: directoryPath }, ['./']);\r\n    const xzFileName = tarFileName + '.xz';\r\n    const compressor = Object(lzma_native__WEBPACK_IMPORTED_MODULE_2__[\"createCompressor\"])();\r\n    const readStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createReadStream\"])(tarFileName);\r\n    const writeStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createWriteStream\"])(xzFileName);\r\n    const writePromise = Object(src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(writeStream);\r\n    readStream.pipe(compressor).pipe(writeStream);\r\n    await writePromise;\r\n    await Promise.all([\r\n        deleteFile(tarFileName),\r\n        deleteDirectoryWithContents(directoryPath)\r\n    ]);\r\n}\r\n;\r\nasync function deleteDirectoryWithContents(directoryPath) {\r\n    const directoryFileNames = await getDirectoryFileNames(directoryPath);\r\n    await Promise.all(directoryFileNames.map(fileName => deleteFile(directoryPath + '/' + fileName)));\r\n    await deleteDirectory(directoryPath);\r\n}\r\n;\r\nfunction generateFilePath({ database, table, directoryPath, fileName }) {\r\n    const filePath = directoryPath + '/' + database.name + '_' + table.name + '_' + table.id + '_' + fileName + '.json';\r\n    return filePath;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Export/index.ts?");

/***/ }),

/***/ "./src/Modules/Import/index.ts":
/*!*************************************!*\
  !*** ./src/Modules/Import/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tar */ \"tar\");\n/* harmony import */ var tar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lzma-native */ \"lzma-native\");\n/* harmony import */ var lzma_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lzma_native__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Modules/Utilities/GenerateWriteStreamPromise */ \"./src/Modules/Utilities/GenerateWriteStreamPromise.ts\");\n\r\n\r\nconst { mkdir: makeDirectory, unlink: deleteFile, readFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n\r\n\r\n;\r\nconst OPTIONS_DEFAULT = {\r\n    clear: false\r\n};\r\nconst OPTIONS_SCHEMA = joi__WEBPACK_IMPORTED_MODULE_3__[\"object\"]({\r\n    file: joi__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().required(),\r\n    clear: joi__WEBPACK_IMPORTED_MODULE_3__[\"boolean\"]().default(OPTIONS_DEFAULT.clear)\r\n})\r\n    .default(OPTIONS_DEFAULT);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (options = {}) {\r\n    options = validateOptions(options);\r\n    const pool = await rethinkdb_ts__WEBPACK_IMPORTED_MODULE_4__[\"r\"].connectPool();\r\n    await importDatabases(options);\r\n    await pool.drain();\r\n});\r\n;\r\nasync function importDatabases(options) {\r\n    const manifest = await decompress(options);\r\n}\r\n;\r\nasync function decompress(options) {\r\n    const compressor = Object(lzma_native__WEBPACK_IMPORTED_MODULE_2__[\"createDecompressor\"])();\r\n    const readStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createReadStream\"])(options.file);\r\n    const tarFileName = options.file.replace(/\\.xz$/, '');\r\n    const writeStream = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"createWriteStream\"])(tarFileName);\r\n    const writePromise = Object(src_Modules_Utilities_GenerateWriteStreamPromise__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(writeStream);\r\n    readStream.pipe(compressor).pipe(writeStream);\r\n    await writePromise;\r\n    const exportDirectory = './' + options.file.replace(/\\.tar\\.xz$/, '');\r\n    try {\r\n        await makeDirectory(exportDirectory);\r\n    }\r\n    catch (error) {\r\n        const nodeError = error;\r\n        if (nodeError.code !== 'EEXIST')\r\n            throw error;\r\n    }\r\n    ;\r\n    await Object(tar__WEBPACK_IMPORTED_MODULE_1__[\"extract\"])({ file: tarFileName, cwd: exportDirectory });\r\n    await deleteFile(tarFileName);\r\n    const manifestFileName = exportDirectory + '/manifest.json';\r\n    const manifestSource = await readFile(manifestFileName, 'utf8');\r\n    const manifest = JSON.parse(manifestSource);\r\n    return manifest;\r\n}\r\n;\r\nfunction validateOptions(options) {\r\n    const validated = joi__WEBPACK_IMPORTED_MODULE_3__[\"validate\"](options, OPTIONS_SCHEMA, { allowUnknown: false });\r\n    if (validated.error)\r\n        throw new Error(validated.error.message);\r\n    options = validated.value;\r\n    return options;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Modules/Import/index.ts?");

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

/***/ "./src/Modules/Utilities/RethinkDB.ts":
/*!********************************************!*\
  !*** ./src/Modules/Utilities/RethinkDB.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb-ts */ \"rethinkdb-ts\");\n/* harmony import */ var rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bluecewe_rethink_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluecewe/rethink-utilities */ \"./node_modules/@bluecewe/rethink-utilities/index.js\");\n/* harmony import */ var _bluecewe_rethink_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bluecewe_rethink_utilities__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst instance = new _bluecewe_rethink_utilities__WEBPACK_IMPORTED_MODULE_1___default.a({ RethinkDB: rethinkdb_ts__WEBPACK_IMPORTED_MODULE_0__[\"r\"] });\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\r\n\n\n//# sourceURL=webpack:///./src/Modules/Utilities/RethinkDB.ts?");

/***/ }),

/***/ "./src/Modules/index.ts":
/*!******************************!*\
  !*** ./src/Modules/index.ts ***!
  \******************************/
/*! exports provided: export, import */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_Modules_Export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Modules/Export */ \"./src/Modules/Export/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"export\", function() { return src_Modules_Export__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var src_Modules_Import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Modules/Import */ \"./src/Modules/Import/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"import\", function() { return src_Modules_Import__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/Modules/index.ts?");

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