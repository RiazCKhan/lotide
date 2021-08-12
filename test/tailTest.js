// const assertEqual = require('../assertEqual'); RCK built assertion

const assert = require('chai').assert;
const tail = require('../tail');


describe("It should return the last element of an arr", () => {

  it("returns 'Labs' for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs')
  });

  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });

  it("returns 1 for [1]", () => {
    assert.deepEqual(tail([1]), 1)
  });
})

// // TEST CASES: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!