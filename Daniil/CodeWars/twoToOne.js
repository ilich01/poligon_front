//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    const str = s1+s2
    const arr = str.split('').sort()
    return Array.from(new Set(arr)).join('')
  }