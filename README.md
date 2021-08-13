# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @riazckhan/lotide`

**Require it:**

`const _ = require('@riazckhan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: will generate an assertion passed 😇 / failed 🤬 statement.

* `assertArraysEqual(...)`: will generate an assertion passed / failed statement based the comparison of two arrays given their lengths and values.

* `assertObjectsEqual(...)`: utilizing the util library, this function will assert if two objects are equal based on their properties.

* `countLetters(...)`: will count the number of times each letter/characters is present in a string and return the result as an object.

* `countOnly(...)`: provide the function with an 'allItems' and 'itemsToCount' argument and receive a list of solely composed of the desired items, i.e., 'itemsToCount'.

* `eqArrays(...)`: will return true if the two array arguments provided are equal in lengths and values; otherwise false.

* `eqObjects(...)`: will return true if the two object arguments provided are equal in lengths and key/value pair properties; otherwise false.

* `findKey(...)`: given an object and callback, a desired value can be pulled from the object by providing the callback function with the desired argument.

* `findKeyByValue(...)`: given an object and a value, the function will return the key associated with the provided value, i.e., the key/value pair.

* `flatten(...)`: given a nested array of numbers, this function will 'flatten' all arrays and return one array.

* `head(...)`: will return the first element of an array.

* `middle(...)`: will return the middle index of an array. When given an array with an even number of elements the function will return the 2 'middle' index values.

* `tail(...)`: will return the last element of an array.

* `letterPositions(...)`: will return the index position of a character in the provided string.

* `takeUntil(...)`: will reduce a string and return the reduced string. The point of reduction is determined by the callback function.

* `without(...)`: will remove an element from an array and return the mutated array.
