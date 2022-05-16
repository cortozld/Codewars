/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function filter_list(l) {
  for(i = l.length; i >= 0; i--) {
    if(l[i] === Number(l[i])) {
    }else {l.splice(i, 1)}
  }
    return l
}

/*
Test Examples:


*/
