"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLastLess', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findLastLess([4], 5));
		});

		it('when array size is 2', () => {
			assert.strictEqual(0, bs.findLastLess([2, 4], 4));
			assert.strictEqual(1, bs.findLastLess([2, 4], 5));
			assert.strictEqual(1, bs.findLastLess([2, 2], 3));
		});

		it('when array size is 3', () => {
			assert.strictEqual(0, bs.findLastLess([2, 4, 5], 4));
			assert.strictEqual(1, bs.findLastLess([2, 4, 5], 5));
			assert.strictEqual(2, bs.findLastLess([2, 4, 5], 6));
			assert.strictEqual(2, bs.findLastLess([2, 2, 2], 3));
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15];

			assert.strictEqual(0, bs.findLastLess(arr, 3));
			assert.strictEqual(1, bs.findLastLess(arr, 5));
			assert.strictEqual(2, bs.findLastLess(arr, 6));
			assert.strictEqual(3, bs.findLastLess(arr, 9));
			assert.strictEqual(4, bs.findLastLess(arr, 10));
			assert.strictEqual(5, bs.findLastLess(arr, 11));
			assert.strictEqual(7, bs.findLastLess(arr, 13));

			assert.strictEqual(5, bs.findLastLess([8, 8, 8, 8, 8, 8], 9));
			assert.strictEqual(4, bs.findLastLess([8, 8, 8, 8, 8, 9], 9));
			assert.strictEqual(3, bs.findLastLess([8, 8, 8, 8, 9, 10], 9));
			assert.strictEqual(2, bs.findLastLess([6, 6, 6, 7, 9, 20], 7));
			assert.strictEqual(1, bs.findLastLess([3, 3, 5, 7, 9, 20], 4));
			assert.strictEqual(0, bs.findLastLess([2, 8, 8, 8, 8, 40], 3));
		});

		it('in arrays with odd number of items', () => {
			const arr = [0, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14];

			assert.strictEqual(0, bs.findLastLess(arr, 1));
			assert.strictEqual(1, bs.findLastLess(arr, 3));
			assert.strictEqual(2, bs.findLastLess(arr, 5));
			assert.strictEqual(3, bs.findLastLess(arr, 6));
			assert.strictEqual(4, bs.findLastLess(arr, 9));
			assert.strictEqual(5, bs.findLastLess(arr, 10));
			assert.strictEqual(6, bs.findLastLess(arr, 11));
			assert.strictEqual(10, bs.findLastLess(arr, 15));

			assert.strictEqual(6, bs.findLastLess([8, 8, 8, 8, 8, 8, 8], 9));
			assert.strictEqual(5, bs.findLastLess([8, 8, 8, 8, 8, 8, 9], 9));
			assert.strictEqual(4, bs.findLastLess([8, 8, 8, 8, 8, 9, 10], 9));
			assert.strictEqual(3, bs.findLastLess([5, 6, 6, 6, 7, 9, 20], 7));
			assert.strictEqual(2, bs.findLastLess([2, 3, 3, 5, 7, 9, 20], 4));
			assert.strictEqual(1, bs.findLastLess([1, 2, 8, 8, 8, 8, 40], 3));
			assert.strictEqual(0, bs.findLastLess([1, 2, 8, 8, 8, 8, 40], 2));
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findLastLess([4], 3));
			assert.strictEqual(-1, bs.findLastLess([4], 4));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findLastLess([2, 4], 1));
			assert.strictEqual(-1, bs.findLastLess([2, 4], 2));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				-1,
				bs.findLastLess([2, 4, 4, 4, 4, 4, 5, 8, 9, 10], 1)
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				-1,
				bs.findLastLess([2, 4, 5, 8, 9, 9, 9, 9, 9, 9, 10, 15], 1)
			);
		});
	});
});
