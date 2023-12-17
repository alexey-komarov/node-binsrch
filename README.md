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

### `contains(arr, cmp)`
- Finds if `arr` contains the target element.
- The method returns true as soon as the value is found.
  This can improve performance in scenarios where the exact index is not needed.

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

bs.contains([1, 2, 3, 3, 4], 3); // returns true
bs.contains([1, 2, 3, 3, 5], 4); // returns false
```

## Testing

Besides smoke unit tests which test the most basic cases, there are two
additonal extended tests which are not run by default.

## Testing

In addition to basic smoke unit tests, which cover the most fundamental cases,
there are two additional extended tests that are not run by default:

1. **Random Tests**:
   This test runs for 1,000,000 iterations. Each iteration uses a random array
   with a length of up to 2000 characters. A random search value is chosen,
   and the result is compared with the value found using linear search.
   See `random_test` directory.

2. **Long Array Test**:
   This test is conducted on a 4GB `Uint8Array` filled with numbers ranging
   from 0 to 255. See `long_array_test` directory.

3. **Efficiency Test for Each Case**:
   In addition to the tests mentioned above, each test includes an additional
   check. This check ensures that the number of iterations does not exceed
   `log2(length_of_array)`..

## Compatibility with Older Node.js Versions

While the `binsrch` module itself is compatible with Node.js versions starting
from v4, the version of Mocha specified in `devDependencies` for running tests
requires Node.js v12 or newer. 

If you need to run tests on a Node.js version older than v12, please change the
Mocha version in `devDependencies` to `"mocha": "=3.0.2"`.
