// const assertEqual = require('./assertEqual'); RCK built assertion

const tail = (array) => {
  let lastIndex = array[array.length - 1]; // returning array at final position
  return lastIndex // by indexing array.length -1
};

module.exports = tail;