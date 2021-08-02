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


const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item)) { // When this statement evalutes 'true' break will run, stopping the loop
      break;
    } else { // so long as the IF is false, i.e., the callback func, num will be added to the array
      results.push(item)
    }
  }
  return results
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, data => data < 0);
console.log(results1);

// Expected Output [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Test

const test1 = ['blue', 'red', 'green']
const test4 = [1, 2, 3, 4, 5] 
const test2 = ['g', 'c', 't', 'm', 't']
const test3 = ['cat', 'dog', 'rabbit', 'frog']

console.log(assertArraysEqual(results1, test1));
console.log(assertArraysEqual(results1, test2));
console.log(assertArraysEqual(results2, test3));
console.log(assertArraysEqual(results2, test4));