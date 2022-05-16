/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function findNeedle(haystack) {
  let result = "";
  for(i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") {
      result = (`found the needle at position ${i}`)
    }
  }return result
}

/*
Test Examples:


*/
