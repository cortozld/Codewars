/*
Tasks:

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

*/

/*
Examples:

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

//My Result:

function getDivisorsCnt(n){
  let result = 0
    for(i = 1; i <= n; i++) {
      n % i === 0 ? result ++ : NaN
    }return result
}

/*
Test Examples:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getDivisorsCnt(1) , 1);
Test.assertEquals(getDivisorsCnt(10) , 4);
Test.assertEquals(getDivisorsCnt(11) , 2);
Test.assertEquals(getDivisorsCnt(54) , 8);
  });
});

*/
