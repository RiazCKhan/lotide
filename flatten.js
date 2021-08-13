const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`😇 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🤬 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false
  }
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
};

const flatten = function(array) {
  flatArray = array.flat();
  console.log(flatArray)
  return flatArray
};

// TEST CASE
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

// TEST CASE 2
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
assertArraysEqual(flatten([[1, 2, 3], 4, 5]), [1, 2, 3, 4, 5])