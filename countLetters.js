const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("✅✅✅ Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("🛑🛑🛑 Assertion Failed : " + actual + " !== "+expected)
    }
};

const countLetters = function(letters) {
    const charobj = {};
    const chars = letters.split('');
    for (let i = 0; i <= chars.length; i++) {
        const character = chars[i];
        if( character !== ' ') {
            if (charobj[character]) {
                charobj[character] = charobj[character] + 1;
            }else {
                charobj[character] = 1;
            }
        }
    }
    console.log(charobj.h);
    return charobj.h;

};
console.log(assertEqual(countLetters("lighthouse in the house"),4));
//console.log(countLetters("lighthouse in the house"));