"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirstGreater', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findFirstGreater([4], 3));
		});

		it('when array size is 2', () => {
			assert.strictEqual(0, bs.findFirstGreater([2, 4], 1));
			assert.strictEqual(1, bs.findFirstGreater([2, 4], 2));
			assert.strictEqual(0, bs.findFirstGreater([2, 2], 1));
		});

		it('when array size is 3', () => {
			assert.strictEqual(0, bs.findFirstGreater([2, 4, 5], 1));
			assert.strictEqual(1, bs.findFirstGreater([2, 4, 5], 2));
			assert.strictEqual(2, bs.findFirstGreater([2, 4, 5], 4));
			assert.strictEqual(0, bs.findFirstGreater([2, 2, 2], 1));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(0, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 1));
			assert.strictEqual(1, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 2));
			assert.strictEqual(2, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 4));
			assert.strictEqual(3, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 7));
			assert.strictEqual(4, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 8));
			assert.strictEqual(5, bs.findFirstGreater([2, 4, 5, 8, 9, 10], 9));

			assert.strictEqual(
				5,
				bs.findFirstGreater([2, 4, 5, 8, 9, 10, 10, 10, 11, 12], 9)
			);

			assert.strictEqual(0, bs.findFirstGreater([8, 8, 8, 8, 8, 8], 7));
			assert.strictEqual(1, bs.findFirstGreater([2, 8, 8, 8, 8, 8], 7));
			assert.strictEqual(2, bs.findFirstGreater([2, 4, 8, 8, 8, 8], 7));
			assert.strictEqual(3, bs.findFirstGreater([2, 4, 5, 8, 8, 8], 7));
			assert.strictEqual(4, bs.findFirstGreater([2, 4, 5, 6, 8, 8], 7));
			assert.strictEqual(5, bs.findFirstGreater([2, 4, 5, 6, 7, 8], 7));

			assert.strictEqual(
				5,
				bs.findFirstGreater([8, 8, 8, 8, 8, 9, 9, 9, 9, 9], 8)
			);
		});

		it('in arrays with odd number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 20, 21, 23, 25, 40];

			assert.strictEqual(0, bs.findFirstGreater(arr, 1));
			assert.strictEqual(1, bs.findFirstGreater(arr, 3));
			assert.strictEqual(2, bs.findFirstGreater(arr, 4));
			assert.strictEqual(3, bs.findFirstGreater(arr, 7));
			assert.strictEqual(4, bs.findFirstGreater(arr, 8));
			assert.strictEqual(5, bs.findFirstGreater(arr, 9));
			assert.strictEqual(6, bs.findFirstGreater(arr, 19));

			assert.strictEqual(
				0,
				bs.findFirstGreater([8, 8, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				1,
				bs.findFirstGreater([1, 8, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				2,
				bs.findFirstGreater([1, 2, 8, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				3,
				bs.findFirstGreater([0, 2, 4, 8, 8, 8, 8], 7)
			);

			assert.strictEqual(
				4,
				bs.findFirstGreater([0, 2, 4, 5, 8, 8, 8], 7)
			);

			assert.strictEqual(
				5,
				bs.findFirstGreater([1, 2, 4, 5, 6, 8, 8], 7)
			);

			assert.strictEqual(
				6,
				bs.findFirstGreater([0, 2, 4, 5, 6, 7, 8], 7)
			);

			assert.strictEqual(
				6,
				bs.findFirstGreater([0, 2, 4, 5, 6, 7, 8, 8, 8, 9, 9], 7)
			);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findFirstGreater([4], 5));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findFirstGreater([2, 4], 5));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				-1,
				bs.findFirstGreater([1, 1, 1, 1, 2, 4, 5, 8, 9, 10])
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				-1,
				bs.findFirstGreater([2, 3, 3, 3, 3, 4, 5, 8, 9, 10, 15])
			);
		});
	});
});
