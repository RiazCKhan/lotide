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
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual,

  countLetters: countLetters,
  countOnly: countOnly,

  eqArrays: eqArrays,
  eqObjects: eqObjects,

  findKey: findKey,
  findKeyByValue: findKeyByValue,

  flatten: flatten,
  head: head,
  middle: middle,
  map: map,
  tail: tail,

  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without, without
};