/*
Tasks:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

/*
Examples:

*/

//My Result:

function findShort(s){
  const arr = s.split(" ")
  for(i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length
  }
  arr.sort((a, b)=> a-b)
  return arr[0]
}

/*
Test Examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

*/
