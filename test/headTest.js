// const assertEqual = require('../assertEqual'); // RCK built assertion

const assert = require('chai').assert;
const head = require('../head');

describe("It should return the first element of an arr", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 6 for [6, 7, 8]", () => {
    assert.strictEqual(head([6, 7, 8]), 6);
  });

  it("returns 4 for [4, 1, 6]", () => {
    assert.strictEqual(head([4, 1, 6]), 4);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});