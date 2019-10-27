/** @module objects */

import { uniqBy } from 'lodash';

/**
 * @memberof module:objects
 * Flat an Array of Arrays into an uniq Array
 *
 * @param {Array} arrayOfArrays To flat
 * @returns {Array} Flatted
 */
export const flatten = arrayOfArrays =>
  arrayOfArrays.reduce((a, b) => a.concat(b), []);

/**
 * @memberof objects
 * This function removes any duplicate item at an array.
 *
 * @param {Array} a Array to remove elements
 * @returns {Array} Flatted
 */
export const cleanArray = a => uniqBy(a.filter(n => n));

/**
 * @memberof objects
 * Return the first element of Array if it's the single element
 *
 * @example // returns 1
 * const a = [1]
 * getFirstFromSingleElementArray(a);
 * @returns {object} Fist element if
 * @param {Array} array Array of items
 */
export const getFirstFromSingleElementArray = (array = []) =>
  array.length === 1 ? array[0] : null;

/**
 * getAnyFromArray returns the first element of array or null
 *
 * @param {Array} array - Input Array
 * @returns {object} the first item or null
 */
export const getAnyFromArray = (array = []) =>
  array.length > 0 ? array[0] : null;

/**
 *  Returns the last element of array (or object) or null
 *
 * @param {Array|object} array - Input Array or object
 * @returns {object} the first item or null
 */
export const getLastFromArrayOrObject = (array = []) =>
  array.length > 0 ? array[array.length - 1] : {};

/**
 * @memberof objects
 * Return the first element of Array if it's the single element
 *
 * @example // returns 1
 * const a = [1]
 * getFirstFromSingleElementArray(a);
 *
 * // returns {}
 * const b = []
 * getFirstFromSingleElementArray(b);
 * @returns {object} Fist element if exists, or an empty object
 * @param {Array} array Array of items
 */
export const getFirstFromSingleElementArrayNotNull = (array = []) =>
  array.length === 1 ? array[0] : {};

/**
 * Verify if an value is empty or null
 *
 * @param {*} value - Input
 * @returns {boolean} true if value is empty or null, otherwise false
 */
export const isEmptyOrNull = value => value == null || value.length === 0;

/**
 * Logic negation of {@link isEmptyOrNull}
 *
 * @param {*} value - Input value
 * @returns {boolean} true if value is not empty or null, otherwise false
 */
export const isNotEmptyOrNull = value => !isEmptyOrNull(value);

/**
 * Checks if string is type of {String}
 *
 * @param {string} value - Input String
 * @returns {*|boolean} true if it's string type
 */
export const verifyIfString = value => value && typeof value === 'string';

/**
 * Verify if string is not ''.
 *
 * @param {string} value - input string
 * @returns {boolean} true if is String Not Blank
 */
export const isStringNotBlank = value =>
  isNotEmptyOrNull(value) && value.trim().length;

/**
 * Truncate an string after max characters and add ... characters at string's end.
 *
 * @param {string} string - The input string.
 * @param {number} [max=30] - Max number o characters to truncate.
 * @returns {string} truncated String
 */
export const truncateString = (string, max = 30) =>
  string.substr(0, max - 1) + (string.length > max ? '...' : '');

/**
 * This function removes the field with name key of arr itens.
 *
 * @example
 * import { omitDeepArrayWalk } from '@tecsinapse/es-utils/core/object'
 * const omitDeepArrayWalkTest = [
 *      {id:1, vector: 1},
 *      {id:2, vector: 2},
 *      {id:3, vector: 3},
 * ];
 *
 * console.log("omitDeepArrayWalk: " + omitDeepArrayWalk(omitDeepArrayWalkTest, 'vector').map(c=>c.id));
 *
 * @param {object|Array} arr The input object.
 * @param {string} key The field key that will be removed.
 * @returns {object} object with key omitted
 */
export const omitDeepArrayWalk = (arr, key) =>
  arr.map(val => {
    if (Array.isArray(val)) {
      return omitDeepArrayWalk(val, key);
    }
    if (typeof val === 'object') {
      return omitDeep(val, key);
    }
    return val;
  });

/**
 * This function removes the field with name key inside the obj object.
 *
 * @param {object} obj The input object.
 * @param {string} key The field key that will be removed.
 * @returns {object} object
 */
export const omitDeep = (obj, key) => {
  const keys = Object.keys(obj);
  const newObj = {};
  keys.forEach(i => {
    if (i !== key) {
      const val = obj[i];
      if (Array.isArray(val)) {
        newObj[i] = omitDeepArrayWalk(val, key);
      } else if (typeof val === 'object' && val !== null) {
        newObj[i] = omitDeep(val, key);
      } else {
        newObj[i] = val;
      }
    }
  });
  return newObj;
};

/**
 * This function removes the duplicate itens of the field prop inside myArr array.
 *
 * @param {Array} myArr The input array.
 * @param {string} prop The field name wich functions will verify oneness, it's not allow to use deep fields.
 * @returns {Array} with duplicates removed.
 */
export const removeDuplicates = (myArr, prop) => {
  const arrayOfKeys = myArr.map(mapObj => mapObj[prop]);
  return myArr.filter((obj, pos) => arrayOfKeys.indexOf(obj[prop]) === pos);
};

/**
 * Get the item at the path path of the òbj
 *
 * @param {string} path The field key that will be get.
 * @param {*} obj The input object
 * @returns {null|*} resolved object
 */
export const resolveObj = (path, obj = null) => {
  const newPath = path.split('.');
  let current = obj;
  while (newPath.length) {
    if (typeof current !== 'object' || current === null) {
      return null;
    }
    current = current[newPath.shift()];
  }
  return current;
};
/**
 * @memberof module:objects2
 * This functions performs concatenation between two arrays x and y and return xy array
 *
 * @param {Array} x first Array
 * @param {Array} y second Array
 * @returns {Array} concatenated
 */
export const concat = (x, y) => x.concat(y);

/**
 * This functions flats a array using the 'f' function to determine final items of the array.
 *
 * @param {Function} f The flat function
 * @param {Array} xs The input array
 * @returns {*} xs flatten using f function.
 */
export const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

/**
 *
 * @example // returns 1
 * const a = [1]
 * getFirstFromSingleElementArray(a);
 * @returns {object} Fist element if
 * @param {Array} array Array of items
 */

/**
 * Return the first element of Array pr {}
 *
 * @param {Array} array Input Array
 * @returns {{}} First element
 */
export const getFirstElementOfArray = (array = []) =>
  array.length > 0 ? array[0] : {};
/**
 * Verify if undefined or null
 *
 * @param {*} value object or any to validade
 * @returns {boolean} Logic Value
 */
export const isNotUndefOrNull = value => value !== undefined && value !== null;
