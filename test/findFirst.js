"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirst', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(0, bs.findFirst([4], 4));
		});

		it('when array size is 2', () => {
			assert.strictEqual(0, bs.findFirst([2, 4], 2));
			assert.strictEqual(1, bs.findFirst([2, 4], 4));
			assert.strictEqual(0, bs.findFirst([2, 2], 2));
		});

		it('when array size is 3', () => {
			assert.strictEqual(0, bs.findFirst([2, 4, 5], 2));
			assert.strictEqual(1, bs.findFirst([2, 4, 5], 4));
			assert.strictEqual(2, bs.findFirst([2, 4, 5], 5));
			assert.strictEqual(0, bs.findFirst([2, 2, 2], 2));
		});

		it('in arrays with even number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 11, 12, 13, 13];

			assert.strictEqual(0, bs.findFirst(arr, 2));
			assert.strictEqual(1, bs.findFirst(arr, 4));
			assert.strictEqual(2, bs.findFirst(arr, 5));
			assert.strictEqual(3, bs.findFirst(arr, 8));
			assert.strictEqual(4, bs.findFirst(arr, 9));
			assert.strictEqual(5, bs.findFirst(arr, 10));

			assert.strictEqual(0, bs.findFirst([8, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(1, bs.findFirst([2, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(2, bs.findFirst([2, 4, 8, 8, 8, 8], 8));
			assert.strictEqual(3, bs.findFirst([2, 4, 5, 8, 8, 8], 8));
			assert.strictEqual(4, bs.findFirst([2, 4, 5, 6, 8, 8], 8));
			assert.strictEqual(5, bs.findFirst([2, 4, 5, 6, 7, 8], 8));
		});

		it('in arrays with odd number of items', () => {
			const arr = [2, 4, 5, 7, 7, 7, 7, 8, 9, 10, 20];

			assert.strictEqual(0, bs.findFirst(arr, 2));
			assert.strictEqual(1, bs.findFirst(arr, 4));
			assert.strictEqual(2, bs.findFirst(arr, 5));
			assert.strictEqual(7, bs.findFirst(arr, 8));
			assert.strictEqual(8, bs.findFirst(arr, 9));
			assert.strictEqual(9, bs.findFirst(arr, 10));
			assert.strictEqual(10, bs.findFirst(arr, 20));

			assert.strictEqual(0, bs.findFirst([8, 8, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(1, bs.findFirst([1, 8, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(2, bs.findFirst([1, 2, 8, 8, 8, 8, 8], 8));
			assert.strictEqual(3, bs.findFirst([0, 2, 4, 8, 8, 8, 8], 8));
			assert.strictEqual(4, bs.findFirst([0, 2, 4, 5, 8, 8, 8], 8));
			assert.strictEqual(5, bs.findFirst([1, 2, 4, 5, 6, 8, 8], 8));
			assert.strictEqual(6, bs.findFirst([0, 2, 4, 5, 6, 7, 8], 8));
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(-1, bs.findFirst([4], 1));
		});

		it('when array size is 2', () => {
			assert.strictEqual(-1, bs.findFirst([2, 4], 3));
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(-1, bs.findFirst([2, 4, 5, 8, 9, 10], 7));
			assert.strictEqual(-1, bs.findFirst([2, 4, 5, 8, 9, 10], 1));
			assert.strictEqual(-1, bs.findFirst([2, 4, 5, 8, 9, 10], 15));

			assert.strictEqual(
				-1,
				bs.findFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(-1, bs.findFirst([2, 4, 5, 8, 9, 10, 15], 7));
			assert.strictEqual(-1, bs.findFirst([2, 4, 5, 8, 9, 10, 15], 1));

			assert.strictEqual(
				-1,
				bs.findFirst([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 15], 20)
			);
		});
	});
});
