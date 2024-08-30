function validateCode (code) {
	let res;
	let str = code.toString()
	res = str[0] == 1 || str[0] == 2 || str[0] == 3;

	console.log(res)
	return res
}