// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript



function spinWords(string){
    const arr = string.split(' ')
    const res = arr.map((e)=> e.length>=5 ? e.split('').reverse().join('') : e)
    return res.join(' ')
  }