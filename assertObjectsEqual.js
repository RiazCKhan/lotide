const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) { //actual, expected used because obj1, obj 2 are not global scope variables.
    console.log(`😇 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}; // -- The direct comparison of objects is not possible because objects store several data that are not stored in the corresponding memory blocks. 
// therefore we use the direct comparison (by utilizing eqObjects) to check each key/value alongside the util library to make our 
// assertobjectsequal function work

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

    
const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba); // => true