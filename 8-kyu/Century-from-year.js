/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function century(year) {
  for(i = year.toString().length; i < 4; i++) {
    year =  "0" + year;
  }
  year = Math.ceil(year/100)*1
  return year;
}

/*
Test Examples:


*/
