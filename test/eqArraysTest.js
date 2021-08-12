const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CASES
assertEqual(eqArrays(['abc'], ['def']), true);
assertEqual(eqArrays(['Once upon a time'], ['Once upon a time']), true);
assertEqual(eqArrays([4, 1, 6], [4, 1, 6]), true);
assertEqual(eqArrays([1, 7, 8, 9], [2, 8, 9, 10]), true);