## [1.0.3] - 2023-12-17

### Fixed
- Replaced '>>' operator with '>>>' to avoid overflow issues.
- Added 'contains' method which returns true as soon as the value is found.
  This can improve performance in scenarios where the exact index is not needed.
- Added tests for arrays up to the maximum size supported (4GB).
- Reversed order of arguments in assert.strictEqual in tests to show errors
  correctly.

## [1.0.2] - 2023-12-10

First version
