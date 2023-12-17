"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLast', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findLast([4], 4));
		});

		it('when array size is 2', () => {
			assert.strictEqual(0, bs.findLast([2, 4], 2));
			assert.strictEqual(1, bs.findLast([2, 4], 4));
			assert.strictEqual(1, bs.findLast([2, 2], 2));
		});

		it('when array size is 3', () => {
			assert.strictEqual(0, bs.findLast([2, 4, 5], 2));
			assert.strictEqual(1, bs.findLast([2, 4, 5], 4));
			assert.strictEqual(2, bs.findLast([2, 4, 5], 5));
			assert.strictEqual(2, bs.findLast([2, 2, 2], 2));
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 9, 9, 9, 9, 10];

			assert.strictEqual(0, bs.findLast(arr, 2));
			assert.strictEqual(1, bs.findLast(arr, 4));
			assert.strictEqual(2, bs.findLast(arr, 5));
			assert.strictEqual(3, bs.findLast(arr, 8));
			assert.strictEqual(8, bs.findLast(arr, 9));
			assert.strictEqual(9, bs.findLast(arr, 10));

			assert.strictEqual(5, bs.findLast([8, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(4, bs.findLast([8, 8, 8, 8, 8, 9], 8));
			assert.strictEqual(3, bs.findLast([8, 8, 8, 8, 9, 10], 8));
			assert.strictEqual(2, bs.findLast([6, 6, 6, 7, 9, 20], 6));
			assert.strictEqual(1, bs.findLast([3, 3, 5, 7, 9, 20], 3));
			assert.strictEqual(0, bs.findLast([2, 8, 8, 8, 8, 40], 2));
		});

		it('in arrays with odd number of items', () => {
			const arr = [0, 2, 4, 5, 5, 5, 5, 8, 9, 10];

			assert.strictEqual(0, bs.findLast(arr, 0));
			assert.strictEqual(1, bs.findLast(arr, 2));
			assert.strictEqual(2, bs.findLast(arr, 4));
			assert.strictEqual(6, bs.findLast(arr, 5));
			assert.strictEqual(7, bs.findLast(arr, 8));
			assert.strictEqual(8, bs.findLast(arr, 9));
			assert.strictEqual(9, bs.findLast(arr, 10));

			assert.strictEqual(6, bs.findLast([8, 8, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(5, bs.findLast([8, 8, 8, 8, 8, 8, 9], 8));
			assert.strictEqual(4, bs.findLast([8, 8, 8, 8, 8, 9, 10], 8));
			assert.strictEqual(3, bs.findLast([8, 6, 6, 6, 7, 9, 20], 6));
			assert.strictEqual(2, bs.findLast([8, 3, 3, 5, 7, 9, 20], 3));
			assert.strictEqual(1, bs.findLast([8, 2, 8, 8, 8, 8, 40], 2));
			assert.strictEqual(0, bs.findLast([1, 2, 8, 8, 8, 8, 40], 1));
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findLast([4], 1));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findLast([2, 4], 3));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10], 7));
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10], 1));
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10], 15));

			assert.strictEqual(
				-1,
				bs.findLast([2, 4, 5, 8, 9, 10, 10, 10, 10, 10], 15)
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10, 15], 7));
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10, 15], 1));
			assert.strictEqual(-1, bs.findLast([2, 4, 5, 8, 9, 10, 15], 20));

			assert.strictEqual(
				-1,
				bs.findLast([2, 4, 5, 5, 5, 5, 5, 8, 9, 10, 15], 20)
			);
		});
	});
});
