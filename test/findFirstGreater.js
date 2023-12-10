"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('findFirstGreater', () => {
	describe('should find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirstGreater([4], 3), 0);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findFirstGreater([2, 4], 1), 0);
			assert.strictEqual(bs.findFirstGreater([2, 4], 2), 1);
			assert.strictEqual(bs.findFirstGreater([2, 2], 1), 0);
		});

		it('when array size is 3', () => {
			assert.strictEqual(bs.findFirstGreater([2, 4, 5], 1), 0);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5], 2), 1);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5], 4), 2);
			assert.strictEqual(bs.findFirstGreater([2, 2, 2], 1), 0);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 1), 0);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 2), 1);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 4), 2);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 7), 3);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 8), 4);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 9, 10], 9), 5);

			assert.strictEqual(
				bs.findFirstGreater([2, 4, 5, 8, 9, 10, 10, 10, 11, 12], 9),
				5
			);

			assert.strictEqual(bs.findFirstGreater([8, 8, 8, 8, 8, 8], 7), 0);
			assert.strictEqual(bs.findFirstGreater([2, 8, 8, 8, 8, 8], 7), 1);
			assert.strictEqual(bs.findFirstGreater([2, 4, 8, 8, 8, 8], 7), 2);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 8, 8, 8], 7), 3);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 6, 8, 8], 7), 4);
			assert.strictEqual(bs.findFirstGreater([2, 4, 5, 6, 7, 8], 7), 5);

			assert.strictEqual(
				bs.findFirstGreater([8, 8, 8, 8, 8, 9, 9, 9, 9, 9], 8),
				5
			);
		});

		it('in arrays with odd number of items', () => {
			const arr = [2, 4, 5, 8, 9, 10, 20, 21, 23, 25, 40];

			assert.strictEqual(bs.findFirstGreater(arr, 1), 0);
			assert.strictEqual(bs.findFirstGreater(arr, 3), 1);
			assert.strictEqual(bs.findFirstGreater(arr, 4), 2);
			assert.strictEqual(bs.findFirstGreater(arr, 7), 3);
			assert.strictEqual(bs.findFirstGreater(arr, 8), 4);
			assert.strictEqual(bs.findFirstGreater(arr, 9), 5);
			assert.strictEqual(bs.findFirstGreater(arr, 19), 6);

			assert.strictEqual(bs.findFirstGreater(
				[8, 8, 8, 8, 8, 8, 8], 7),
				0
			);

			assert.strictEqual(
				bs.findFirstGreater([1, 8, 8, 8, 8, 8, 8], 7),
				1
			);

			assert.strictEqual(
				bs.findFirstGreater([1, 2, 8, 8, 8, 8, 8], 7),
				2
			);

			assert.strictEqual(
				bs.findFirstGreater([0, 2, 4, 8, 8, 8, 8], 7),
				3
			);

			assert.strictEqual(bs.findFirstGreater(
				[0, 2, 4, 5, 8, 8, 8], 7
			), 4);

			assert.strictEqual(bs.findFirstGreater(
				[1, 2, 4, 5, 6, 8, 8], 7
			), 5);

			assert.strictEqual(bs.findFirstGreater(
				[0, 2, 4, 5, 6, 7, 8], 7), 6
			);

			assert.strictEqual(bs.findFirstGreater(
				[0, 2, 4, 5, 6, 7, 8, 8, 8, 9, 9], 7),
			6);
		});
	});

	describe('should not find', () => {
		it('when array size is 1', () => {
			assert.strictEqual(bs.findFirstGreater([4], 5), -1);
		});

		it('when array size is 2', () => {
			assert.strictEqual(bs.findFirstGreater([2, 4], 5), -1);
		});

		it('in arrays with even number of items', () => {
			assert.strictEqual(
				bs.findFirstGreater([1, 1, 1, 1, 2, 4, 5, 8, 9, 10], 11),
				-1
			);
		});

		it('in arrays with odd number of items', () => {
			assert.strictEqual(
				bs.findFirstGreater([2, 3, 3, 3, 3, 4, 5, 8, 9, 10, 15], 20),
				-1
			);
		});
	});
});
