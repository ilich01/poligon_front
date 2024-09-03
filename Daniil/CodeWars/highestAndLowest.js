//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    const arr =  numbers.split(' ').map((e)=> +e).sort((a,b)=>a-b)
    return arr[arr.length-1] + ' ' + arr[0]
  }

  function highAndLow(numbers){
    const arr =  numbers.split(' ').map((e)=> +e)
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max + ' ' + min
  }