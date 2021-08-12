const middle = require('../middle');

// TEST CASES
middle([2, 4, 6, 8, 10, 12]) // even number of elements
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // even number of elements
middle([9, 0, 5, 8, 9]) // odd number of elements
middle([1, 2, 3]) // odd number of elements