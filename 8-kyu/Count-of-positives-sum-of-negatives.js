/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function countPositivesSumNegatives(input) {
  var positive = 0;
  var negative = 0;
  if(!input) {
    return [];
  }else if(input.length === 0) {
    return [];
  }else {
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
        positive ++
      }else if(input[i] < 0) {
        negative += input[i]
      }
   }
      return [positive, negative]
  }
  }

/*
Test Examples:


*/
