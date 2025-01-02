# last

```typescript
function last<T>(arr: T[], n?: number): T[] {
  if (n === undefined) return [arr[arr.length - 1]];
  return arr.slice(-n);
}
```

The `last` function returns a new array containing the last `n` elements of the original array. If `n` is not provided, it returns the last element as an array.

## Signature

```typescript
function last<T>(arr: T[], n?: number): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array from which elements will be extracted.
- **`n`** (`number`): The number of elements to include in the new array. If not provided, defaults to 1.

### Return

- **`T[]`**: A new array containing the last `n` elements. If `n` is greater than the length of the array, the entire array will be returned.

## Examples

```typescript
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5])); // [5]
```

## Notes

- If `n` is greater than the length of the array, the entire array will be returned.
- If `n` is not provided, the function returns the last element as an array.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
