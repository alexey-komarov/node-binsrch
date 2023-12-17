"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('empty array', () => {
	it('should return -1 if array is empty', () => {
		assert.strictEqual(-1, bs.findFirst([], 0));
		assert.strictEqual(-1, bs.findFirstGreater([], 0));
		assert.strictEqual(-1, bs.findFirstGreaterOrEqual([], 0));
		assert.strictEqual(-1, bs.findLast([], 0));
		assert.strictEqual(-1, bs.findLastLess([], 0));
		assert.strictEqual(-1, bs.findLastLessOrEqual([], 0));
		assert.strictEqual(false, bs.contains([], 1));
	});
});
