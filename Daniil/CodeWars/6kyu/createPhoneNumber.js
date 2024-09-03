// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
    const one = '(' + numbers.slice(0,3).join('') + ')'
    const two = numbers.slice(3,6).join('')
    const three = numbers.slice(6).join('')
    return one + ' ' + two + '-' + three
  }