# chunk

The `chunk` function splits an array into smaller chunks of the specified size. It is useful when you need to divide a large set of data into smaller parts, whether for batch processing or data manipulation.

## Syntax

```typescript
function chunk<T>(arr: T[], size: number): T[][];
```

### Parameters

| Name   | Type         | Description                                                      |
|--------|--------------|------------------------------------------------------------------|
| `arr`  | `T[]`        | The original array to be divided into chunks.                    |
| `size` | `number`     | The size of each chunk. Must be a positive integer.              |

### Return

| Type    | Description                                                                  |
|---------|------------------------------------------------------------------------------|
| `T[][]` | Returns a new array containing smaller chunks of the original array.          |

## Examples

```typescript
const data = [1, 2, 3, 4, 5, 6, 7];

// Splitting the array into chunks of size 3
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Splitting the array into chunks of size 2
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Chunk size greater than array length
console.log(chunk(data, 10)); // [[1, 2, 3, 4, 5, 6, 7]]

// Chunk size equal to zero
console.log(chunk(data, 0)); // []

// Negative chunk size
console.log(chunk(data, -2)); // []
```

## Notes

- If the size is greater than the length of the array, an array containing the original array as a single chunk will be returned.
- If the size is less than or equal to zero, the function will return an empty array.
- It can be used, for example, to split a list of items into pages or process data in batches.

## Source Code

::: code-group
```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

```javascript
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)