const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([4, 1, 6]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head(["gym", "shark", "Jim"]), "gym");