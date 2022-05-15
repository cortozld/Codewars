/*
Tasks:

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

*/

/*
Examples:

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/

//My Result:

function sumStr(a,b) {
  return (Number(a) + Number(b)).toString()
}

/*
Test Examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("4","5"), "9");
    assert.strictEqual(sumStr("34","5"), "39");
  });
});


*/
