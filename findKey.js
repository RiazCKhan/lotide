const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ----- Refractor Solution
// const findKey = (object, callback) => {
//   let keys = Object.keys(object)
//   for (let key of keys) {
//     if (callback(object[key])) {
//       return key
//     }
//   }
//   return undefined
// }

// ----- Original Solution - findKeyByValue.js referenced for solution
const findKey = function(object, callback) {
  for (let key of Object.keys(object)) { // This will loop through the outter key values of each key, i.e., Blue Hill (key), {(value)}
    if (callback(object[key])) { // This will pass the inner object key/value pair, i.e., stars (key), number (value) to the callback function
      return key
    }
  }
  return undefined
}

const source = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

results1 = findKey(source, data => data.stars === 2); // will review object[key] to determine if the data.stars (the value of the key) is equal to 2
// console.log(results1)
// Expected Output "noma"