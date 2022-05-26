/*
Tasks:

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

*/

/*
Examples:

10 --> 1
99 --> 18
-32 --> 5

*/

//My Result:

function sumDigits(number) {
  let result = 0
  let arr = (Math.abs(number)).toString().split('')
  for(i = 0; i < arr.length; i++) {
    result += Number(arr[i])
  }return result
}


/*
Test Examples:

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
    })
  })


*/
