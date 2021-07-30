// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  // is a second binding needed?
  for (const letter of string) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};

console.log(assertEqual(countLetters('LHL').L, 2))
