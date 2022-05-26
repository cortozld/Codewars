/*
Tasks:

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

*/

/*
Examples:

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/

//My Result:

function peopleWithAgeDrink(old) {
  return old < 14 ? "drink toddy" :
         old < 18 ? "drink coke"  :
         old < 21 ? "drink beer"  : "drink whisky"
};

/*
Test Examples:

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    })
  })

*/
