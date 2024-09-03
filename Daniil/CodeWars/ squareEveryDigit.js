//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    const arr = (num+'').split('')
    const result = arr.map((e)=> e**2).join('')
    return +result
}