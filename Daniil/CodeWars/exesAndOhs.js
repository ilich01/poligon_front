//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    const arr = str.toLowerCase().split('')
    let x = 0
    let o = 0
    for(let i = 0 ; i<arr.length ; i++){
      if(arr[i]== 'x'){
        x+=1
      }
      if(arr[i]== 'o')
        o+=1
    }
  return x == o
}