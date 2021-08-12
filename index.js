const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = require('./countLetters');
const countOnly = require('./countOnly');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const flatten = require('./flatten');
const head = require('./head');
const middle = require('./middle');
const map = require('./map')
const tail = require('./tail');

const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,

  countLetters,
  countOnly,

  eqArrays,
  eqObjects,

  findKey,
  findKeyByValue,

  flatten,
  head,
  middle,
  map,
  tail,

  letterPositions,
  takeUntil,
  without
};