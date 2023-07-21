function getAvg(...arr) {
	let avg = arr.reduce((a, b) => a + b) / arr.length;
	return avg;
}

function getSum(...arr) {
	return arr.reduce((a, b) => a + b); 
}

 module.exports = {getAvg, getSum};
