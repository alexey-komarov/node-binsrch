"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('comparator', () => {
	it('should create correct comparator', () => {
		const cmp = bs.createComparator(10);
		assert.strictEqual(-1, cmp(1));
		assert.strictEqual(1, cmp(15));
		assert.strictEqual(0, cmp(10));
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

		assert.strictEqual(2, bs.findFirst(arr, cmp));
		assert.strictEqual(3, bs.findFirstGreater(arr, cmp));
		assert.strictEqual(2, bs.findFirstGreaterOrEqual(arr, cmp));
		assert.strictEqual(2, bs.findLast(arr, cmp));
		assert.strictEqual(1, bs.findLastLess(arr, cmp));
		assert.strictEqual(2, bs.findLastLessOrEqual(arr, cmp));
		assert.strictEqual(true, bs.contains(arr, cmp));
	});
});
