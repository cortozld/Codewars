/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  classPoints.push(yourPoints);
  for(i = 0; i < classPoints.length; i++) {
    sum += classPoints[i]
  }
  sum = sum / classPoints.length
  if(yourPoints > sum) {
    return true
  }else {return false}
}

/*
Test Examples:


*/
