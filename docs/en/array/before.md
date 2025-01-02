# before

```typescript
function before<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}
```

The `before` function returns a new array containing all elements before the specified index. It is useful for getting a subarray up to a specific point.

## Signature

```typescript
function before<T>(arr: T[], index: number): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array from which elements will be extracted.
- **`index`** (`number`): The index before which elements will be included in the new array. Must be an integer.

### Return

- **`T[]`**: A new array containing all elements before the specified index. If the index is less than or equal to zero, an empty array will be returned.

## Examples

```typescript
console.log(before([1, 2, 3, 4, 5], 2)); // [1, 2]
console.log(before([1, 2, 3, 4, 5], 0)); // []
```

## Notes

- If the index is less than or equal to zero, an empty array will be returned.
- If the index is negative, it will be treated as zero.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
