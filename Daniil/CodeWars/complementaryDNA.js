//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
    const arr = dna.split('').map((e)=> e == 'T' ?  'A' : e == 'A' ? 'T' : e == 'G' ? 'C' : 'G' )
    return arr.join('')
  }