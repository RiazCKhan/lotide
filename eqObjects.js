const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
 // console.log('test')
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
// Returns true if both obj have same number of key
// Returns true if both objects have identical key with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // if obj(s) do not have the same num of key exit process
  }
    for (let key in object1) {
      // console.log(object1[key], object2[key], 'keys')
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
         if (!eqArrays(object1[key], object2[key])) {
           return false;
         };
      // console.log(Array.isArray(object1[key]), 'is key?')
      }
      else if (object1[key] !== object2[key]) {
          return false;
        }
        // console.log(object1, object2)
        // console.log(object1[key], 'obj 1 key') -- check IF statement hits
        // console.log(object1[key], 'obj 2 key') -- AND obj key are received
        // if obj(s) have the same key values return true
      }
      return true;
    };



// TEST CASES

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEquals(ab, abc)); // => false

// Step 2 primitives test case console.log(eqObjects(ab, ba))

// Step 3: Arrays as values test case for assertEqual Function
// assertEqual((cd, dc), true) => assertion failed
// assertEqual((cd, cd2), true) // => assertion failed


// Step 4 + 5
/* const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, cd2)); // => false */

