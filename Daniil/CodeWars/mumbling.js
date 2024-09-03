//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript


function accum(s) {
	const arr = s.toUpperCase().split('')
  return arr.map((e, i)=> e.toUpperCase() + (e.repeat(i).toLowerCase())).join('-')
}