/*
Tasks:

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/

/*
Examples:

*/

//My Result:

function switchItUp(number){
return number === 0 ? "Zero" :
       number === 1 ? "One" :
       number === 2 ? "Two" :
       number === 3 ? "Three" :
       number === 4 ? "Four" :
       number === 5 ? "Five" :
       number === 6 ? "Six" :
       number === 7 ? "Seven" :
       number === 8 ? "Eight" : "Nine"
}

/*
Test Examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
    assert.strictEqual(switchItUp(5),"Five");
  });
});

*/
