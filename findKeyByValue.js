const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj)
 for (const key of keys) {
   // console.log(Object.keys(obj)) check loop through keys  
      if (obj[key] === value) { // match key and value argument
        // console.log(key, 'test') check what key[value] is being found
        return key;
      }
    }
    return;
  };

 const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// TEST CASES to ensure correct value
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))

// TEST CASES 2
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);