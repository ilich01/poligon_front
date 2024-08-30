function reverse(string){
	let arr = string.split(' ');
	let arrRev = [];
	let length = arr.length;

	for (let i = 0; i < length; i++) {
		arrRev.push(arr.pop())
	}
	return arrRev.join(' ')
}