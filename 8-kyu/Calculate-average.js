/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function find_average(array) {
  let result = 0
  array.length  === 0 ?  0 : array.forEach((x) => result += x)
  return result === 0 ? 0 : result / array.length
}

/*
Test Examples:


*/
