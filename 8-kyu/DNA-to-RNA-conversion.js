/*
Tasks:

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

*/

/*
Examples:

"GCAT"  =>  "GCAU"

*/

//My Result:

function DNAtoRNA(dna) {
  let result = ""
  for(i = 0; i < dna.length; i++) {
    dna.charAt(i) === 'T' ? result += 'U' :
    dna.charAt(i) === 'G' ? result += 'G' :
    dna.charAt(i) === 'C' ? result += 'C' : result += 'A'
  }return result
}

/*
Test Examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })

*/
