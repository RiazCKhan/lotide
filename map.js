const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) { // function receives information from results1
  const results = []; // use pyhton tutor to see the flow
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]); // words is the array that is passed to map
console.log(results1) // word => word[0] is the call back portion

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
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

const test1 = ['blue', 'red', 'green']
const test2 = ['g', 'c', 't', 'm', 't']
const test3 = ['l', 'm', 'n', 'o']
const test4 = [1, 2, 3, 4, 5] 

console.log(assertArraysEqual(results1, test1));
console.log(assertArraysEqual(results1, test2));
console.log(assertArraysEqual(results1, test3));
console.log(assertArraysEqual(results1, test4));
