/*
Tasks:

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

/*
Examples:



*/

//My Result:

function isTriangle(a,b,c){
   if(a + b > c &&
      b + c > a &&
      c + a > b) {
     return true
   }else {
     return false
   }
}

/*
Test Examples:

const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})

*/
