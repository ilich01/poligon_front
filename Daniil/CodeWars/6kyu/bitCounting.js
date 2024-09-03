//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function(n) {
    const a = n.toString(2)
    return a.split('').map((e)=> +e).reduce((acc,cumm)=> acc + cumm)
  };