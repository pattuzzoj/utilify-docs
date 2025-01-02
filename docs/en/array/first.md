# first

```typescript
function first<T>(array: T[], n?: number): T[] {
  return n ? array.slice(0, n) : array.slice(0, 1);
}
```

The `first` function returns a new array containing the first `n` elements of the original array. If `n` is not provided, it returns the first element.

## Signature

```typescript
function first<T>(array: T[], n?: number): T[];
```

### Parameters

- **`array`** (`T[]`): The original array.
- **`n`** (`number`, optional): The number of elements to return from the start of the array.

### Return

- **`T[]`**: A new array containing the first `n` elements of the original array. If `n` is not provided, it returns the first element.

## Examples

```typescript
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4])); // [1]
```

## Notes

- If `n` is greater than the length of the array, the entire array is returned.
- If `n` is not provided, the function returns the first element of the array.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
