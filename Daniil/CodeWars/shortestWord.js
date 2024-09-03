//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript


function findShort(s){
    const res = s.split(' ').sort((a,b)=> a.length - b.length)
    return res[0].length
  }