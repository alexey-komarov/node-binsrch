"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLastLess', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLastLess([4], 5), 0);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findLastLess([2, 4], 4), 0);
			assert.strictEqual(bs.findLastLess([2, 4], 5), 1);
			assert.strictEqual(bs.findLastLess([2, 2], 3), 1);
		});

		it('when array size is 3', () => {
			assert.strictEqual(bs.findLastLess([2, 4, 5], 4), 0);
			assert.strictEqual(bs.findLastLess([2, 4, 5], 5), 1);
			assert.strictEqual(bs.findLastLess([2, 4, 5], 6), 2);
			assert.strictEqual(bs.findLastLess([2, 2, 2], 3), 2);
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15];
			assert.strictEqual(bs.findLastLess(arr, 3), 0);
			assert.strictEqual(bs.findLastLess(arr, 5), 1);
			assert.strictEqual(bs.findLastLess(arr, 6), 2);
			assert.strictEqual(bs.findLastLess(arr, 9), 3);
			assert.strictEqual(bs.findLastLess(arr, 10), 4);
			assert.strictEqual(bs.findLastLess(arr, 11), 5);
			assert.strictEqual(bs.findLastLess(arr, 13), 7);

			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 8, 8], 9), 5);
			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 8, 9], 9), 4);
			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 9, 10], 9), 3);
			assert.strictEqual(bs.findLastLess([6, 6, 6, 7, 9, 20], 7), 2);
			assert.strictEqual(bs.findLastLess([3, 3, 5, 7, 9, 20], 4), 1);
			assert.strictEqual(bs.findLastLess([2, 8, 8, 8, 8, 40], 3), 0);
		});

		it('in arrays with odd number of items', () => {
			const arr = [0, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14];

			assert.strictEqual(bs.findLastLess(arr, 1), 0);
			assert.strictEqual(bs.findLastLess(arr, 3), 1);
			assert.strictEqual(bs.findLastLess(arr, 5), 2);
			assert.strictEqual(bs.findLastLess(arr, 6), 3);
			assert.strictEqual(bs.findLastLess(arr, 9), 4);
			assert.strictEqual(bs.findLastLess(arr, 10), 5);
			assert.strictEqual(bs.findLastLess(arr, 11), 6);
			assert.strictEqual(bs.findLastLess(arr, 15), 10);

			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 8, 8, 8], 9), 6);
			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 8, 8, 9], 9), 5);
			assert.strictEqual(bs.findLastLess([8, 8, 8, 8, 8, 9, 10], 9), 4);
			assert.strictEqual(bs.findLastLess([5, 6, 6, 6, 7, 9, 20], 7), 3);
			assert.strictEqual(bs.findLastLess([2, 3, 3, 5, 7, 9, 20], 4), 2);
			assert.strictEqual(bs.findLastLess([1, 2, 8, 8, 8, 8, 40], 3), 1);
			assert.strictEqual(bs.findLastLess([1, 2, 8, 8, 8, 8, 40], 2), 0);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLastLess([4], 3), -1);
			assert.strictEqual(bs.findLastLess([4], 4), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findLastLess([2, 4], 1), -1);
			assert.strictEqual(bs.findLastLess([2, 4], 2), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				bs.findLastLess([2, 4, 4, 4, 4, 4, 5, 8, 9, 10], 1),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				bs.findLastLess([2, 4, 5, 8, 9, 9, 9, 9, 9, 9, 10, 15], 1),
				-1
			);
		});
	});
});
