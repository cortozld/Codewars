/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function removeExclamationMarks(s) {
  let s2 = ""
  for(i = 0; i < s.length; i++) {
    if(s[i] !== "!") {
      s2 += s[i];
    }
  }return s2
}

/*
Test Examples:


*/
