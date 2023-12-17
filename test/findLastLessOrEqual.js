"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLastLessOrEqual', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findLastLessOrEqual([4], 5));
			assert.strictEqual(0, bs.findLastLessOrEqual([4], 4));
		});

		it('when array size is 2', () => {
			// Less
			assert.strictEqual(0, bs.findLastLessOrEqual([2, 4], 3));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 4], 5));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 2], 3));

			// Equal
			assert.strictEqual(0, bs.findLastLessOrEqual([2, 4], 2));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 4], 4));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 2], 2));
		});

		it('when array size is 3', () => {
			// Less
			assert.strictEqual(0, bs.findLastLessOrEqual([2, 4, 5], 3));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 4, 6], 5));
			assert.strictEqual(2, bs.findLastLessOrEqual([2, 4, 5], 6));
			assert.strictEqual(2, bs.findLastLessOrEqual([2, 2, 2], 3));

			// Equal
			assert.strictEqual(0, bs.findLastLessOrEqual([2, 4, 5], 2));
			assert.strictEqual(1, bs.findLastLessOrEqual([2, 4, 5], 4));
			assert.strictEqual(2, bs.findLastLessOrEqual([2, 4, 5], 5));
			assert.strictEqual(2, bs.findLastLessOrEqual([2, 2, 2], 2));
		});

		it('in arrays with even number of items', () => {
			// Less
			const arr = [2, 4, 5, 8, 9, 10, 12, 12, 12, 12]

			assert.strictEqual(0, bs.findLastLessOrEqual(arr, 3));
			assert.strictEqual(2, bs.findLastLessOrEqual(arr, 5));
			assert.strictEqual(2, bs.findLastLessOrEqual(arr, 6));
			assert.strictEqual(4, bs.findLastLessOrEqual(arr, 9));
			assert.strictEqual(5, bs.findLastLessOrEqual(arr, 10));
			assert.strictEqual(5, bs.findLastLessOrEqual(arr, 11));
			assert.strictEqual(9, bs.findLastLessOrEqual(arr, 12));

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8], 9)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10], 9)
			);

			assert.strictEqual(
				3,
				bs.findLastLessOrEqual([8, 8, 8, 8, 10, 10], 9)
			);

			assert.strictEqual(
				2,
				bs.findLastLessOrEqual([6, 6, 6, 8, 9, 20], 7)
			);

			assert.strictEqual(
				1,
				bs.findLastLessOrEqual([3, 3, 5, 7, 9, 20], 4)
			);

			assert.strictEqual(
				0,
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 40], 3)
			);

			// Equal
			assert.strictEqual(
				0,
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 10], 2)
			);

			assert.strictEqual(
				1,
				bs.findLastLessOrEqual([2, 4, 6, 8, 9, 10], 4)
			);

			assert.strictEqual(
				2,
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 10], 5)
			);

			assert.strictEqual(
				3,
				bs.findLastLessOrEqual([2, 4, 5, 8, 10, 11], 8)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 11], 9)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 10], 10)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10], 8)
			);

			assert.strictEqual(
				3,
				bs.findLastLessOrEqual([8, 8, 8, 8, 10, 10], 8)
			);

			assert.strictEqual(
				2,
				bs.findLastLessOrEqual([6, 6, 6, 8, 9, 20], 6)
			);

			assert.strictEqual(
				1,
				bs.findLastLessOrEqual([3, 3, 5, 7, 9, 20], 3)
			);

			assert.strictEqual(
				0,
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 40], 2)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 10, 10, 10, 10, 11], 8)
			);
		});

		it('in arrays with odd number of items', () => {
			// Less
			let arr = [0, 2, 4, 5, 8, 9, 9, 9, 9, 9, 11];

			assert.strictEqual(0, bs.findLastLessOrEqual(arr, 1));
			assert.strictEqual(1, bs.findLastLessOrEqual(arr, 3));
			assert.strictEqual(3, bs.findLastLessOrEqual(arr, 6));
			assert.strictEqual(9, bs.findLastLessOrEqual(arr, 10));
			assert.strictEqual(10, bs.findLastLessOrEqual(arr, 12));

			assert.strictEqual(
				6,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 8], 9)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 10], 9)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10, 10], 9)
			);

			assert.strictEqual(
				3,
				bs.findLastLessOrEqual([6, 6, 6, 6, 8, 9, 20], 7)
			);

			assert.strictEqual(
				2,
				bs.findLastLessOrEqual([3, 3, 3, 5, 7, 9, 20], 4)
			);

			assert.strictEqual(
				1,
				bs.findLastLessOrEqual([2, 2, 8, 8, 8, 8, 40], 3)
			);

			assert.strictEqual(
				0,
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 40], 2)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 9, 9, 9, 9, 40], 8)
			);

			// Equal
			arr = [0, 2, 4, 5, 8, 9, 10, 10, 10, 11, 11];

			assert.strictEqual(0, bs.findLastLessOrEqual(arr, 1));
			assert.strictEqual(1, bs.findLastLessOrEqual(arr, 2));
			assert.strictEqual(2, bs.findLastLessOrEqual(arr, 4));
			assert.strictEqual(3, bs.findLastLessOrEqual(arr, 5));
			assert.strictEqual(4, bs.findLastLessOrEqual(arr, 8));
			assert.strictEqual(5, bs.findLastLessOrEqual(arr, 9));
			assert.strictEqual(8, bs.findLastLessOrEqual(arr, 10));

			assert.strictEqual(
				6,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 8], 8)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 10], 8)
			);

			assert.strictEqual(
				4,
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10, 10], 8)
			);

			assert.strictEqual(
				3,
				bs.findLastLessOrEqual([6, 6, 6, 6, 8, 9, 20], 6)
			);

			assert.strictEqual(
				2,
				bs.findLastLessOrEqual([3, 3, 3, 5, 7, 9, 20], 3)
			);

			assert.strictEqual(
				1,
				bs.findLastLessOrEqual([2, 2, 8, 8, 8, 8, 40], 2)
			);

			assert.strictEqual(
				0,
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 40], 1)
			);

			assert.strictEqual(
				5,
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 9, 9, 9, 9, 40], 8)
			);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findLastLessOrEqual([4], 3));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findLastLessOrEqual([2, 4], 1));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				-1,
				bs.findLastLessOrEqual([2, 2, 2, 2, 3, 4, 5, 8, 9, 10], 1)
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				-1,
				bs.findLastLessOrEqual([2, 4, 5, 6, 7, 8, 9, 9, 11, 13, 15], 0)
			);
		});
	});
});
