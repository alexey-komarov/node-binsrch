"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLastLessOrEqual', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLastLessOrEqual([4], 5), 0);
			assert.strictEqual(bs.findLastLessOrEqual([4], 4), 0);
		});

		it('when array size is 2', () => {
			// Less
			assert.strictEqual(bs.findLastLessOrEqual([2, 4], 3), 0);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4], 5), 1);
			assert.strictEqual(bs.findLastLessOrEqual([2, 2], 3), 1);

			// Equal
			assert.strictEqual(bs.findLastLessOrEqual([2, 4], 2), 0);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4], 4), 1);
			assert.strictEqual(bs.findLastLessOrEqual([2, 2], 2), 1);
		});

		it('when array size is 3', () => {
			// Less
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 5], 3), 0);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 6], 5), 1);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 5], 6), 2);
			assert.strictEqual(bs.findLastLessOrEqual([2, 2, 2], 3), 2);

			// Equal
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 5], 2), 0);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 5], 4), 1);
			assert.strictEqual(bs.findLastLessOrEqual([2, 4, 5], 5), 2);
			assert.strictEqual(bs.findLastLessOrEqual([2, 2, 2], 2), 2);
		});

		it('in arrays with even number of items', () => {
			// Less
			const arr = [2, 4, 5, 8, 9, 10, 12, 12, 12, 12]

			assert.strictEqual(bs.findLastLessOrEqual(arr, 3), 0);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 5), 2);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 6), 2);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 9), 4);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 10), 5);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 11), 5);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 12), 9);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8], 9),
				5
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10], 9),
				4
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 10, 10], 9),
				3
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([6, 6, 6, 8, 9, 20], 7),
				2
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([3, 3, 5, 7, 9, 20], 4),
				1
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 40], 3),
				0
			);

			// Equal
			assert.strictEqual(bs.findLastLessOrEqual(
				[2, 4, 5, 8, 9, 10], 2),
				0
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 6, 8, 9, 10], 4),
				1
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 10], 5),
				2
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 5, 8, 10, 11], 8),
				3
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 11], 9),
				4
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 5, 8, 9, 10], 10),
				5
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8], 8),
				5
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10], 8),
				4
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 10, 10], 8),
				3
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([6, 6, 6, 8, 9, 20], 6),
				2
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([3, 3, 5, 7, 9, 20], 3),
				1
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 40], 2),
				0
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 8, 8, 8, 8, 10, 10, 10, 10, 11], 8),
				4
			);
		});

		it('in arrays with odd number of items', () => {
			// Less
			let arr = [0, 2, 4, 5, 8, 9, 9, 9, 9, 9, 11];

			assert.strictEqual(bs.findLastLessOrEqual(arr, 1), 0);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 3), 1);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 6), 3);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 10), 9);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 12), 10);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 8], 9),
				6
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 10], 9),
				5
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10, 10], 9),
				4
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([6, 6, 6, 6, 8, 9, 20], 7),
				3
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([3, 3, 3, 5, 7, 9, 20], 4),
				2
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 2, 8, 8, 8, 8, 40], 3),
				1
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 40], 2),
				0
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 9, 9, 9, 9, 40], 8),
				5
			);

			// Equal
			arr = [0, 2, 4, 5, 8, 9, 10, 10, 10, 11, 11];
			assert.strictEqual(bs.findLastLessOrEqual(arr, 1), 0);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 2), 1);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 4), 2);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 5), 3);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 8), 4);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 9), 5);
			assert.strictEqual(bs.findLastLessOrEqual(arr, 10), 8);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 8], 8),
				6
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 8, 10], 8),
				5
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([8, 8, 8, 8, 8, 10, 10], 8),
				4
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([6, 6, 6, 6, 8, 9, 20], 6),
				3
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([3, 3, 3, 5, 7, 9, 20], 3),
				2
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([2, 2, 8, 8, 8, 8, 40], 2),
				1
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 40], 1),
				0
			);

			assert.strictEqual(
				bs.findLastLessOrEqual([1, 3, 8, 8, 8, 8, 9, 9, 9, 9, 40], 8),
				5
			);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLastLessOrEqual([4], 3), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findLastLessOrEqual([2, 4], 1), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				bs.findLastLessOrEqual([2, 2, 2, 2, 3, 4, 5, 8, 9, 10], 1),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				bs.findLastLessOrEqual([2, 4, 5, 6, 7, 8, 9, 9, 11, 13, 15], 0),
				-1
			);
		});
	});
});
