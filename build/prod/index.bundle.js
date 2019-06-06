/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports, __webpack_require__) {

"use strict";


/**
 * For type-checking Javascript values.
 * @module typical
 * @typicalname t
 * @example
 * const t = require('typical')
 */
exports.isNumber = isNumber
exports.isString = isString
exports.isBoolean = isBoolean
exports.isPlainObject = isPlainObject
exports.isArrayLike = isArrayLike
exports.isObject = isObject
exports.isDefined = isDefined
exports.isFunction = isFunction
exports.isClass = isClass
exports.isPrimitive = isPrimitive
exports.isPromise = isPromise
exports.isIterable = isIterable

/**
 * Returns true if input is a number
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * > t.isNumber(0)
 * true
 * > t.isNumber(1)
 * true
 * > t.isNumber(1.1)
 * true
 * > t.isNumber(0xff)
 * true
 * > t.isNumber(0644)
 * true
 * > t.isNumber(6.2e5)
 * true
 * > t.isNumber(NaN)
 * false
 * > t.isNumber(Infinity)
 * false
 */
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

/**
 * A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.
 *
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * > t.isPlainObject({ clive: 'hater' })
 * true
 * > t.isPlainObject(new Date())
 * false
 * > t.isPlainObject([ 0, 1 ])
 * false
 * > t.isPlainObject(1)
 * false
 * > t.isPlainObject(/test/)
 * false
 */
function isPlainObject (input) {
  return input !== null && typeof input === 'object' && input.constructor === Object
}

/**
 * An array-like value has all the properties of an array, but is not an array instance. Examples in the `arguments` object. Returns true if the input value is an object, not null and has a `length` property with a numeric value.
 *
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * function sum(x, y){
 *     console.log(t.isArrayLike(arguments))
 *     // prints `true`
 * }
 */
function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number'
}

/**
 * returns true if the typeof input is `'object'`, but not null!
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isObject (input) {
  return typeof input === 'object' && input !== null
}

/**
 * Returns true if the input value is defined
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isDefined (input) {
  return typeof input !== 'undefined'
}

/**
 * Returns true if the input value is a string
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isString (input) {
  return typeof input === 'string'
}

/**
 * Returns true if the input value is a boolean
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isBoolean (input) {
  return typeof input === 'boolean'
}

/**
 * Returns true if the input value is a function
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isFunction (input) {
  return typeof input === 'function'
}

/**
 * Returns true if the input value is an es2015 `class`.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isClass (input) {
  if (isFunction(input)) {
    return /^class /.test(Function.prototype.toString.call(input))
  } else {
    return false
  }
}

/**
 * Returns true if the input is a string, number, symbol, boolean, null or undefined value.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isPrimitive (input) {
  if (input === null) return true
  switch (typeof input) {
    case "string":
    case "number":
    case "symbol":
    case "undefined":
    case "boolean":
      return true
    default:
      return false
  }
}

/**
 * Returns true if the input is a Promise.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isPromise (input) {
  if (input) {
    var isPromise = isDefined(Promise) && input instanceof Promise
    var isThenable = input.then && typeof input.then === 'function'
    return isPromise || isThenable ? true : false
  } else {
    return false
  }
}

/**
 * Returns true if the input is an iterable (`Map`, `Set`, `Array` etc.).
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isIterable (input) {
  if (input === null || !isDefined(input)) {
    return false
  } else {
    return typeof input[Symbol.iterator] === 'function'
  }
}


/***/ })),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module array-back
 * @example
 * const arrayify = require('array-back')
 */
module.exports = arrayify

/**
 * Takes any input and guarantees an array back.
 *
 * - converts array-like objects (e.g. `arguments`) to a real array
 * - converts `undefined` to an empty array
 * - converts any another other, singular value (including `null`) into an array containing that value
 * - ignores input which is already an array
 *
 * @param {*} - the input value to convert to an array
 * @returns {Array}
 * @alias module:array-back
 * @example
 * > a.arrayify(undefined)
 * []
 *
 * > a.arrayify(null)
 * [ null ]
 *
 * > a.arrayify(0)
 * [ 0 ]
 *
 * > a.arrayify([ 1, 2 ])
 * [ 1, 2 ]
 *
 * > function f(){ return a.arrayify(arguments); }
 * > f(1,2,3)
 * [ 1, 2, 3 ]
 */
function arrayify (input) {
  const t = __webpack_require__(0)
  if (Array.isArray(input)) {
    return input
  } else {
    if (input === undefined) {
      return []
    } else if (t.isArrayLike(input)) {
      return Array.prototype.slice.call(input)
    } else {
      return [ input ]
    }
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class ArgRegExp extends RegExp {
  name (arg) {
    return arg.match(this)[1]
  }
}

exports.short = new ArgRegExp('^-([^\\d-])$')
exports.long = new ArgRegExp('^--(\\S+)')
exports.combined = new ArgRegExp('^-([^\\d-]{2,})$')
exports.isOption = arg => exports.short.test(arg) || exports.long.test(arg)
exports.optEquals = new ArgRegExp('^(--\\S+?)=(.*)')
exports.VALUE_MARKER = '552f3a31-14cd-4ced-bd67-656a659e9efb' // must be unique


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ansi = factory());
}(this, (function () { 'use strict';

  /**
   * Takes any input and guarantees an array back.
   *
   * - converts array-like objects (e.g. `arguments`) to a real array
   * - converts `undefined` to an empty array
   * - converts any another other, singular value (including `null`) into an array containing that value
   * - ignores input which is already an array
   *
   * @module array-back
   * @example
   * > const arrayify = require('array-back')
   *
   * > arrayify(undefined)
   * []
   *
   * > arrayify(null)
   * [ null ]
   *
   * > arrayify(0)
   * [ 0 ]
   *
   * > arrayify([ 1, 2 ])
   * [ 1, 2 ]
   *
   * > function f(){ return arrayify(arguments); }
   * > f(1,2,3)
   * [ 1, 2, 3 ]
   */

  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * @param {*} - the input value to convert to an array
   * @returns {Array}
   * @alias module:array-back
   */
  function arrayify (input) {
    if (Array.isArray(input)) {
      return input
    } else {
      if (input === undefined) {
        return []
      } else if (isArrayLike(input)) {
        return Array.prototype.slice.call(input)
      } else {
        return [ input ]
      }
    }
  }

  /* Control Sequence Initiator */
  const csi = '\x1b[';

  /**
   * @exports ansi-escape-sequences
   * @typicalname ansi
   * @example
   * const ansi = require('ansi-escape-sequences')
   */
  const ansi = {};

  /**
   * Various formatting styles (aka Select Graphic Rendition codes).
   * @enum {string}
   * @example
   * console.log(ansi.style.red + 'this is red' + ansi.style.reset)
   */
  ansi.style = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    fontDefault: '\x1b[10m',
    font2: '\x1b[11m',
    font3: '\x1b[12m',
    font4: '\x1b[13m',
    font5: '\x1b[14m',
    font6: '\x1b[15m',
    imageNegative: '\x1b[7m',
    imagePositive: '\x1b[27m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    grey: '\x1b[90m',
    gray: '\x1b[90m',
    'bg-black': '\x1b[40m',
    'bg-red': '\x1b[41m',
    'bg-green': '\x1b[42m',
    'bg-yellow': '\x1b[43m',
    'bg-blue': '\x1b[44m',
    'bg-magenta': '\x1b[45m',
    'bg-cyan': '\x1b[46m',
    'bg-white': '\x1b[47m',
    'bg-grey': '\x1b[100m',
    'bg-gray': '\x1b[100m'
  };

  /**
   * style enum - used by `ansi.styles()`.
   * @enum {number}
   * @private
   */
  const eStyles = {
    reset: 0,
    bold: 1,
    italic: 3,
    underline: 4,
    imageNegative: 7,
    fontDefault: 10,
    font2: 11,
    font3: 12,
    font4: 13,
    font5: 14,
    font6: 15,
    imagePositive: 27,
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    grey: 90,
    gray: 90,
    'bg-black': 40,
    'bg-red': 41,
    'bg-green': 42,
    'bg-yellow': 43,
    'bg-blue': 44,
    'bg-magenta': 45,
    'bg-cyan': 46,
    'bg-white': 47,
    'bg-grey': 100,
    'bg-gray': 100
  };

  /**
   * Returns an ansi sequence setting one or more effects
   * @param {string | string[]} - a style, or list or styles
   * @returns {string}
   * @example
   * > ansi.styles('green')
   * '\u001b[32m'
   *
   * > ansi.styles([ 'green', 'underline' ])
   * '\u001b[32;4m'
   */
  ansi.styles = function (effectArray) {
    effectArray = arrayify(effectArray);
    return csi + effectArray.map((function (effect) { return eStyles[effect] })).join(';') + 'm'
  };

  /**
   * A convenience function, applying the provided styles to the input string and then resetting.
   *
   * Inline styling can be applied using the syntax `[style-list]{text to format}`, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.
   *
   * @param {string} - the string to format
   * @param [styleArray] {string[]} - a list of styles to add to the input string
   * @returns {string}
   * @example
   * > ansi.format('what?', 'green')
   * '\u001b[32mwhat?\u001b[0m'
   *
   * > ansi.format('what?', ['green', 'bold'])
   * '\u001b[32;1mwhat?\u001b[0m'
   *
   * > ansi.format('[green bold]{what?}')
   * '\u001b[32;1mwhat?\u001b[0m'
   */
  ansi.format = function (str, styleArray) {
    const re = /\[([\w\s-]+)\]{([^]*?)}/;
    let matches;
    if (!str) return ''

    while (matches = str.match(re)) {
      const inlineStyles = matches[1].split(/\s+/);
      const inlineString = matches[2];
      str = str.replace(matches[0], ansi.format(inlineString, inlineStyles));
    }

    return (styleArray && styleArray.length)
      ? ansi.styles(styleArray) + str + ansi.style.reset
      : str
  };

  /**
   * cursor-related sequences
   */
  ansi.cursor = {
    /**
     * Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect
     * @param [lines=1] {number}
     * @return {string}
     */
    up: function (lines) { return csi + (lines || 1) + 'A' },

    /**
     * Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect
     * @param [lines=1] {number}
     * @return {string}
     */
    down: function (lines) { return csi + (lines || 1) + 'B' },

    /**
     * Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect
     * @param [lines=1] {number}
     * @return {string}
     */
    forward: function (lines) { return csi + (lines || 1) + 'C' },

    /**
     * Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect
     * @param [lines=1] {number}
     * @return {string}
     */
    back: function (lines) { return csi + (lines || 1) + 'D' },

    /**
     * Moves cursor to beginning of the line n lines down.
     * @param [lines=1] {number}
     * @return {string}
     */
    nextLine: function (lines) { return csi + (lines || 1) + 'E' },

    /**
     * Moves cursor to beginning of the line n lines up.
     * @param [lines=1] {number}
     * @return {string}
     */
    previousLine: function (lines) { return csi + (lines || 1) + 'F' },

    /**
     * Moves the cursor to column n.
     * @param n {number} - column number
     * @return {string}
     */
    horizontalAbsolute: function (n) { return csi + n + 'G' },

    /**
     * Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.
     * @param n {number} - row number
     * @param m {number} - column number
     * @return {string}
     */
    position: function (n, m) { return csi + (n || 1) + ';' + (m || 1) + 'H' },

    /**
     * Hides the cursor
     */
    hide: csi + '?25l',

    /**
     * Shows the cursor
     */
    show: csi + '?25h'
  };

  /**
   * erase sequences
   */
  ansi.erase = {
    /**
     * Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.
     * @param n {number}
     * @return {string}
     */
    display: function (n) { return csi + (n || 0) + 'J' },

    /**
     * Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.
     * @param n {number}
     * @return {string}
     */
    inLine: function (n) { return csi + (n || 0) + 'K' }
  };

  return ansi;

})));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)
const arrayify = __webpack_require__(1)

class OutputValue {
  constructor (value) {
    this.value = value
    this.hasDefaultArrayValue = false
    this.valueSource = 'unknown'
  }

  isDefined () {
    return t.isDefined(this.value)
  }
}

class Output {
  constructor (definitions, options) {
    this.options = options || {}
    this.output = {}
    this.unknown = []
    this.definitions = definitions
    this._assignDefaultValues()
  }

  _assignDefaultValues () {
    this.definitions.forEach(def => {
      if (t.isDefined(def.defaultValue)) {
        if (def.multiple) {
          this.output[def.name] = new OutputValue(arrayify(def.defaultValue))
          this.output[def.name].hasDefaultArrayValue = true
        } else {
          this.output[def.name] = new OutputValue(def.defaultValue)
        }
        this.output[def.name].valueSource = 'default'
      }
    })
  }

  setFlag (optionArg) {
    const def = this.definitions.get(optionArg)

    if (def) {
      this.output[def.name] = this.output[def.name] || new OutputValue()
      const outputValue = this.output[def.name]

      if (def.multiple) outputValue.value = outputValue.value || []

      /* for boolean types, set value to `true`. For all other types run value through setter function. */
      if (def.isBoolean()) {
        if (Array.isArray(outputValue.value)) {
          outputValue.value.push(true)
        } else {
          outputValue.value = true
        }
        return true
      } else {
        if (!Array.isArray(outputValue.value) && outputValue.valueSource === 'unknown') outputValue.value = null
        return false
      }
    } else {
      this.unknown.push(optionArg)
      return true
    }
  }

  setOptionValue (optionArg, value) {
    const ValueArg = __webpack_require__(6)
    const valueArg = new ValueArg(value)

    const def = this.definitions.get(optionArg)

    this.output[def.name] = this.output[def.name] || new OutputValue()
    const outputValue = this.output[def.name]

    if (def.multiple) outputValue.value = outputValue.value || []

    /* run value through setter function. */
    valueArg.value = def.type(valueArg.value)
    outputValue.valueSource = 'argv'
    if (Array.isArray(outputValue.value)) {
      if (outputValue.hasDefaultArrayValue) {
        outputValue.value = [ valueArg.value ]
        outputValue.hasDefaultArrayValue = false
      } else {
        outputValue.value.push(valueArg.value)
      }
      return false
    } else {
      outputValue.value = valueArg.value
      return true
    }
  }

  /**
   * Return `true` when an option value was set and is not a multiple. Return `false` if option was a multiple or if a value was not yet set.
   */
  setValue (value) {
    const ValueArg = __webpack_require__(6)
    const valueArg = new ValueArg(value)

    /* use the defaultOption */
    const def = this.definitions.getDefault()

    /* handle unknown values in the case a value was already set on a defaultOption */
    if (def) {
      const currentValue = this.output[def.name]
      if (valueArg.isDefined() && currentValue && t.isDefined(currentValue.value)) {
        if (def.multiple) {
          /* in the case we're setting an --option=value value on a multiple defaultOption, tag the value onto the previous unknown */
          if (valueArg.isOptionValueNotationValue && this.unknown.length) {
            this.unknown[this.unknown.length - 1] += `=${valueArg.value}`
            return true
          }
        } else {
          /* currentValue has already been set by argv,log this value as unknown and move on */
          if (currentValue.valueSource === 'argv') {
            this.unknown.push(valueArg.value)
            return true
          }
        }
      }
      return this.setOptionValue(`--${def.name}`, value)
    } else {
      if (valueArg.isOptionValueNotationValue) {
        this.unknown[this.unknown.length - 1] += `=${valueArg.value}`
      } else {
        this.unknown.push(valueArg.value)
      }
      return true
    }
  }

  get (name) {
    return this.output[name] && this.output[name].value
  }

  toObject () {
    let output = Object.assign({}, this.output)
    if (this.options.partial && this.unknown.length) {
      output._unknown = this.unknown
    }
    for (const prop in output) {
      if (prop !== '_unknown') {
        output[prop] = output[prop].value
      }
    }
    return output
  }
}

module.exports = Output


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)
const option = __webpack_require__(2)
const reBeginsWithValueMarker = new RegExp('^' + option.VALUE_MARKER)

class ValueArg {
  constructor (value) {
    this.isOptionValueNotationValue = reBeginsWithValueMarker.test(value)
    /* if the value marker is present at the value beginning, strip it */
    this.value = value ? value.replace(reBeginsWithValueMarker, '') : value
  }

  isDefined () {
    return t.isDefined(this.value)
  }
}

module.exports = ValueArg


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansi = __webpack_require__(3)
const os = __webpack_require__(4)
const arrayify = __webpack_require__(1)

class Section {
  constructor () {
    this.list = []
  }
  add (content) {
    arrayify(content).forEach(line => this.list.push(ansi.format(line)))
  }
  emptyLine () {
    this.list.push('')
  }
  header (text) {
    if (text) {
      this.add(ansi.format(text, [ 'underline', 'bold' ]))
      this.emptyLine()
    }
  }
  toString () {
    return this.list.join(os.EOL)
  }
}

module.exports = Section


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(4)

/**
 * @module table-layout
 */

/**
 * Recordset data in (array of objects), text table out.
 * @alias module:table-layout
 * @example
 * > Table = require('table-layout')
 * > jsonData = [{
 *   col1: 'Some text you wish to read in table layout',
 *   col2: 'And some more text in column two. '
 * }]
 * > table = new Table(jsonData, { maxWidth: 30 })
 * > console.log(table.toString())
 *  Some text you  And some more
 *  wish to read   text in
 *  in table      column two.
 *  layout
 */
class Table {

  /**
   * @param {object[]} - input data
   * @param [options] {object} - optional settings
   * @param [options.maxWidth] {number} - maximum width of layout
   * @param [options.noWrap] {boolean} - disable wrapping on all columns
   * @param [options.noTrim] {boolean} - disable line-trimming
   * @param [options.break] {boolean} - enable word-breaking on all columns
   * @param [options.columns] {module:table-layout~columnOption} - array of column-specific options
   * @param [options.ignoreEmptyColumns] {boolean} - if set, empty columns or columns containing only whitespace are not rendered.
   * @param [options.padding] {object} - Padding values to set on each column. Per-column overrides can be set in the `options.columns` array.
   * @param [options.padding.left] {string} - Defaults to a single space.
   * @param [options.padding.right] {string} - Defaults to a single space.
   * @alias module:table-layout
   */
  constructor (data, options) {
    let ttyWidth = (process && (process.stdout.columns || process.stderr.columns)) || 0

    /* Windows quirk workaround  */
    if (ttyWidth && os.platform() === 'win32') ttyWidth--

    let defaults = {
      padding: {
        left: ' ',
        right: ' '
      },
      maxWidth: ttyWidth || 80,
      columns: []
    }

    const extend = __webpack_require__(24)
    this.options = extend(defaults, options)
    this.load(data)
  }

  load (data) {
    const Rows = __webpack_require__(25)
    const Columns = __webpack_require__(26)

    let options = this.options

    /* remove empty columns */
    if (options.ignoreEmptyColumns) {
      data = Rows.removeEmptyColumns(data)
    }

    this.columns = Columns.getColumns(data)
    this.rows = new Rows(data, this.columns)

    /* load default column properties from options */
    this.columns.maxWidth = options.maxWidth
    this.columns.list.forEach(column => {
      if (options.padding) column.padding = options.padding
      if (options.noWrap) column.noWrap = options.noWrap
      if (options.break) {
        column.break = options.break
        column.contentWrappable = true
      }
    })

    /* load column properties from options.columns */
    options.columns.forEach(optionColumn => {
      let column = this.columns.get(optionColumn.name)
      if (column) {
        if (optionColumn.padding) {
          column.padding.left = optionColumn.padding.left
          column.padding.right = optionColumn.padding.right
        }
        if (optionColumn.width) column.width = optionColumn.width
        if (optionColumn.maxWidth) column.maxWidth = optionColumn.maxWidth
        if (optionColumn.minWidth) column.minWidth = optionColumn.minWidth
        if (optionColumn.noWrap) column.noWrap = optionColumn.noWrap
        if (optionColumn.break) {
          column.break = optionColumn.break
          column.contentWrappable = true
        }
      }
    })

    this.columns.autoSize()
    return this
  }

  getWrapped () {
    const wrap = __webpack_require__(10)

    this.columns.autoSize()
    return this.rows.list.map(row => {
      let line = []
      row.forEach((cell, column) => {
        if (column.noWrap) {
          line.push(cell.value.split(/\r\n?|\n/))
        } else {
          line.push(wrap.lines(cell.value, {
            width: column.wrappedContentWidth,
            break: column.break,
            noTrim: this.options.noTrim
          }))
        }
      })
      return line
    })
  }

  getLines () {
    var wrappedLines = this.getWrapped()
    var lines = []
    wrappedLines.forEach(wrapped => {
      let mostLines = getLongestArray(wrapped)
      for (let i = 0; i < mostLines; i++) {
        let line = []
        wrapped.forEach(cell => {
          line.push(cell[i] || '')
        })
        lines.push(line)
      }
    })
    return lines
  }

  /**
   * Identical to `.toString()` with the exception that the result will be an array of lines, rather than a single, multi-line string.
   * @returns {string[]}
   */
  renderLines () {
    var lines = this.getLines()
    return lines.map(line => {
      return line.reduce((prev, cell, index) => {
        let column = this.columns.list[index]
        return prev + padCell(cell, column.padding, column.generatedWidth)
      }, '')
    })
  }

  /**
   * Returns the input data as a text table.
   * @returns {string}
   */
  toString () {
    return this.renderLines().join(os.EOL) + os.EOL
  }
}

/**
 * Array of arrays in.. Returns the length of the longest one
 * @returns {number}
 * @private
 */
function getLongestArray (arrays) {
  var lengths = arrays.map(array => array.length)
  return Math.max.apply(null, lengths)
}

function padCell (cellValue, padding, width) {
  const ansi = __webpack_require__(11)
  const padEnd = __webpack_require__(30)
  var ansiLength = cellValue.length - ansi.remove(cellValue).length
  cellValue = cellValue || ''
  return (padding.left || '') +
  padEnd(cellValue, width - padding.length() + ansiLength) +
  (padding.right || '')
}

/**
 * @typedef module:table-layout~columnOption
 * @property name {string} - column name, must match a property name in the input
 * @property [width] {number} - A specific column width. Supply either this or a min and/or max width.
 * @property [minWidth] {number} - column min width
 * @property [maxWidth] {number} - column max width
 * @property [nowrap] {boolean} - disable wrapping for this column
 * @property [break] {boolean} - enable word-breaking for this columns
 * @property [padding] {object} - padding options
 * @property [padding.left] {string} - a string to pad the left of each cell (default: `' '`)
 * @property [padding.right] {string} - a string to pad the right of each cell (default: `' '`)
 */

module.exports = Table


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)

const _value = new WeakMap()
const _column = new WeakMap()

class Cell {
  constructor (value, column) {
    this.value = value
    _column.set(this, column)
  }

  set value (val) {
    _value.set(this, val)
  }

  get value () {
    let cellValue = _value.get(this)
    if (t.isFunction(cellValue)) cellValue = cellValue.call(_column.get(this))
    if (cellValue === undefined) {
      cellValue = ''
    } else {
      cellValue = String(cellValue)
    }
    return cellValue
  }
}

module.exports = Cell


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(4)
const t = __webpack_require__(0)

/**
 * @module wordwrapjs
 */

const re = {
  chunk: /[^\s-]+?-\b|\S+|\s+|\r\n?|\n/g,
  ansiEscapeSequence: /\u001b.*?m/g
}

/**
 * @alias module:wordwrapjs
 * @typicalname wordwrap
 */
class WordWrap {
  constructor (text, options) {
    options = options || {}
    if (!t.isDefined(text)) text = ''

    this._lines = String(text).split(/\r\n|\n/g)
    this.options = options
    this.options.width = options.width === undefined ? 30 : options.width
  }

  lines () {
    const flatten = __webpack_require__(29)

    /* trim each line of the supplied text */
    return this._lines.map(trimLine.bind(this))

      /* split each line into an array of chunks, else mark it empty */
      .map(line => line.match(re.chunk) || [ '~~empty~~' ])

      /* optionally, break each word on the line into pieces */
      .map(lineWords => {
        if (this.options.break) {
          return lineWords.map(breakWord.bind(this))
        } else {
          return lineWords
        }
      })
      .map(lineWords => lineWords.reduce(flatten, []))

      /* transforming the line of words to one or more new lines wrapped to size */
      .map(lineWords => {
        return lineWords
          .reduce((lines, word) => {
            let currentLine = lines[lines.length - 1]
            if (replaceAnsi(word).length + replaceAnsi(currentLine).length > this.options.width) {
              lines.push(word)
            } else {
              lines[lines.length - 1] += word
            }
            return lines
          }, [ '' ])
      })
      .reduce(flatten, [])

      /* trim the wrapped lines */
      .map(trimLine.bind(this))

      /* filter out empty lines */
      .filter(line => line.trim())

      /* restore the user's original empty lines */
      .map(line => line.replace('~~empty~~', ''))
  }

  wrap () {
    return this.lines().join(os.EOL)
  }

  toString () {
    return this.wrap()
  }

  /**
   * @param {string} - the input text to wrap
   * @param [options] {object} - optional configuration
   * @param [options.width] {number} - the max column width in characters (defaults to 30).
   * @param [options.break] {boolean} - if true, words exceeding the specified `width` will be forcefully broken
   * @param [options.noTrim] {boolean} - By default, each line output is trimmed. If `noTrim` is set, no line-trimming occurs - all whitespace from the input text is left in.
   * @return {string}
   */
  static wrap (text, options) {
    const block = new this(text, options)
    return block.wrap()
  }

  /**
   * Wraps the input text, returning an array of strings (lines).
   * @param {string} - input text
   * @param {object} - Accepts same options as constructor.
   */
  static lines (text, options) {
    const block = new this(text, options)
    return block.lines()
  }

  /**
   * Returns true if the input text would be wrapped if passed into `.wrap()`.
   * @param {string} - input text
   * @return {boolean}
   */
  static isWrappable (text) {
    if (t.isDefined(text)) {
      text = String(text)
      var matches = text.match(re.chunk)
      return matches ? matches.length > 1 : false
    }
  }

  /**
   * Splits the input text into an array of words and whitespace.
   * @param {string} - input text
   * @returns {string[]}
   */
  static getChunks (text) {
    return text.match(re.chunk) || []
  }
}

function trimLine (line) {
  return this.options.noTrim ? line : line.trim()
}

function replaceAnsi (string) {
  return string.replace(re.ansiEscapeSequence, '')
}

/* break a word into several pieces */
function breakWord (word) {
  if (replaceAnsi(word).length > this.options.width) {
    const letters = word.split('')
    let piece
    const pieces = []
    while ((piece = letters.splice(0, this.options.width)).length) {
      pieces.push(piece.join(''))
    }
    return pieces
  } else {
    return word
  }
}

module.exports = WordWrap


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const ansiEscapeSequence = /\u001b.*?m/g

/**
 * @module ansi
 */
exports.remove = remove
exports.has = has

function remove (input) {
  return input.replace(ansiEscapeSequence, '')
}

function has (input) {
  return ansiEscapeSequence.test(input)
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cmdline__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signer__ = __webpack_require__(33);



function main() {
    var inputData = Object(__WEBPACK_IMPORTED_MODULE_1__cmdline__["a" /* getDataFromCommandLine */])();
    if (!inputData) {
        return;
    }
    var key;
    try {
        key = __WEBPACK_IMPORTED_MODULE_0_fs__["readFileSync"](inputData.keyPath);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('The key has not been found');
        }
        throw err;
    }
    var signed = Object(__WEBPACK_IMPORTED_MODULE_2__signer__["a" /* signJson */])(inputData.data, key.toString());
    __WEBPACK_IMPORTED_MODULE_0_fs__["writeFileSync"](inputData.outputPath, new Buffer(JSON.stringify(signed, null, 2), 'utf8'));
    console.log("Licence has been successfully generated and saved to \"" + JSON.stringify(signed, null, 2) + "\"."); // tslint:disable-line:no-console
}
try {
    main();
    process.exit(0);
}
catch (err) {
    console.error(err.message);
    process.exit(1);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataFromCommandLine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_command_line_args__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_command_line_args___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_command_line_args__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_command_line_usage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_command_line_usage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_command_line_usage__);


var optionDefinitions = [
    { name: 'customer', alias: 'c', type: String, typeLabel: '[underline]{name}', description: 'The name of the customer for which the license is being issued' },
    { name: 'applicationName', alias: 'a', type: String, typeLabel: '[underline]{name}', description: 'The name of the application' },
    { name: 'applicationUri', alias: 'u', type: String, typeLabel: '[underline]{URI}', description: 'The URI of this application' },
    { name: 'adminsCount', alias: 'm', type: Number, typeLabel: '[underline]{number}', description: 'The maximum number of administrators', defaultValue: '1' },
    {
        name: 'globalAdminsCount',
        alias: 'g', type: Number, typeLabel: '[underline]{number}', description: 'The maximum number of global administrators', defaultValue: '1'
    },
    { name: 'validTo', alias: 'v', type: acceptDate, typeLabel: '[underline]{date}', description: 'The date of the license expiration' },
    { name: 'keyPath', alias: 'k', type: String, typeLabel: '[underline]{file}', description: 'Path to the private key used for signing' },
    {
        name: 'outputPath',
        alias: 'o', type: String, typeLabel: '[underline]{file}', description: 'Path where the license key (json) file should be created',
        defaultValue: 'license.json'
    },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage' }
];
var sections = [
    {
        header: 'LetzNav Licensing CLI',
        content: 'Generates license keys for individual applications managed by letzNav.'
    },
    {
        header: 'Options',
        optionList: optionDefinitions
    }
];
var usage = __WEBPACK_IMPORTED_MODULE_1_command_line_usage__(sections);
function acceptDate(dateString) {
    if (dateString) {
        return new Date(Date.parse(dateString));
    }
}
function checkOptions(options) {
    var errors = [];
    if (!options.keyPath) {
        errors.push('Missing keyPath option');
    }
    if (!options.customer) {
        errors.push('Missing customer');
    }
    if (!options.applicationName) {
        errors.push('Missing application name');
    }
    if (!options.applicationUri) {
        errors.push('Missing application URI');
    }
    if (!options.validTo) {
        errors.push('Missing expiration date');
    }
    return errors;
}
function getDataFromCommandLine() {
    var options = __WEBPACK_IMPORTED_MODULE_0_command_line_args__(optionDefinitions);
    if (options.help) {
        console.info(usage);
        return null;
    }
    var optionErrors = checkOptions(options);
    if (optionErrors.length > 0) {
        console.error('WRONG OPTIONS:', optionErrors.join(', '));
        console.info(usage);
        throw new Error();
    }
    var now = new Date();
    var data = {
        customer: options.customer,
        applicationName: options.applicationName,
        applicationUri: options.applicationUri,
        created: now.toISOString(),
        validTo: options.validTo.toISOString(),
        adminsCount: options.adminsCount || 1,
        globalAdminsCount: options.globalAdminsCount || 1,
    };
    return {
        data: data,
        keyPath: options.keyPath,
        outputPath: options.outputPath || 'license.json'
    };
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module command-line-args
 */
module.exports = commandLineArgs

/**
 * Returns an object containing all options set on the command line. By default it parses the global  [`process.argv`](https://nodejs.org/api/process.html#process_process_argv) array.
 *
 * By default, an exception is thrown if the user sets an unknown option (one without a valid [definition](#exp_module_definition--OptionDefinition)). To enable __partial parsing__, invoke `commandLineArgs` with the `partial` option - all unknown arguments will be returned in the `_unknown` property.
 *
 *
 * @param {module:definition[]} - An array of [OptionDefinition](#exp_module_definition--OptionDefinition) objects
 * @param [options] {object} - Options.
 * @param [options.argv] {string[]} - An array of strings, which if passed will be parsed instead  of `process.argv`.
 * @param [options.partial] {boolean} - If `true`, an array of unknown arguments is returned in the `_unknown` property of the output.
 * @returns {object}
 * @throws `UNKNOWN_OPTION` if `options.partial` is false and the user set an undefined option
 * @throws `NAME_MISSING` if an option definition is missing the required `name` property
 * @throws `INVALID_TYPE` if an option definition has a `type` value that's not a function
 * @throws `INVALID_ALIAS` if an alias is numeric, a hyphen or a length other than 1
 * @throws `DUPLICATE_NAME` if an option definition name was used more than once
 * @throws `DUPLICATE_ALIAS` if an option definition alias was used more than once
 * @throws `DUPLICATE_DEFAULT_OPTION` if more than one option definition has `defaultOption: true`
 * @alias module:command-line-args
 */
function commandLineArgs (optionDefinitions, options) {
  options = options || {}
  const Definitions = __webpack_require__(16)
  const Argv = __webpack_require__(18)
  const definitions = new Definitions()
  definitions.load(optionDefinitions)
  const argv = new Argv()
  argv.load(options.argv)
  argv.expandOptionEqualsNotation()
  argv.expandGetoptNotation()
  argv.validate(definitions, options)

  const OutputClass = definitions.isGrouped() ? __webpack_require__(21) : __webpack_require__(5)
  const output = new OutputClass(definitions, options)
  let optionName

  const option = __webpack_require__(2)
  for (const arg of argv) {
    if (option.isOption(arg)) {
      optionName = output.setFlag(arg) ? undefined : arg
    } else {
      if (optionName) {
        optionName = output.setOptionValue(optionName, arg) ? undefined : optionName
      } else {
        optionName = output.setValue(arg) ? undefined : optionName
      }
    }
  }

  return output.toObject()
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const arrayify = __webpack_require__(1)
const option = __webpack_require__(2)
const Definition = __webpack_require__(17)
const t = __webpack_require__(0)

/**
 * @module definitions
 * @private
 */

/**
 * @alias module:definitions
 */
class Definitions extends Array {
  load (definitions) {
    this.clear()
    arrayify(definitions).forEach(def => this.push(new Definition(def)))
    this.validate()
  }

  clear () {
    this.length = 0
  }

  /**
   * validate option definitions
   * @returns {string}
   */
  validate (argv) {
    const someHaveNoName = this.some(def => !def.name)
    if (someHaveNoName) {
      halt(
        'NAME_MISSING',
        'Invalid option definitions: the `name` property is required on each definition'
      )
    }

    const someDontHaveFunctionType = this.some(def => def.type && typeof def.type !== 'function')
    if (someDontHaveFunctionType) {
      halt(
        'INVALID_TYPE',
        'Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)'
      )
    }

    let invalidOption

    const numericAlias = this.some(def => {
      invalidOption = def
      return t.isDefined(def.alias) && t.isNumber(def.alias)
    })
    if (numericAlias) {
      halt(
        'INVALID_ALIAS',
        'Invalid option definition: to avoid ambiguity an alias cannot be numeric [--' + invalidOption.name + ' alias is -' + invalidOption.alias + ']'
      )
    }

    const multiCharacterAlias = this.some(def => {
      invalidOption = def
      return t.isDefined(def.alias) && def.alias.length !== 1
    })
    if (multiCharacterAlias) {
      halt(
        'INVALID_ALIAS',
        'Invalid option definition: an alias must be a single character'
      )
    }

    const hypenAlias = this.some(def => {
      invalidOption = def
      return def.alias === '-'
    })
    if (hypenAlias) {
      halt(
        'INVALID_ALIAS',
        'Invalid option definition: an alias cannot be "-"'
      )
    }

    const duplicateName = hasDuplicates(this.map(def => def.name))
    if (duplicateName) {
      halt(
        'DUPLICATE_NAME',
        'Two or more option definitions have the same name'
      )
    }

    const duplicateAlias = hasDuplicates(this.map(def => def.alias))
    if (duplicateAlias) {
      halt(
        'DUPLICATE_ALIAS',
        'Two or more option definitions have the same alias'
      )
    }

    const duplicateDefaultOption = hasDuplicates(this.map(def => def.defaultOption))
    if (duplicateDefaultOption) {
      halt(
        'DUPLICATE_DEFAULT_OPTION',
        'Only one option definition can be the defaultOption'
      )
    }
  }

  /**
   * @param {string}
   * @returns {Definition}
   */
  get (arg) {
    return option.short.test(arg)
      ? this.find(def => def.alias === option.short.name(arg))
      : this.find(def => def.name === option.long.name(arg))
  }

  getDefault () {
    return this.find(def => def.defaultOption === true)
  }

  isGrouped () {
    return this.some(def => def.group)
  }

  whereGrouped () {
    return this.filter(containsValidGroup)
  }
  whereNotGrouped () {
    return this.filter(def => !containsValidGroup(def))
  }
}

function halt (name, message) {
  const err = new Error(message)
  err.name = name
  throw err
}

function containsValidGroup (def) {
  return arrayify(def.group).some(group => group)
}

function hasDuplicates (array) {
  const items = {}
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (items[value]) {
      return true
    } else {
      if (t.isDefined(value)) items[value] = true
    }
  }
}

module.exports = Definitions


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)

/**
 * @module definition
 */

/**
 * Describes a command-line option. Additionally, you can add `description` and `typeLabel` properties and make use of [command-line-usage](https://github.com/75lb/command-line-usage).
 * @alias module:definition
 * @typicalname option
 */
class OptionDefinition {
  constructor (definition) {
    /**
    * The only required definition property is `name`, so the simplest working example is
    * ```js
    * [
    *   { name: "file" },
    *   { name: "verbose" },
    *   { name: "depth"}
    * ]
    * ```
    *
    * In this case, the value of each option will be either a Boolean or string.
    *
    * | #   | Command line args | .parse() output |
    * | --- | -------------------- | ------------ |
    * | 1   | `--file` | `{ file: true }` |
    * | 2   | `--file lib.js --verbose` | `{ file: "lib.js", verbose: true }` |
    * | 3   | `--verbose very` | `{ verbose: "very" }` |
    * | 4   | `--depth 2` | `{ depth: "2" }` |
    *
    * Unicode option names and aliases are valid, for example:
    * ```js
    * [
    *   { name: 'один' },
    *   { name: '两' },
    *   { name: 'три', alias: 'т' }
    * ]
    * ```
    * @type {string}
    */
    this.name = definition.name

    /**
    * The `type` value is a setter function (you receive the output from this), enabling you to be specific about the type and value received.
    *
    * You can use a class, if you like:
    *
    * ```js
    * const fs = require('fs')
    *
    * function FileDetails(filename){
    *   if (!(this instanceof FileDetails)) return new FileDetails(filename)
    *   this.filename = filename
    *   this.exists = fs.existsSync(filename)
    * }
    *
    * const cli = commandLineArgs([
    *   { name: 'file', type: FileDetails },
    *   { name: 'depth', type: Number }
    * ])
    * ```
    *
    * | #   | Command line args| .parse() output |
    * | --- | ----------------- | ------------ |
    * | 1   | `--file asdf.txt` | `{ file: { filename: 'asdf.txt', exists: false } }` |
    *
    * The `--depth` option expects a `Number`. If no value was set, you will receive `null`.
    *
    * | #   | Command line args | .parse() output |
    * | --- | ----------------- | ------------ |
    * | 2   | `--depth` | `{ depth: null }` |
    * | 3   | `--depth 2` | `{ depth: 2 }` |
    *
    * @type {function}
    * @default String
    */
    this.type = definition.type || String

    /**
    * getopt-style short option names. Can be any single character (unicode included) except a digit or hypen.
    *
    * ```js
    * [
    *   { name: "hot", alias: "h", type: Boolean },
    *   { name: "discount", alias: "d", type: Boolean },
    *   { name: "courses", alias: "c" , type: Number }
    * ]
    * ```
    *
    * | #   | Command line | .parse() output |
    * | --- | ------------ | ------------ |
    * | 1   | `-hcd` | `{ hot: true, courses: null, discount: true }` |
    * | 2   | `-hdc 3` | `{ hot: true, discount: true, courses: 3 }` |
    *
    * @type {string}
    */
    this.alias = definition.alias

    /**
    * Set this flag if the option takes a list of values. You will receive an array of values, each passed through the `type` function (if specified).
    *
    * ```js
    * [
    *   { name: "files", type: String, multiple: true }
    * ]
    * ```
    *
    * | #   | Command line | .parse() output |
    * | --- | ------------ | ------------ |
    * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 2   | `--files one.js --files two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 3   | `--files *` | `{ files: [ 'one.js', 'two.js' ] }` |
    *
    * @type {boolean}
    */
    this.multiple = definition.multiple

    /**
    * Any unclaimed command-line args will be set on this option. This flag is typically set on the most commonly-used option to make for more concise usage (i.e. `$ myapp *.js` instead of `$ myapp --files *.js`).
    *
    * ```js
    * [
    *   { name: "files", type: String, multiple: true, defaultOption: true }
    * ]
    * ```
    *
    * | #   | Command line | .parse() output |
    * | --- | ------------ | ------------ |
    * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 2   | `one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 3   | `*` | `{ files: [ 'one.js', 'two.js' ] }` |
    *
    * @type {boolean}
    */
    this.defaultOption = definition.defaultOption

    /**
    * An initial value for the option.
    *
    * ```js
    * [
    *   { name: "files", type: String, multiple: true, defaultValue: [ "one.js" ] },
    *   { name: "max", type: Number, defaultValue: 3 }
    * ]
    * ```
    *
    * | #   | Command line | .parse() output |
    * | --- | ------------ | ------------ |
    * | 1   |  | `{ files: [ 'one.js' ], max: 3 }` |
    * | 2   | `--files two.js` | `{ files: [ 'two.js' ], max: 3 }` |
    * | 3   | `--max 4` | `{ files: [ 'one.js' ], max: 4 }` |
    *
    * @type {*}
    */
    this.defaultValue = definition.defaultValue

    /**
    * When your app has a large amount of options it makes sense to organise them in groups.
    *
    * There are two automatic groups: `_all` (contains all options) and `_none` (contains options without a `group` specified in their definition).
    *
    * ```js
    * [
    *   { name: "verbose", group: "standard" },
    *   { name: "help", group: [ "standard", "main" ] },
    *   { name: "compress", group: [ "server", "main" ] },
    *   { name: "static", group: "server" },
    *   { name: "debug" }
    * ]
    * ```
    *
    *<table>
    *  <tr>
    *    <th>#</th><th>Command Line</th><th>.parse() output</th>
    *  </tr>
    *  <tr>
    *    <td>1</td><td><code>--verbose</code></td><td><pre><code>
    *{
    *  _all: { verbose: true },
    *  standard: { verbose: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>2</td><td><code>--debug</code></td><td><pre><code>
    *{
    *  _all: { debug: true },
    *  _none: { debug: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>3</td><td><code>--verbose --debug --compress</code></td><td><pre><code>
    *{
    *  _all: {
    *    verbose: true,
    *    debug: true,
    *    compress: true
    *  },
    *  standard: { verbose: true },
    *  server: { compress: true },
    *  main: { compress: true },
    *  _none: { debug: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>4</td><td><code>--compress</code></td><td><pre><code>
    *{
    *  _all: { compress: true },
    *  server: { compress: true },
    *  main: { compress: true }
    *}
    *</code></pre></td>
    *  </tr>
    *</table>
    *
    * @type {string|string[]}
    */
    this.group = definition.group

    /* pick up any remaining properties */
    for (let prop in definition) {
      if (!this[prop]) this[prop] = definition[prop]
    }
  }

  isBoolean (value) {
    return this.type === Boolean || (t.isFunction(this.type) && this.type.name === 'Boolean')
  }
}

module.exports = OptionDefinition


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const arrayify = __webpack_require__(1)
const option = __webpack_require__(2)

/**
 * Handles parsing different argv notations
 *
 * @module argv
 * @private
 */

class Argv extends Array {
  load (argv) {
    if (argv) {
      argv = arrayify(argv)
    } else {
      /* if no argv supplied, assume we are parsing process.argv */
      argv = process.argv.slice(0)
      argv.splice(0, 2)
    }
    argv.forEach(arg => this.push(String(arg)))
  }

  clear () {
    this.length = 0
  }

  /**
   * expand --option=value style args. The value is clearly marked to indicate it is definitely a value (which would otherwise be unclear if the value is `--value`, which would be parsed as an option). The special marker is removed in parsing phase.
   */
  expandOptionEqualsNotation () {
    const optEquals = option.optEquals
    if (this.some(optEquals.test.bind(optEquals))) {
      const expandedArgs = []
      this.forEach(arg => {
        const matches = arg.match(optEquals)
        if (matches) {
          expandedArgs.push(matches[1], option.VALUE_MARKER + matches[2])
        } else {
          expandedArgs.push(arg)
        }
      })
      this.clear()
      this.load(expandedArgs)
    }
  }

  /**
   * expand getopt-style combined options
   */
  expandGetoptNotation () {
    const findReplace = __webpack_require__(19)
    const combinedArg = option.combined
    const hasGetopt = this.some(combinedArg.test.bind(combinedArg))
    if (hasGetopt) {
      findReplace(this, combinedArg, arg => {
        arg = arg.slice(1)
        return arg.split('').map(letter => '-' + letter)
      })
    }
  }

  /**
   * Inspect the user-supplied options for validation issues.
   * @throws `UNKNOWN_OPTION`
   */
  validate (definitions, options) {
    options = options || {}
    let invalidOption

    if (!options.partial) {
      const optionWithoutDefinition = this
        .filter(arg => option.isOption(arg))
        .some(arg => {
          if (definitions.get(arg) === undefined) {
            invalidOption = arg
            return true
          }
        })
      if (optionWithoutDefinition) {
        halt(
          'UNKNOWN_OPTION',
          'Unknown option: ' + invalidOption
        )
      }
    }
  }
}

function halt (name, message) {
  const err = new Error(message)
  err.name = name
  throw err
}

module.exports = Argv


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayify = __webpack_require__(1)
var testValue = __webpack_require__(20)

/**
 * Find and either replace or remove items from an array.
 *
 * @module find-replace
 * @example
 * > findReplace = require('find-replace')
 *
 * > findReplace([ 1, 2, 3], 2, 'two')
 * [ 1, 'two', 3 ]
 *
 * > findReplace([ 1, 2, 3], 2, [ 'two', 'zwei' ])
 * [ 1, [ 'two', 'zwei' ], 3 ]
 *
 * > findReplace([ 1, 2, 3], 2, 'two', 'zwei')
 * [ 1, 'two', 'zwei', 3 ]
 *
 * > findReplace([ 1, 2, 3], 2) // no replacement, so remove
 * [ 1, 3 ]
 */
module.exports = findReplace

/**
 * @param {array} - the input array
 * @param {valueTest} - a [test-value](https://github.com/75lb/test-value) query to match the value you're looking for
 * @param [replaceWith] {...any} - If specified, found values will be replaced with these values, else  removed.
 * @returns {array}
 * @alias module:find-replace
 */
function findReplace (array, valueTest) {
  var found = []
  var replaceWiths = arrayify(arguments)
  replaceWiths.splice(0, 2)

  arrayify(array).forEach((function (value, index) {
    var expanded = []
    replaceWiths.forEach((function (replaceWith) {
      if (typeof replaceWith === 'function') {
        expanded = expanded.concat(replaceWith(value))
      } else {
        expanded.push(replaceWith)
      }
    }))

    if (testValue(value, valueTest)) {
      found.push({
        index: index,
        replaceWithValue: expanded
      })
    }
  }))

  found.reverse().forEach((function (item) {
    var spliceArgs = [ item.index, 1 ].concat(item.replaceWithValue)
    array.splice.apply(array, spliceArgs)
  }))

  return array
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayify = __webpack_require__(1)
var t = __webpack_require__(0)

/**
 * @module test-value
 * @example
 * var testValue = require('test-value')
 */
module.exports = testValue

/**
 * @alias module:test-value
 * @param {any} - a value to test
 * @param {any} - the test query
 * @param [options] {object}
 * @param [options.strict] {boolean} - Treat an object like a value not a query. 
 * @returns {boolean}
 */
function testValue (value, test, options) {
  options = options || {}
  if (test !== Object.prototype && t.isPlainObject(test) && t.isObject(value) && !options.strict) {
    return Object.keys(test).every((function (prop) {
      var queryValue = test[prop]

      /* get flags */
      var isNegated = false
      var isContains = false

      if (prop.charAt(0) === '!') {
        isNegated = true
      } else if (prop.charAt(0) === '+') {
        isContains = true
      }

      /* strip flag char */
      prop = (isNegated || isContains) ? prop.slice(1) : prop
      var objectValue = value[prop]

      if (isContains) {
        queryValue = arrayify(queryValue)
        objectValue = arrayify(objectValue)
      }

      var result = testValue(objectValue, queryValue, options)
      return isNegated ? !result : result
    }))
  } else if (test !== Array.prototype && Array.isArray(test)) {
    var tests = test
    if (value === Array.prototype || !Array.isArray(value)) value = [ value ]
    return value.some((function (val) {
      return tests.some((function (test) {
        return testValue(val, test, options)
      }))
    }))

  /*
  regexes queries will always return `false` for `null`, `undefined`, `NaN`.
  This is to prevent a query like `/.+/` matching the string `undefined`.
  */
  } else if (test instanceof RegExp) {
    if ([ 'boolean', 'string', 'number' ].indexOf(typeof value) === -1) {
      return false
    } else {
      return test.test(value)
    }
  } else if (test !== Function.prototype && typeof test === 'function') {
    return test(value)
  } else {
    return test === value
  }
}

/**
 * Returns a callback suitable for use by `Array` methods like `some`, `filter`, `find` etc.
 * @param {any} - the test query
 * @returns {function}
 */
testValue.where = function (test) {
  return function (value) {
    return testValue(value, test)
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const arrayify = __webpack_require__(1)
const Output = __webpack_require__(5)

class GroupedOutput extends Output {
  toObject () {
    const superOutput = super.toObject()
    delete superOutput._unknown
    const grouped = {
      _all: superOutput
    }
    if (this.unknown.length) grouped._unknown = this.unknown

    this.definitions.whereGrouped().forEach(def => {
      const outputValue = this.output[def.name]
      for (const groupName of arrayify(def.group)) {
        grouped[groupName] = grouped[groupName] || {}
        if (outputValue && outputValue.isDefined()) {
          grouped[groupName][def.name] = outputValue.value
        }
      }
    })

    this.definitions.whereNotGrouped().forEach(def => {
      const outputValue = this.output[def.name]
      if (outputValue && outputValue.isDefined()) {
        if (!grouped._none) grouped._none = {}
        grouped._none[def.name] = outputValue.value
      }
    })
    return grouped
  }
}

module.exports = GroupedOutput


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const OptionList = __webpack_require__(23)
const ContentSection = __webpack_require__(31)
const arrayify = __webpack_require__(1)

/**
 * @module command-line-usage
 */
module.exports = commandLineUsage

/**
 * Generates a usage guide suitable for a command-line app.
 * @param {Section|Section[]} - One of more section objects ({@link module:command-line-usage~content} or {@link module:command-line-usage~optionList}).
 * @returns {string}
 * @alias module:command-line-usage
 */
function commandLineUsage (sections) {
  sections = arrayify(sections)
  if (sections.length) {
    const output = sections.map(section => {
      if (section.optionList) {
        return new OptionList(section)
      } else {
        return new ContentSection(section)
      }
    })
    return '\n' + output.join('\n')
  }
}

/**
 * A Content section comprises a header and one or more lines of content.
 * @typedef content
 * @property header {string} - The section header, always bold and underlined.
 * @property content {string|string[]|object[]} - Overloaded property, accepting data in one of four formats:
 *
 * 1. A single string (one line of text)
 * 2. An array of strings (multiple lines of text)
 * 3. An array of objects (recordset-style data). In this case, the data will be rendered in table format. The property names of each object are not important, so long as they are consistent throughout the array.
 * 4. An object with two properties - `data` and `options`. In this case, the data and options will be passed directly to the underlying [table layout](https://github.com/75lb/table-layout) module for rendering.
 *
 * @property raw {boolean} - Set to true to avoid indentation and wrapping. Useful for banners.
 * @example
 * Simple string of content. The syntax for ansi formatting is documented [here](https://github.com/75lb/ansi-escape-sequences#module_ansi-escape-sequences.format).
 * ```js
 * {
 *   header: 'A typical app',
 *   content: 'Generates something [italic]{very} important.'
 * }
 * ```
 *
 * An array of strings is interpreted as lines, to be joined by the system newline character.
 * ```js
 * {
 *   header: 'A typical app',
 *   content: [
 *     'First line.',
 *     'Second line.'
 *   ]
 * }
 * ```
 *
 * An array of recordset-style objects are rendered in table layout.
 * ```js
 * {
 *   header: 'A typical app',
 *   content: [
 *     { colA: 'First row, first column.', colB: 'First row, second column.'},
 *     { colA: 'Second row, first column.', colB: 'Second row, second column.'}
 *   ]
 * }
 * ```
 *
 * An object with `data` and `options` properties will be passed directly to the underlying [table layout](https://github.com/75lb/table-layout) module for rendering.
 * ```js
 * {
 *   header: 'A typical app',
 *   content: {
 *     data: [
 *      { colA: 'First row, first column.', colB: 'First row, second column.'},
 *      { colA: 'Second row, first column.', colB: 'Second row, second column.'}
 *     ],
 *     options: {
 *       maxWidth: 60
 *     }
 *   }
 * }
 * ```
 */

 /**
  * A OptionList section adds a table displaying details of the available options.
  * @typedef optionList
  * @property [header] {string} - The section header, always bold and underlined.
  * @property optionList {OptionDefinition[]} - an array of [option definition](https://github.com/75lb/command-line-args#optiondefinition-) objects. In addition to the regular definition properties, command-line-usage will look for:
  *
  * - `description` - a string describing the option.
  * - `typeLabel` - a string to replace the default type string (e.g. `<string>`). It's often more useful to set a more descriptive type label, like `<ms>`, `<files>`, `<command>` etc.
  * @property [group] {string|string[]} - If specified, only options from this particular group will be printed. [Example](https://github.com/75lb/command-line-usage/blob/master/example/groups.js).
  * @property [hide] {string|string[]} - The names of one of more option definitions to hide from the option list. [Example](https://github.com/75lb/command-line-usage/blob/master/example/hide.js).
  *
  * @example
  * {
  *   header: 'Options',
  *   optionList: [
  *     {
  *       name: 'help', alias: 'h', description: 'Display this usage guide.'
  *     },
  *     {
  *       name: 'src', description: 'The input files to process',
  *       multiple: true, defaultOption: true, typeLabel: '[underline]{file} ...'
  *     },
  *     {
  *       name: 'timeout', description: 'Timeout value in ms. This description is needlessly long unless you count testing of the description column maxWidth useful.',
  *       alias: 't', typeLabel: '[underline]{ms}'
  *     }
  *   ]
  * }
  */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Section = __webpack_require__(7)
const Table = __webpack_require__(8)
const ansi = __webpack_require__(3)
const t = __webpack_require__(0)
const arrayify = __webpack_require__(1)

class OptionList extends Section {
  constructor (data) {
    super()
    let definitions = arrayify(data.optionList)
    const hide = arrayify(data.hide)
    const groups = arrayify(data.group)

    /* filter out hidden definitions */
    if (hide.length) {
      definitions = definitions.filter(definition => {
        return hide.indexOf(definition.name) === -1
      })
    }

    if (data.header) this.header(data.header)

    if (groups.length) {
      definitions = definitions.filter(def => {
        const noGroupMatch = groups.indexOf('_none') > -1 && !t.isDefined(def.group)
        const groupMatch = intersect(arrayify(def.group), groups)
        if (noGroupMatch || groupMatch) return def
      })
    }

    const columns = definitions.map(def => {
      return {
        option: getOptionNames(def, 'bold'),
        description: ansi.format(def.description)
      }
    })

    const table = new Table(columns, {
      padding: { left: '  ', right: ' ' },
      columns: [{ name: 'option', noWrap: true }, { name: 'description', maxWidth: 80 }]
    })
    this.add(table.renderLines())

    this.emptyLine()
  }
}

function getOptionNames (definition, optionNameStyles) {
  const names = []
  let type = definition.type
    ? definition.type.name.toLowerCase()
    : ''
  const multiple = definition.multiple ? '[]' : ''
  if (type) {
    type = type === 'boolean'
      ? ''
      : `[underline]{${type}${multiple}}`
  }
  type = ansi.format(definition.typeLabel || type)

  if (definition.alias) {
    names.push(ansi.format('-' + definition.alias, optionNameStyles))
  }
  names.push(ansi.format(`--${definition.name}`, optionNameStyles) + ' ' + type)
  return names.join(', ')
}

function intersect (arr1, arr2) {
  return arr1.some((function (item1) {
    return arr2.some((function (item2) {
      return item1 === item2
    }))
  }))
}

module.exports = OptionList


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = Buffer.alloc
			? Buffer.alloc(val.length)
			: new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach((function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	}));
	return clone;
}

function safeGetProperty(object, property) {
	return property === '__proto__' ? undefined : object[property];
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach((function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach((function (key) {
			src = safeGetProperty(target, key); // source value
			val = safeGetProperty(obj, key); // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		}));
	}));

	return target;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const arrayify = __webpack_require__(1)
const Cell = __webpack_require__(9)
const t = __webpack_require__(0)

/**
 *
 */
class Rows {
  constructor (rows, columns) {
    this.list = []
    this.load(rows, columns)
  }

  load (rows, columns) {
    arrayify(rows).forEach(row => {
      this.list.push(new Map(objectToIterable(row, columns)))
    })
  }

  static removeEmptyColumns (data) {
    const distinctColumnNames = data.reduce((columnNames, row) => {
      Object.keys(row).forEach(key => {
        if (columnNames.indexOf(key) === -1) columnNames.push(key)
      })
      return columnNames
    }, [])

    const emptyColumns = distinctColumnNames.filter(columnName => {
      const hasValue = data.some(row => {
        const value = row[columnName]
        return (t.isDefined(value) && !t.isString(value)) || (t.isString(value) && /\S+/.test(value))
      })
      return !hasValue
    })

    return data.map(row => {
      emptyColumns.forEach(emptyCol => delete row[emptyCol])
      return row
    })
  }
}

function objectToIterable (row, columns) {
  return columns.list.map(column => {
    return [ column, new Cell(row[column.name], column) ]
  })
}

/**
 * @module rows
 */
module.exports = Rows


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)
const arrayify = __webpack_require__(1)
const Column = __webpack_require__(27)
const wrap = __webpack_require__(10)
const Cell = __webpack_require__(9)
const ansi = __webpack_require__(11)

const _maxWidth = new WeakMap()

/**
 * @module columns
 */

class Columns {
  constructor (columns) {
    this.list = []
    arrayify(columns).forEach(this.add.bind(this))
  }

  /**
   * sum of all generatedWidth fields
   * @return {number}
   */
  totalWidth () {
    return this.list.length
      ? this.list.map(col => col.generatedWidth).reduce((a, b) => a + b)
      : 0
  }

  totalFixedWidth () {
    return this.getFixed()
      .map(col => col.generatedWidth)
      .reduce((a, b) => a + b, 0)
  }

  get (columnName) {
    return this.list.find(column => column.name === columnName)
  }

  getResizable () {
    return this.list.filter(column => column.isResizable())
  }

  getFixed () {
    return this.list.filter(column => column.isFixed())
  }

  add (column) {
    const col = column instanceof Column ? column : new Column(column)
    this.list.push(col)
    return col
  }

  set maxWidth (val) {
    _maxWidth.set(this, val)
  }

  /**
   * sets `generatedWidth` for each column
   * @chainable
   */
  autoSize () {
    const maxWidth = _maxWidth.get(this)

    /* size */
    this.list.forEach(column => {
      column.generateWidth()
      column.generateMinWidth()
    })

    /* adjust if user set a min or maxWidth */
    this.list.forEach(column => {
      if (t.isDefined(column.maxWidth) && column.generatedWidth > column.maxWidth) {
        column.generatedWidth = column.maxWidth
      }

      if (t.isDefined(column.minWidth) && column.generatedWidth < column.minWidth) {
        column.generatedWidth = column.minWidth
      }
    })

    const width = {
      total: this.totalWidth(),
      view: maxWidth,
      diff: this.totalWidth() - maxWidth,
      totalFixed: this.totalFixedWidth(),
      totalResizable: Math.max(maxWidth - this.totalFixedWidth(), 0)
    }

    /* adjust if short of space */
    if (width.diff > 0) {
      /* share the available space between resizeable columns */
      let resizableColumns = this.getResizable()
      resizableColumns.forEach(column => {
        column.generatedWidth = Math.floor(width.totalResizable / resizableColumns.length)
      })

      /* at this point, the generatedWidth should never end up bigger than the contentWidth */
      const grownColumns = this.list.filter(column => column.generatedWidth > column.contentWidth)
      const shrunkenColumns = this.list.filter(column => column.generatedWidth < column.contentWidth)
      let salvagedSpace = 0
      grownColumns.forEach(column => {
        const currentGeneratedWidth = column.generatedWidth
        column.generateWidth()
        salvagedSpace += currentGeneratedWidth - column.generatedWidth
      })
      shrunkenColumns.forEach(column => {
        column.generatedWidth += Math.floor(salvagedSpace / shrunkenColumns.length)
      })

    /* if, after autosizing, we still don't fit within maxWidth then give up */
    }

    return this
  }

  /**
   * Factory method returning all distinct columns from input
   * @param  {object[]} - input recordset
   * @return {module:columns}
   */
  static getColumns (rows) {
    var columns = new Columns()
    arrayify(rows).forEach(row => {
      for (let columnName in row) {
        let column = columns.get(columnName)
        if (!column) {
          column = columns.add({ name: columnName, contentWidth: 0, minContentWidth: 0 })
        }
        let cell = new Cell(row[columnName], column)
        let cellValue = cell.value
        if (ansi.has(cellValue)) {
          cellValue = ansi.remove(cellValue)
        }

        if (cellValue.length > column.contentWidth) column.contentWidth = cellValue.length

        let longestWord = getLongestWord(cellValue)
        if (longestWord > column.minContentWidth) {
          column.minContentWidth = longestWord
        }
        if (!column.contentWrappable) column.contentWrappable = wrap.isWrappable(cellValue)
      }
    })
    return columns
  }
}

function getLongestWord (line) {
  const words = wrap.getChunks(line)
  return words.reduce((max, word) => {
    return Math.max(word.length, max)
  }, 0)
}

module.exports = Columns


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const t = __webpack_require__(0)
const Padding = __webpack_require__(28)

/**
 * @module column
 */

const _padding = new WeakMap()

// setting any column property which is a factor of the width should trigger autoSize()

/**
 * Represents a table column
 */
class Column {
  constructor (column) {
    /**
     * @type {string}
     */
    if (t.isDefined(column.name)) this.name = column.name
    /**
     * @type {number}
     */
    if (t.isDefined(column.width)) this.width = column.width
    if (t.isDefined(column.maxWidth)) this.maxWidth = column.maxWidth
    if (t.isDefined(column.minWidth)) this.minWidth = column.minWidth
    if (t.isDefined(column.noWrap)) this.noWrap = column.noWrap
    if (t.isDefined(column.break)) this.break = column.break
    if (t.isDefined(column.contentWrappable)) this.contentWrappable = column.contentWrappable
    if (t.isDefined(column.contentWidth)) this.contentWidth = column.contentWidth
    if (t.isDefined(column.minContentWidth)) this.minContentWidth = column.minContentWidth
    this.padding = column.padding || { left: ' ', right: ' ' }
    this.generatedWidth = null
  }

  set padding (padding) {
    _padding.set(this, new Padding(padding))
  }
  get padding () {
    return _padding.get(this)
  }

  /**
   * the width of the content (excluding padding) after being wrapped
   */
  get wrappedContentWidth () {
    return Math.max(this.generatedWidth - this.padding.length(), 0)
  }

  isResizable () {
    return !this.isFixed()
  }

  isFixed () {
    return t.isDefined(this.width) || this.noWrap || !this.contentWrappable
  }

  generateWidth () {
    this.generatedWidth = this.width || (this.contentWidth + this.padding.length())
  }

  generateMinWidth () {
    this.minWidth = this.minContentWidth + this.padding.length()
  }
}

module.exports = Column


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Padding {
  constructor (padding) {
    this.left = padding.left
    this.right = padding.right
  }
  length () {
    return this.left.length + this.right.length
  }
}

/**
@module padding
*/
module.exports = Padding


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Flatten an array into the supplied array.
 *
 * @module reduce-flatten
 * @example
 * var flatten = require('reduce-flatten')
 */
module.exports = flatten

/**
 * @alias module:reduce-flatten
 * @example
 * > numbers = [ 1, 2, [ 3, 4 ], 5 ]
 * > numbers.reduce(flatten, [])
 * [ 1, 2, 3, 4, 5 ]
 */
function flatten (prev, curr) {
  return prev.concat(curr)
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    result++;
  }
  return result;
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeFloor = Math.floor;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
  return hasUnicode(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padEnd('abc', 6);
 * // => 'abc   '
 *
 * _.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padEnd('abc', 3);
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (string + createPadding(length - strLength, chars))
    : string;
}

module.exports = padEnd;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Section = __webpack_require__(7)
const Content = __webpack_require__(32)

class ContentSection extends Section {
  constructor (section) {
    super()
    this.header(section.header)

    if (section.content) {
      /* add content without indentation or wrapping */
      if (section.raw) {
        this.add(section.content)
      } else {
        const content = new Content(section.content)
        this.add(content.lines())
      }

      this.emptyLine()
    }
  }
}

module.exports = ContentSection


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Table = __webpack_require__(8)
const ansi = __webpack_require__(3)
const t = __webpack_require__(0)

class Content {
  constructor (content) {
    this._content = content
  }

  lines () {
    const content = this._content
    const defaultPadding = { left: '  ', right: ' ' }

    if (content) {
      /* string content */
      if (t.isString(content)) {
        const table = new Table({ column: ansi.format(content) }, {
          padding: defaultPadding,
          maxWidth: 80
        })
        return table.renderLines()

      /* array of strings */
      } else if (Array.isArray(content) && content.every(t.isString)) {
        const rows = content.map(string => ({ column: ansi.format(string) }))
        const table = new Table(rows, {
          padding: defaultPadding,
          maxWidth: 80
        })
        return table.renderLines()

      /* array of objects (use table-layout) */
      } else if (Array.isArray(content) && content.every(t.isPlainObject)) {
        const table = new Table(content.map(row => ansiFormatRow(row)), {
          padding: defaultPadding
        })
        return table.renderLines()

      /* { options: object, data: object[] } */
      } else if (t.isPlainObject(content)) {
        if (!content.options || !content.data) {
          throw new Error('must have an "options" or "data" property\n' + JSON.stringify(content))
        }
        const options = Object.assign(
          { padding: defaultPadding },
          content.options
        )

        /* convert nowrap to noWrap to avoid breaking compatibility */
        if (options.columns) {
          options.columns = options.columns.map(column => {
            if (column.nowrap) {
              column.noWrap = column.nowrap
              delete column.nowrap
            }
            return column
          })
        }

        const table = new Table(
          content.data.map(row => ansiFormatRow(row)),
          options
        )
        return table.renderLines()
      } else {
        const message = `invalid input - 'content' must be a string, array of strings, or array of plain objects:\n\n${JSON.stringify(content)}`
        throw new Error(message)
      }
    }
  }
}

function ansiFormatRow (row) {
  for (const key in row) {
    row[key] = ansi.format(row[key])
  }
  return row
}

module.exports = Content


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = signJson;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_stable_stringify__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_stable_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_json_stable_stringify__);


function signJson(data, keyData) {
    var sign = __WEBPACK_IMPORTED_MODULE_0_crypto__["createSign"]('RSA-SHA256');
    sign.write(__WEBPACK_IMPORTED_MODULE_1_json_stable_stringify__(data));
    sign.end();
    var signatureBuffer = sign.sign(keyData);
    var signature = signatureBuffer.toString('base64');
    return {
        data: data,
        signature: signature
    };
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(36);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(37);
exports.stringify = __webpack_require__(38);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),
/* 38 */
/***/ ((function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, (function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    })) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }))
/******/ ]);