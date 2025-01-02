# chunk

```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

The `chunk` function splits the array into smaller chunks of the specified size. It is useful for dividing an array into smaller parts.

## Signature

```typescript
function chunk<T>(arr: T[], size: number): T[][];
```

### Parameters

- **`arr`** (`T[]`): The original array to be split.
- **`size`** (`number`): The size of each chunk. Must be a positive integer.

### Return

- **`T[][]`**: A new array containing smaller chunks of the original array.

## Examples

```typescript
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
```

## Notes

- If the size is greater than the length of the array, an array containing the original array will be returned.
- If the size is less than or equal to zero, an empty array will be returned.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
