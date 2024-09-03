// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
    if(n < 0) {
      return false
    }
    const sqrt = Math.floor(Math.sqrt(n))
    return sqrt * sqrt == n
  }