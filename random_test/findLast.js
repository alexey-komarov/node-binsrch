"use strict"

const lib = require('./lib.js');

describe('findLast', function() {
	this.timeout(10 * 60 * 1000);

	it('random test', () => {
		lib.testMethod('findLast');
	});
});
