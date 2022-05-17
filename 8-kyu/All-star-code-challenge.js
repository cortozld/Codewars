/*
Tasks:

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

*/

/*
Examples:

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

*/

//My Result:

function strCount(str, letter){
  let result = 0
  for(i = 0; i < str.length; i++) {
    str.charAt(i) === letter ? result ++ : result
  }
  return result
}

/*
Test Examples:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(strCount('Hello', 'o'), 1);
Test.assertEquals(strCount('Hello', 'l'), 2);
Test.assertEquals(strCount('', 'z'), 0);
  });
});

*/
