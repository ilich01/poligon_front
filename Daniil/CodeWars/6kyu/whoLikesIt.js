//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript


function likes(n) {
    const length = n.length
    if(length == 0){
      return 'no one likes this'
    }
    if(length == 1){
      return n[0] + ' likes this'
    }
    if(length == 2){
      return n[0] + ' and ' + n[1] + ' like this'
    }
    if(length == 3){
      return n[0] +', '+ n[1] + ' and ' + n[2] + ' like this'
    }
    else return n[0] + ', ' + n[1] + ' and ' + (length-2) + ' others like this'
  }