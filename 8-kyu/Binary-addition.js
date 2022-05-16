/*
Tasks:

*/

/*
Examples:

*/

//My Result:

function addBinary(a,b) {
  let total = a+b;
  let binary = ""
  for(i = Math.ceil(Math.log2(total)); i > 0; i--)
    if(total % 2 > 0 && Math.ceil(total / 2) === 0){
      total = Math.floor(total /2);
      binary = "0" + binary
    }else if (total % 2 > 0 && Math.ceil(total / 2) >= 1) {
        total = Math.floor(total / 2);
        binary = "1" + binary
      }else if(total % 2 === 0 && Math.ceil(total / 2) >= 0) {
        total = Math.floor(total / 2);
        binary = "0" + binary
      }else if(total % 2 === 0 && Math.ceil(total / 2) >=1) {
        total = Math.floor(total /2);
        binary = "1" + binary
    } return binary
}

/*
Test Examples:


*/
