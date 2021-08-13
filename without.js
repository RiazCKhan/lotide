const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`😇 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🤬 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const without = function(original, remove) {
  let result = [];
  for (i = 0; i < original.length; i++) {
    if (original[i] !== remove[i]) {
      result.push(original[i]);
    }
  }
  // console.log(result)
  return result;
};

// TEST CASES
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// TEST CASES
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
