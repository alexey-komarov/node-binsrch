"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('comparator', () => {
	it('should create correct comparator', () => {
		const cmp = bs.createComparator(10);
		assert.strictEqual(cmp(1), -1);
		assert.strictEqual(cmp(15), 1);
		assert.strictEqual(cmp(10), 0);
	});

	it('should work with custom comparator', () => {
		const arr = [{'f': 1}, {'f': 2}, {'f': 3}, {'f': 4}, {'f': 5}];

		const cmp = function(a) {
			if (a.f < 3) {
				return -1;
			}

			if (a.f > 3) {
				return 1;
			}

			return 0;
		};

		assert.strictEqual(bs.findFirst(arr, cmp), 2);
		assert.strictEqual(bs.findFirstGreater(arr, cmp), 3);
		assert.strictEqual(bs.findFirstGreaterOrEqual(arr, cmp), 2);
		assert.strictEqual(bs.findLast(arr, cmp), 2);
		assert.strictEqual(bs.findLastLess(arr, cmp), 1);
		assert.strictEqual(bs.findLastLessOrEqual(arr, cmp), 2);
	});
});
