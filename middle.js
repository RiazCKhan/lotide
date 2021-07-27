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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`😇 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🤬 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const middle = function(arr) {
  let index;
  let index2;
  if (arr.length <= 2) { // When arr has 0 - 2 elements return a blank array 
      return [];
    } 
    else if (arr.length % 2 !== 0) { // When arr has an Odd amount of elements return middle
       index = Math.floor(arr.length / 2) // Math.floor used to round down, to obtain correct index position
       return [arr[index]]
    }
    else if (arr.length % 2 === 0) { // When arr is Even amount of elements return middle index values (2)
      index = Math.floor(arr.length / 2)
      index2 = Math.floor(arr.length / 2 + 1)
      return [arr[index], arr[index2]]
    }
}

console.log(middle([2,4,6,8,10,12]))