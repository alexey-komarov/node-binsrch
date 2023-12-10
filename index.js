// arr: An array that must be sorted in ascending order.
// cmp: A comparator function(a) or a target value. 
//
// The comparator function should be defined to take a single argument 'a'
// and compare it internally:
//    It should return -1 if 'a' is less than a target value;
//    It should return  0 if 'a' is equal to a target value;
//    It should return  1 if 'a' is greater than a target value;
//
// If 'cmp' is not a function, it is treated as a target value against which
// elements of 'arr' are compared.

"use strict"

function createComparator(x) {
	return function(a) {
		if (a < x) {
			return -1;
		}

		if (a > x) {
			return 1;
		}

		return 0;
	}
};

function _getComparator(arg) {
	if (typeof arg === 'function') {
		return arg;
	}

	return createComparator(arg);
}

function findLast(arr, cmp) {
	cmp = _getComparator(cmp);

	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;
	let cres;

	while (pos >= start && pos < len) {
		cres = cmp(arr[pos]);

		if (cres === 0) {
			result = start = pos;
			pos += (len - pos) >> 1 || 1;
		} else if (cres > 0) {
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		} else {
			start = pos;
			pos += (len - pos) >> 1 || 1;
		}
	}

	return result;
}

function findLastLessOrEqual(arr, cmp) {
	cmp = _getComparator(cmp);

	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;

	while (pos >= start && pos < len) {
		if (cmp(arr[pos]) <= 0) {
			result = start = pos;
			pos += (len - pos) >> 1 || 1;
		} else {
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		}
	}

	return result;
}

function findLastLess(arr, cmp) {
	cmp = _getComparator(cmp);

	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;

	while (pos >= start && pos < len) {
		if (cmp(arr[pos]) < 0) {
			result = start = pos;
			pos += (len - pos) >> 1 || 1;
		} else {
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		}
	}

	return result;
}

function findFirst(arr, cmp) {
	cmp = _getComparator(cmp);
	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;
	let cres;

	while (pos >= start && pos < len) {
		cres = cmp(arr[pos]);

		if (cres === 0) {
			result = pos;
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		} else if (cres > 0) {
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		} else {
			start = pos;
			pos += (len - pos) >> 1 || 1;
		}
	}

	return result;
}

function findFirstGreaterOrEqual(arr, cmp) {
	cmp = _getComparator(cmp);

	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;

	while (pos >= start && pos < len) {
		if (cmp(arr[pos]) >= 0) {
			result = pos;
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		} else {
			start = pos;
			pos += (len - pos) >> 1 || 1;
		}
	}

	return result;
}

function findFirstGreater(arr, cmp) {
	cmp = _getComparator(cmp);

	let len = arr.length;
	let pos = len >> 1;
	let result = -1;
	let start = 0;

	while (pos >= start && pos < len) {
		if (cmp(arr[pos]) > 0) {
			result = pos;
			len = pos;
			pos = start + (((pos - start) >> 1) || pos - 1);
		} else {
			start = pos;
			pos += (len - pos) >> 1 || 1;
		}
	}

	return result;
}

module.exports = {
	createComparator: createComparator,
	findFirst: findFirst,
	findFirstGreater: findFirstGreater,
	findFirstGreaterOrEqual: findFirstGreaterOrEqual,
	findLast: findLast,
	findLastLess: findLastLess,
	findLastLessOrEqual: findLastLessOrEqual,
}
