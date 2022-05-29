/*
Tasks:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

*/

/*
Examples:

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

*/

//My Result:

function replace(s){
  return s.replace(/i/g, "!").replace(/a/g, "!").replace(/e/g, "!").replace(/o/g, "!").replace(/u/g, "!").replace(/A/g, "!").replace(/E/g, "!").replace(/I/g, "!").replace(/O/g, "!").replace(/U/g, "!")
}

/*
Test Examples:

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})

*/
