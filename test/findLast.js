"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findLast', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLast([4], 4), 0);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findLast([2, 4], 2), 0);
			assert.strictEqual(bs.findLast([2, 4], 4), 1);
			assert.strictEqual(bs.findLast([2, 2], 2), 1);
		});

		it('when array size is 3', () => {
			assert.strictEqual(bs.findLast([2, 4, 5], 2), 0);
			assert.strictEqual(bs.findLast([2, 4, 5], 4), 1);
			assert.strictEqual(bs.findLast([2, 4, 5], 5), 2);
			assert.strictEqual(bs.findLast([2, 2, 2], 2), 2);
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 9, 9, 9, 9, 10];
			assert.strictEqual(bs.findLast(arr, 2), 0);
			assert.strictEqual(bs.findLast(arr, 4), 1);
			assert.strictEqual(bs.findLast(arr, 5), 2);
			assert.strictEqual(bs.findLast(arr, 8), 3);
			assert.strictEqual(bs.findLast(arr, 9), 8);
			assert.strictEqual(bs.findLast(arr, 10), 9);

			assert.strictEqual(bs.findLast([8, 8, 8, 8, 8, 8], 8), 5);
			assert.strictEqual(bs.findLast([8, 8, 8, 8, 8, 9], 8), 4);
			assert.strictEqual(bs.findLast([8, 8, 8, 8, 9, 10], 8), 3);
			assert.strictEqual(bs.findLast([6, 6, 6, 7, 9, 20], 6), 2);
			assert.strictEqual(bs.findLast([3, 3, 5, 7, 9, 20], 3), 1);
			assert.strictEqual(bs.findLast([2, 8, 8, 8, 8, 40], 2), 0);
		});

		it('in arrays with odd number of items', () => {
			const arr = [0, 2, 4, 5, 5, 5, 5, 8, 9, 10];

			assert.strictEqual(bs.findLast(arr, 0), 0);
			assert.strictEqual(bs.findLast(arr, 2), 1);
			assert.strictEqual(bs.findLast(arr, 4), 2);
			assert.strictEqual(bs.findLast(arr, 5), 6);
			assert.strictEqual(bs.findLast(arr, 8), 7);
			assert.strictEqual(bs.findLast(arr, 9), 8);
			assert.strictEqual(bs.findLast(arr, 10), 9);

			assert.strictEqual(bs.findLast([8, 8, 8, 8, 8, 8, 8], 8), 6);
			assert.strictEqual(bs.findLast([8, 8, 8, 8, 8, 8, 9], 8), 5);
			assert.strictEqual(bs.findLast([8, 8, 8, 8, 8, 9, 10], 8), 4);
			assert.strictEqual(bs.findLast([8, 6, 6, 6, 7, 9, 20], 6), 3);
			assert.strictEqual(bs.findLast([8, 3, 3, 5, 7, 9, 20], 3), 2);
			assert.strictEqual(bs.findLast([8, 2, 8, 8, 8, 8, 40], 2), 1);
			assert.strictEqual(bs.findLast([1, 2, 8, 8, 8, 8, 40], 1), 0);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findLast([4], 1), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findLast([2, 4], 3), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10], 7), -1);
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10], 1), -1);
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10], 15), -1);

			assert.strictEqual(
				bs.findLast([2, 4, 5, 8, 9, 10, 10, 10, 10, 10], 15),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10, 15], 7), -1);
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10, 15], 1), -1);
			assert.strictEqual(bs.findLast([2, 4, 5, 8, 9, 10, 15], 20), -1);

			assert.strictEqual(bs.findLast(
				[2, 4, 5, 5, 5, 5, 5, 8, 9, 10, 15], 20),
				-1
			);
		});
	});
});
