const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`😇 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🤬 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
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

const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!result[sentence[i]]) {
        result[sentence[i]] = [i]
      }
      else {
        result[sentence[i]].push(i)
      }
    } 
  }
  // console.log(result)
  return result;
};


// TEST CASES
console.log(letterPositions('hello'))
assertArraysEqual(letterPositions('hello').e, [1])

console.log('------')
console.log(letterPositions('lighthouse in the house'))

// EXPECTED OUTPUT FOR 'lighthouse in the house'
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }