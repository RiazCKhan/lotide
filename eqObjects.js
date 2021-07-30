const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both obj have same number of keys
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // if obj(s) do not have the same num of keys exit process
  }
    for (let keys in object1) {
      // console.log(object1, object2)
      if (object1[keys] === object2[keys]) {
        // console.log(object1[keys], 'obj 1 keys') -- check IF statement hits
        // console.log(object1[keys], 'obj 2 keys') -- AND obj keys are received
        return true; // if obj(s) have the same key values return true
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEquals(ab, abc)); // => false

//Step 2 primitives test case 
console.log(eqObjects(ab, ba))


