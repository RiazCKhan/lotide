// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😇 Assertion Passed: ' + actual + ' === ' + expected);
  } else if (actual !== expected) {
    console.log('🤬 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

//TEST CODE
assertEqual('Hello', 'Hello');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 10);