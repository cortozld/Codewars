/*
Tasks:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

/*
Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  let arr = numbers.split(" ")
  let max = arr[0]
  let min = arr[0]
  for(var i = 0; i < arr.length; i++) {
    if(+max <= +arr[i]) {
      max = arr[i]
    }if(+min >= +arr[i]) {
    min = arr[i]
  }
  }return `${max} ${min}`
}

/*
Test Examples:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});

*/
