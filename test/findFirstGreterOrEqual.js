"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirstGreaterOrEqual', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirstGreaterOrEqual([4], 4), 0);
		});

		it('when array size is 2', () => {
			// Equal
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4], 2), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4], 4), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 2], 2), 0);

			// Greater
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4], 1), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4], 3), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 2], 1), 0);
		});

		it('when array size is 3', () => {
			// Equal
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 5], 2), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 5], 4), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 5], 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 2, 2], 2), 0);

			// Greater
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 5], 1), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 5], 3), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4, 6], 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 2, 2], 2), 0);
		});

		it('in arrays with even number of items', () => {
			// Equal
			let arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 14];
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 2), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 4), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 8), 3);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 9), 4);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 10), 5);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 14), 9);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8], 8),
				0
			);

			assert.strictEqual(bs.findFirstGreaterOrEqual(
				[2, 8, 8, 8, 8, 8], 8),
				1
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 8, 8, 8, 8], 8),
				2
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 8, 8, 8], 8),
				3
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 8, 8], 8),
				4
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 7, 8], 8),
				5
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 7, 8], 8),
				5
			);

			// Greater
			arr = [2, 4, 5, 8, 9, 11, 12, 13, 14, 16];

			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 1), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 3), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 8), 3);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 9), 4);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 10), 5);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 15), 9);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8], 7),
				0
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 8, 8, 8, 8, 8], 7),
				1
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 8, 8, 8, 8], 7),
				2
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 8, 8, 8], 7),
				3
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 8, 8], 7),
				4
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 5, 6, 6, 8], 7),
				5
			);
		});

		it('in arrays with odd number of items', () => {
			// Equal
			let arr = [2, 4, 5, 8, 9, 10, 20, 21, 23, 24, 25];
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 2), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 4), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 8), 3);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 9), 4);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 10), 5);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 20), 6);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 20), 6);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8, 8], 8),
				0
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([1, 8, 8, 8, 8, 8, 8], 8),
				1
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([1, 2, 8, 8, 8, 8, 8], 8),
				2
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 8, 8, 8, 8], 8),
				3
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 8, 8, 8], 8),
				4
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([1, 2, 4, 5, 6, 8, 8], 8),
				5
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 6, 7, 8], 8),
				6
			);

			// Greater
			arr = [2, 4, 5, 8, 9, 10, 21, 22, 23, 24, 25];
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 1), 0);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 3), 1);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 5), 2);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 8), 3);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 9), 4);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 10), 5);
			assert.strictEqual(bs.findFirstGreaterOrEqual(arr, 20), 6);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([8, 8, 8, 8, 8, 8, 8], 7),
				0
			);

			assert.strictEqual(bs.findFirstGreaterOrEqual(
				[1, 8, 8, 8, 8, 8, 8], 7),
				1
			);

			assert.strictEqual(bs.findFirstGreaterOrEqual(
				[1, 2, 8, 8, 8, 8, 8], 7),
				2
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 8, 8, 8, 8], 7),
				3
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 8, 8, 8], 7),
				4
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([1, 2, 4, 5, 6, 8, 8], 7),
				5
			);

			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 2, 4, 5, 6, 6, 8], 7),
				6
			);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirstGreaterOrEqual([4], 5), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findFirstGreaterOrEqual([2, 4], 5), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				bs.findFirstGreaterOrEqual([2, 4, 4, 5, 5, 8, 8, 9, 9, 10], 11),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				bs.findFirstGreaterOrEqual([0, 1, 1, 1, 2, 4, 5, 8, 9], 20),
				-1
			);
		});
	});
});
