# after

```typescript
function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}
```

The `after` function returns a new array containing all elements after the specified index. It is useful for getting a subarray from a specific point.

## Signature

```typescript
function after<T>(arr: T[], index: number): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array from which elements will be extracted.
- **`index`** (`number`): The index after which elements will be included in the new array. Must be an integer.

### Return

- **`T[]`**: A new array containing all elements after the specified index. If the index is greater than or equal to the length of the array, an empty array will be returned.

## Examples

```typescript
console.log(after([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(after([1, 2, 3, 4, 5], -4)); // [3, 4, 5]
```

## Notes

- If the index is greater than or equal to the length of the array, an empty array will be returned.
- If the index is negative, it will be treated as an offset from the end of the array.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
