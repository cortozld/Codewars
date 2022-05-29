/*
Tasks:

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/

/*
Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

//My Result:

function getMiddle(s) {
  let arr = s.split("");
  return arr.length % 2 === 0 ? (arr[(arr.length/2 - 1)] + arr[(arr.length/2)]) : arr[(Math.ceil(arr.length/2) - 1)]
}

/*
Test Examples:

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});

*/
