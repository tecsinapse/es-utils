'use strict';

var lodash = require('lodash');

exports.printMsg = function () {
  console.log("This is a message from the demo package");
};

exports.flatten = function (arrayOfArrays) {
  return arrayOfArrays.reduce((a, b) => a.concat(b), [])
};

exports.getFirstFromSingleElementArray = function(array = []) {
  return array.length === 1 ? array[0] : null
};

// exports.getAnyFromArray = (array = []) =>
//   array.length > 0 ? array[0] : null;
//
// exports.getLastFromArrayOrObject = (array = []) =>
//   array.length > 0 ? array[array.length - 1] : {};
//
// exports.getFirstFromSingleElementArrayNotNull = (array = []) =>
//   array.length === 1 ? array[0] : {};
//
// exports.isEmptyOrNull = value => value == null || value.length === 0;
// exports.isNotEmptyOrNull = value => !isEmptyOrNull(value);
// exports.verifyIfString = value => value && typeof value === 'string';
// exports.isStringNotBlank = value =>
//   isNotEmptyOrNull(value) && value.trim().length;
//
// exports.truncateString = (string, max = 30) =>
//   string.substr(0, max - 1) + (string.length > max ? '...' : '');
//
// exports.omitDeepArrayWalk = (arr, key) =>
//   arr.map(val => {
//     if (Array.isArray(val)) return omitDeepArrayWalk(val, key);
//     // eslint-disable-next-line
//     else if (typeof val === 'object') return omitDeep(val, key);
//     return val;
//   });
//
// exports.omitDeep = (obj, key) => {
//   const keys = Object.keys(obj);
//   const newObj = {};
//   keys.forEach(i => {
//     if (i !== key) {
//       const val = obj[i];
//       if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key);
//       else if (typeof val === 'object' && val !== null)
//         newObj[i] = omitDeep(val, key);
//       else newObj[i] = val;
//     }
//   });
//   return newObj;
// };
//
// exports.removeDuplicates = (myArr, prop) => {
//   const arrayOfKeys = myArr.map(mapObj => mapObj[prop]);
//   return myArr.filter((obj, pos) => arrayOfKeys.indexOf(obj[prop]) === pos);
// };
//
// exports.resolveObj = (path, obj = null) => {
//   const newPath = path.split('.');
//   let current = obj;
//   while (newPath.length) {
//     if (typeof current !== 'object' || current === null) return null;
//     current = current[newPath.shift()];
//   }
//   return current;
// };
//
// exports.concat = (x, y) => x.concat(y);
//
// exports.flatMap = (f, xs) => xs.map(f).reduce(concat, []);
