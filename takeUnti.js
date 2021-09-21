/*The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

Take a look at the expected input and output below to get a better understanding of how it would work. */

const eqArrays = function(arr1,arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
};
const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`)
      }
      else {
          console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`)
      }
};
//--------------------------------------------------
const takeUntil = function(array, callback) {

    array.forEach(function(item, index){
        if (callback(item)){
            array = array.slice(0, index);
        }
        return;
      });
    
    return array;
  };

  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));