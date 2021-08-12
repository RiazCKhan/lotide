const assertEqual = require('./assertEqual');

const tail = (array) => {
  let newArray = '';
  for (let i = 0; i < array.length; i++) {
    newArray = newArray + array[i];
  }
  newArray = newArray.slice(1);
  return newArray;
};

module.exports = tail;