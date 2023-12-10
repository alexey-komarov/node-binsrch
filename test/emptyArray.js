"use strict"

const bs = require('../index.js');
const assert = require('assert');

describe('empty array', () => {
	it('should return -1 if array is empty', () => {
		assert.strictEqual(bs.findFirst([], 0), -1);
		assert.strictEqual(bs.findFirstGreater([], 0), -1);
		assert.strictEqual(bs.findFirstGreaterOrEqual([], 0), -1);
		assert.strictEqual(bs.findLast([], 0), -1);
		assert.strictEqual(bs.findLastLess([], 0), -1);
		assert.strictEqual(bs.findLastLessOrEqual([], 0), -1);
	});
});
