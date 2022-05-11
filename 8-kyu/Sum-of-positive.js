/*
Tasks:
You get an array of numbers, return the sum of all of the positives ones.
Note: if there is nothing to sum, the sum is default to 0.
*/

/*
Examples:
[1,-4,7,12] => 1 + 7 + 12 = 20
*/

//My Result:

function positiveSum(arr) {
  let result = 0;
  arr.forEach((x) => x > 0 ? result += x : result += 0)
  return result
}



/*
Test Examples:
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });

*/
