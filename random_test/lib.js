"use strict"

const bs = require('../index.js');
const assert = require('assert');

const ref = {
	findFirst: function(arr, x) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == x) {
				return i;
			}
		}

		return -1;
	},

	findFirstGreater: function(arr, x) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > x) {
				return i;
			}
		}

		return -1;
	},

	findFirstGreaterOrEqual: function(arr, x) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= x) {
				return i;
			}
		}

		return -1;
	},

	findLast: function (arr, x) {
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == x) {
				return i;
			}
		}

		return -1;
	},

	findLastLess: function(arr, x) {
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] < x) {
				return i;
			}
		}

		return -1;
	},

	findLastLessOrEqual: function(arr, x) {
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] <= x) {
				return i;
			}
		}

		return -1;
	},
};

const maxArrayLen = 2000;
const iterations = 1000000;

function testMethod(method) {
	let comparatorCount = 0;

	function _createComparator(x) {
		comparatorCount = 0;

		return function(a) {
			comparatorCount++;

			if (a < x) {
				return -1;
			}

			if (a > x) {
				return 1;
			}

			return 0;
		}
	};

	for (let i = 0; i < iterations; i++) {
		const arrayLen = Math.round(Math.random() * maxArrayLen);
		const maxIterations = Math.trunc(Math.log2(arrayLen || 1)) + 1;

		const arr = [];

		for (let j = 0; j < arrayLen; j++) {
			arr[j] = Math.round(Math.random() * maxArrayLen * 4);
		}

		arr.sort((a, b) => {
			if (a < b) {
				return -1;
			}

			if (a > b) {
				return 1;
			}

			return 0;
		});

		const x = Math.round(Math.random() * maxArrayLen * 4);

		assert.strictEqual(
			bs[method](arr, _createComparator(x)),
			ref[method](arr, x)
		);

		assert(
			comparatorCount <= maxIterations,
			comparatorCount + " > " + maxIterations
		);
	}
}

module.exports = {
	maxArrayLen: maxArrayLen,
	iterations: iterations,
	testMethod: testMethod,
};
