'use strict';

const {
  cleanArray,
  flatMap,
  concat,
  omitDeep,
  resolveObj,
  removeDuplicates,
  truncateString,
  omitDeepArrayWalk,
  flatten,
  getFirstFromSingleElementArray,
  getAnyFromArray,
  getLastFromArrayOrObject,
  getFirstFromSingleElementArrayNotNull,
  isEmptyOrNull,
  isNotEmptyOrNull,
  verifyIfString,
  isStringNotBlank
} = require('../objectUtils');

const arrayTest = [1, 2, 3, 4, 5, 5, 5];
const arrayTestConcat = [6, 7, 8, 9, 10, 11, 12];
const flatArrayTest = [[1, 2], [3, 4], [5, 6]];
const removeDuplicatesTest = [
  {id: 1},
  {id: 1},
  {id: 2}
];
const omitDeepTest = {
  omit: true,
  notOmit: true
};
const pathTest = 'clientes.id';
const resolveObjectTest = {
  clientes: {
    id: 1,
  }
};
const truncateStringTeste = 'abcdefghi';
const truncateStringMaxTest = 5;
const getFirstFromSingleElementArrayNotNullTeste = ['1'];
const getFirstFromSingleElementArrayTeste = [null];
const getLastFromArrayOrObjectTeste = [0, '1'];
const flattenTeste = [[1, 2, 3], [4, 5, 6]];
const omitDeepArrayWalkTeste = [
  {id:1, vector: 1},
  {id:2, vector: 2},
  {id:3, vector: 3},
];

console.log("omitDeep: " + omitDeep(omitDeepTest));
console.log("omitDeepArrayWalk: " + omitDeepArrayWalk(omitDeepArrayWalkTeste, 'vector').map(c=>c.id));
console.log("flatten: " + flatten(flattenTeste));
console.log("getFirstFromSingleElementArray: " + getFirstFromSingleElementArray(getFirstFromSingleElementArrayTeste));
console.log("getAnyFromArray: " + getAnyFromArray(getLastFromArrayOrObjectTeste));
console.log("getLastFromArrayOrObject: " + getLastFromArrayOrObject(getLastFromArrayOrObjectTeste));
console.log("getFirstFromSingleElementArrayNotNull: " + getFirstFromSingleElementArrayNotNull(getFirstFromSingleElementArrayNotNullTeste));
console.log("isEmptyOrNull: " + isEmptyOrNull(''));
console.log("isNotEmptyOrNull: " +  isNotEmptyOrNull(''));
console.log("verifyIfString: " +  verifyIfString(''));
console.log("isStringNotBlank: " +  isStringNotBlank(''));
console.log("truncateString: " +  truncateString(truncateStringTeste, truncateStringMaxTest));
console.log("emoveDuplicates: " +  removeDuplicates(removeDuplicatesTest, 'id'));
console.log("resolveObj: " +  resolveObj(pathTest, resolveObjectTest));
console.log("concat: " +  concat(arrayTest, arrayTestConcat));
console.log("flatMap: " +  flatMap(v => v, flatArrayTest));
console.log("cleanArray: " +  cleanArray(arrayTest));
