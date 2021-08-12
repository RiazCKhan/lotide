// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};


assertEqual(eqArrays(['abc'], ['def']), true);
assertEqual(eqArrays(['Once upon a time'], ['Once upon a time']), true);
assertEqual(eqArrays([4, 1, 6], [4, 1, 6]), true);
assertEqual(eqArrays([1, 7, 8, 9], [2, 8, 9, 10]), true);