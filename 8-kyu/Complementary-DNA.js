/*
Tasks:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

*/

/*
Examples:

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/

//My Result:

function DNAStrand(dna){
  let result = ""
  for(i = 0; i < dna.length; i++) {
    if(dna.charAt(i) === "A") {
      result += "T"
    }else if(dna.charAt(i) === "T") {
      result += "A"
    }else if(dna.charAt(i) === "G") {
      result += "C"
    }else {
      result += "G"
    }
  }
  return result
}

/*
Test Examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")
  })
})

*/
