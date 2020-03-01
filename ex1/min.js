const min = function minNumber(numbers) {
	if (numbers && numbers.length != 0) {
		let min = numbers[0];
		for (var i = 0; numbers[i]; i++) {
			if (numbers[i] < min) {
				min = numbers[i];
			}
		}
		return min;
	} else {
		return null;
	}
}

module.exports = min;
