const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("✅✅✅ Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("🛑🛑🛑 Assertion Failed : " + actual + " !== "+expected)
    }
};
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

const letterPositions = function(sentence) {
    const results = {};
    const letters = sentence.split('');
    for (let i = 0; i < sentence.length; i++) {
        const character = letters[i];
        if(!results[character]){
            results[character] = [i];
        } else{
            results[character].push[i];
        }

    }
    // logic to update results here
    return results;
};

assertArraysEqual(letterPositions("hello").e, [1]); 