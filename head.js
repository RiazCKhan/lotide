const assertEqual = require('./assertEqual');

const head = (array) => {
  let firstIndex = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      firstIndex = array[i];
    }
  }
  return firstIndex;
};

module.exports = head;