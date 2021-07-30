const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
 for (const key of Object.keys(obj)) {
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

// --- test case to ensure correct value
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))

// --- provide test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);