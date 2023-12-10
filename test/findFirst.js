"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirst', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirst([4], 4), 0);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findFirst([2, 4], 2), 0);
			assert.strictEqual(bs.findFirst([2, 4], 4), 1);
			assert.strictEqual(bs.findFirst([2, 2], 2), 0);
		});

		it('when array size is 3', () => {
			assert.strictEqual(bs.findFirst([2, 4, 5], 2), 0);
			assert.strictEqual(bs.findFirst([2, 4, 5], 4), 1);
			assert.strictEqual(bs.findFirst([2, 4, 5], 5), 2);
			assert.strictEqual(bs.findFirst([2, 2, 2], 2), 0);
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 13];

			assert.strictEqual(bs.findFirst(arr, 2), 0);
			assert.strictEqual(bs.findFirst(arr, 4), 1);
			assert.strictEqual(bs.findFirst(arr, 5), 2);
			assert.strictEqual(bs.findFirst(arr, 8), 3);
			assert.strictEqual(bs.findFirst(arr, 9), 4);
			assert.strictEqual(bs.findFirst(arr, 10), 5);

			assert.strictEqual(bs.findFirst([8, 8, 8, 8, 8, 8], 8), 0);
			assert.strictEqual(bs.findFirst([2, 8, 8, 8, 8, 8], 8), 1);
			assert.strictEqual(bs.findFirst([2, 4, 8, 8, 8, 8], 8), 2);
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 8, 8], 8), 3);
			assert.strictEqual(bs.findFirst([2, 4, 5, 6, 8, 8], 8), 4);
			assert.strictEqual(bs.findFirst([2, 4, 5, 6, 7, 8], 8), 5);
		});

		it('in arrays with odd number of items', () => {
			const arr = [2, 4, 5, 7, 7, 7, 7, 8, 9, 10, 20];

			assert.strictEqual(bs.findFirst(arr, 2), 0);
			assert.strictEqual(bs.findFirst(arr, 4), 1);
			assert.strictEqual(bs.findFirst(arr, 5), 2);
			assert.strictEqual(bs.findFirst(arr, 8), 7);
			assert.strictEqual(bs.findFirst(arr, 9), 8);
			assert.strictEqual(bs.findFirst(arr, 10), 9);
			assert.strictEqual(bs.findFirst(arr, 20), 10);

			assert.strictEqual(bs.findFirst([8, 8, 8, 8, 8, 8, 8], 8), 0);
			assert.strictEqual(bs.findFirst([1, 8, 8, 8, 8, 8, 8], 8), 1);
			assert.strictEqual(bs.findFirst([1, 2, 8, 8, 8, 8, 8], 8), 2);
			assert.strictEqual(bs.findFirst([0, 2, 4, 8, 8, 8, 8], 8), 3);
			assert.strictEqual(bs.findFirst([0, 2, 4, 5, 8, 8, 8], 8), 4);
			assert.strictEqual(bs.findFirst([1, 2, 4, 5, 6, 8, 8], 8), 5);
			assert.strictEqual(bs.findFirst([0, 2, 4, 5, 6, 7, 8], 8), 6);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirst([4], 1), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findFirst([2, 4], 3), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 9, 10], 7), -1);
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 9, 10], 1), -1);
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 9, 10], 15), -1);

			assert.strictEqual(
				bs.findFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 9, 10, 15], 7), -1);
			assert.strictEqual(bs.findFirst([2, 4, 5, 8, 9, 10, 15], 1), -1);

			assert.strictEqual(bs.findFirst(
				[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 15], 20),
				-1
			);
		});
	});
});
