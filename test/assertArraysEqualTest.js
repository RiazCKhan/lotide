const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3]);
assertArraysEqual(['lmao'], ['lmao']);
assertArraysEqual(['lol'], ['rofl']);
assertArraysEqual(['abc'], ['def']);