const abs = function absNum(num) {
	if (num || num === 0) {
		return num < 0 ? -num : num;
	} else {
		return null;
	}
}

module.exports = abs;
