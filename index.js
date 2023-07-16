function getAvg(...arr) {
	let avg = arr.reduce((a, b) => a + b) / arr.length;
	return avg;
}

 module.exports = getAvg;
