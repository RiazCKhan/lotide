const assert = require('chai').assert;
const middle = require('../middle');

describe("It should return the middle of an array", () => {

  it("returns 8, 10 for [2, 4, 6, 8, 10, 12]", () => { // even number of elements
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]), [8, 6])
  });

  it("returns 5, 6 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => { // even number of elements
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [6, 5])
  });

  it("returns 5 for [9, 0, 5, 8, 9]", () => { // odd number of elements
    assert.deepEqual(middle([9, 0, 5, 8, 9]), [5])
  });

  it("returns 2 for [1, 2, 3]", () => { // odd number of elements
    assert.deepEqual(middle([9, 0, 5, 8, 9]), [5])
  });

  it("returns empty [] for []", () => {
    assert.deepEqual(middle([]), [])
  });

  it("returns empty [] for an arry with <= 2 elements", () => {
    assert.deepEqual(middle([1, 2]), [])
  });

});


// TEST CASES
// middle([2, 4, 6, 8, 10, 12]) // even number of elements
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // even number of elements
// middle([9, 0, 5, 8, 9]) // odd number of elements
// middle([1, 2, 3]) // odd number of elements