"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirstGreaterOrEqual', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([4], 4));
		});

		it('when array size is 2', () => {
			// Equal
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 4], 2));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual([2, 4], 4));
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 2], 2));

			// Greater
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 4], 1));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual([2, 4], 3));
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 2], 1));
		});

		it('when array size is 3', () => {
			// Equal
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 4, 5], 2));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual([2, 4, 5], 4));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual([2, 4, 5], 5));
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 2, 2], 2));

			// Greater
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 4, 5], 1));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual([2, 4, 5], 3));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual([2, 4, 6], 5));
			assert.strictEqual(0, bs.findFirstGreaterOrEqual([2, 2, 2], 2));
		});

		it('in arrays with even number of items', () => {
			// Equal
			let arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 14];

			assert.strictEqual(0, bs.findFirstGreaterOrEqual(arr, 2));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual(arr, 4));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual(arr, 5));
			assert.strictEqual(3, bs.findFirstGreaterOrEqual(arr, 8));
			assert.strictEqual(4, bs.findFirstGreaterOrEqual(arr, 9));
			assert.strictEqual(5, bs.findFirstGreaterOrEqual(arr, 10));
			assert.strictEqual(9, bs.findFirstGreaterOrEqual(arr, 14));

			assert.strictEqual(
				0,
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				1,
				bs.findFirstGreaterOrEqual([2, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				2,
				bs.findFirstGreaterOrEqual([2, 4, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				3,
				bs.findFirstGreaterOrEqual([2, 4, 5, 8, 8, 8], 8)
			);

			assert.strictEqual(
				4,
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 8, 8], 8)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 7, 8], 8)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 7, 8], 8)
			);

			// Greater
			arr = [2, 4, 5, 8, 9, 11, 12, 13, 14, 16];

			assert.strictEqual(0, bs.findFirstGreaterOrEqual(arr, 1));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual(arr, 3));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual(arr, 5));
			assert.strictEqual(3, bs.findFirstGreaterOrEqual(arr, 8));
			assert.strictEqual(4, bs.findFirstGreaterOrEqual(arr, 9));
			assert.strictEqual(5, bs.findFirstGreaterOrEqual(arr, 10));
			assert.strictEqual(9, bs.findFirstGreaterOrEqual(arr, 15));

			assert.strictEqual(
				0,
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				1,
				bs.findFirstGreaterOrEqual([2, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				2,
				bs.findFirstGreaterOrEqual([2, 4, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				3,
				bs.findFirstGreaterOrEqual([2, 4, 5, 8, 8, 8], 7)
			);

			assert.strictEqual(
				4,
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 8, 8], 7)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 6, 8], 7)
			);
		});

		it('in arrays with odd number of items', () => {
			// Equal
			let arr = [2, 4, 5, 8, 9, 10, 20, 21, 23, 24, 25];

			assert.strictEqual(0, bs.findFirstGreaterOrEqual(arr, 2));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual(arr, 4));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual(arr, 5));
			assert.strictEqual(3, bs.findFirstGreaterOrEqual(arr, 8));
			assert.strictEqual(4, bs.findFirstGreaterOrEqual(arr, 9));
			assert.strictEqual(5, bs.findFirstGreaterOrEqual(arr, 10));
			assert.strictEqual(6, bs.findFirstGreaterOrEqual(arr, 20));

			assert.strictEqual(
				0,
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				1,
				bs.findFirstGreaterOrEqual([1, 8, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				2,
				bs.findFirstGreaterOrEqual([1, 2, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				3,
				bs.findFirstGreaterOrEqual([0, 2, 4, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				4,
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 8, 8, 8], 8)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreaterOrEqual([1, 2, 4, 5, 6, 8, 8], 8)
			);

			assert.strictEqual(
				6,
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 6, 7, 8], 8)
			);

			// Greater
			arr = [2, 4, 5, 8, 9, 10, 21, 22, 23, 24, 25];
			assert.strictEqual(0, bs.findFirstGreaterOrEqual(arr, 1));
			assert.strictEqual(1, bs.findFirstGreaterOrEqual(arr, 3));
			assert.strictEqual(2, bs.findFirstGreaterOrEqual(arr, 5));
			assert.strictEqual(3, bs.findFirstGreaterOrEqual(arr, 8));
			assert.strictEqual(4, bs.findFirstGreaterOrEqual(arr, 9));
			assert.strictEqual(5, bs.findFirstGreaterOrEqual(arr, 10));
			assert.strictEqual(6, bs.findFirstGreaterOrEqual(arr, 20));

			assert.strictEqual(
				0,
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				1,
				bs.findFirstGreaterOrEqual([1, 8, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				2,
				bs.findFirstGreaterOrEqual([1, 2, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				3,
				bs.findFirstGreaterOrEqual([0, 2, 4, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				4,
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 8, 8, 8], 7)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreaterOrEqual([1, 2, 4, 5, 6, 8, 8], 7)
			);

			assert.strictEqual(
				6,
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 6, 6, 8], 7)
			);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findFirstGreaterOrEqual([4], 5));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findFirstGreaterOrEqual([2, 4], 5));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				-1,
				bs.findFirstGreaterOrEqual([2, 4, 4, 5, 5, 8, 8, 9, 9, 10], 11)
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				-1,
				bs.findFirstGreaterOrEqual([0, 1, 1, 1, 2, 4, 5, 8, 9], 20)
			);
		});
	});
});
