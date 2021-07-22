const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstIndex = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      firstIndex = array[i];
    }
  }
  return firstIndex;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");