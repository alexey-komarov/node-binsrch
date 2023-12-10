## Overview

This Node.js module provides a set of utility functions for performing various
types of searches on a sorted array. It allows users to search for elements
based on different criteria using a custom comparator function or a specified
target value.

Note: The input array must be sorted in ascending order.

## Functions

### `createComparator(x)`
- Creates a comparator function for a given target value `x`.
- The returned function compares its argument `a` with `x` and returns:
  - `-1` if `a` is less than `x`
  - `0` if `a` is equal to `x`
  - `1` if `a` is greater than `x`

### `findFirst(arr, cmp)`
- Finds the first element in `arr` that equals the target.
- `cmp` can be a comparator function or a target value.
- Returns the index of the found element, or `-1` if not found.

### `findFirstGreater(arr, cmp)`
- Finds the first element in `arr` that is greater than the target.
- Returns the index of the found element, or `-1` if not found.

### `findFirstGreaterOrEqual(arr, cmp)`
- Finds the first element in `arr` that is greater than or equal to the target.
- Returns the index of the found element, or `-1` if not found.

### `findLast(arr, cmp)`
- Finds the last element in `arr` that equals the target.
- Returns the index of the found element, or `-1` if not found.

### `findLastLess(arr, cmp)`
- Finds the last element in `arr` that is less than the target.
- Returns the index of the found element, or `-1` if not found.

### `findLastLessOrEqual(arr, cmp)`
- Finds the last element in `arr` that is less than or equal to the target.
- Returns the index of the found element, or `-1` if not found.

## Usage

```js
const bs = require('binsrch');

bs.findFirst([], 3); // returns -1
bs.findFirst([1, 2, 3], 4); // returns -1

bs.findFirst([1, 2, 3, 4, 5], 3);  // returns 2
bs.findFirstGreater([1, 2, 4, 4, 5], 3);  // returns 2
bs.findFirstGreaterOrEqual([1, 2, 4, 4, 5], 4); // returns 2

bs.findLast([1, 2, 3, 4, 5], 3); // returns 2
bs.findLastLess([1, 2, 4, 4, 5], 3); // returns 1
bs.findLastLessOrEqual([1, 2, 4, 4, 5], 4); // returns 3

bs.findFirst([
	{f: 1},
	{f: 2},
	{f: 3},
	{f: 4},
	{f: 5}
], a => {
	if (a.f < 3) {
		return -1;
	}

	if (a.f > 3) {
		return 1;
	}

	return 0;
}); // returns 2

```

## Compatibility with Older Node.js Versions

While the `binsrch` module itself is compatible with Node.js versions starting
from v4, the version of Mocha specified in `devDependencies` for running tests
requires Node.js v12 or newer. 

If you need to run tests on a Node.js version older than v12, please change the
Mocha version in `devDependencies` to `"mocha": "=3.0.2"`.
