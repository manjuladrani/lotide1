// TEST/ASSERTION FUNCTIONS
//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');
  
  // ACTUAL FUNCTION
const middle = function(array) {
  let newArr = [];
  if (array.length <= 2&& array.length > 0){
      console.log ("the array has only 1 or 2 elements");
  } else if (array.length % 2 === 0) {
    newArr = [array[(array.length/2)-1],array[array.length/2]];
    console.log("the array has an even number of elements");
  } else if (array.length % 2 !== 0) {
    newArr = [array[Math.floor(array.length/2)]];
    console.log("the array has an odd number of elements");
  }
  return newArr;

};

module.exports = middle;
  
  // TEST CODE
  // ...
//middle([1,2,3,4,5,6],[3, 4]);



 //assertArraysEqual(middle([1,2,3]),[2]);
// //assertArraysEqual(middle([1,2]),[]);  
// assertArraysEqual(middle([1,2,3,4,5,6]),[3, 4]);  