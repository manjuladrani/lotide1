const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
    let result = false;
    it("returns 2 for [1, 2, 3]", () => {
        assert.deepEqual(middle([1, 2, 3]), [ 2 ]);
        result = true
        
    });
    it("returns 2 for [1, 2, 3, 4, 5, 6]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6]),[3, 4]);
       

    });
    
    return result;
});







