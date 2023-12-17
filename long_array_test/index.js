"use strict"

const bs = require('../index.js');
const assert = require('assert');

const arrayLen = 1024 * 1024 * 1024 * 4 - 1;

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

	const maxIterations = Math.trunc(Math.log2(arrayLen || 1)) + 1;
	const arr = new Uint8Array(arrayLen);

	for (let i = 0; i < arrayLen; i++) {
		arr[i] = i >>> 24
	}

	for (let x = 0; x < 256; x++) {
		let exp;

		switch (method) {
			case 'contains':
				exp = true;
				break;
			case 'findFirst':
			case 'findFirstGreaterOrEqual':
				exp = Math.floor(x * (1 << 24));
				break;
			case 'findFirstGreater':
				if (x === 255) {
					exp = -1;
				} else {
					exp = Math.floor((x + 1) * (1 << 24));
				}

				break;
			case 'findLast':
			case 'findLastLessOrEqual':
				exp = Math.floor((x + 1) * (1 << 24)) - 1;

				if (exp === arrayLen) {
					exp--;
				}

				break;
			case 'findLastLess':
				exp = Math.floor(x * (1 << 24)) - 1;
				break;
			default:
				assert(false, 'Invalid method ' + method);
		}

		assert.strictEqual(exp, bs[method](arr, _createComparator(x)));

		assert(
			comparatorCount <= maxIterations,
			comparatorCount + " > " + maxIterations
		);
	}
}

module.exports = {
	testMethod: testMethod,
};

describe('long array test', function() {
	this.timeout(10 * 60 * 1000);

	[
		'contains',
		'findFirst',
		'findFirstGreater',
		'findFirstGreaterOrEqual',
		'findLast',
		'findLastLess',
		'findLastLessOrEqual',
	].forEach(m => it(m, testMethod.bind(this, m)));
});
