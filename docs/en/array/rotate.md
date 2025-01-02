# rotate

```typescript
function rotate<T>(arr: T[], n: number): T[] {
  const len = arr.length;
  const shift = ((n % len) + len) % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
```

The `rotate` function rotates the elements of the array `n` positions. Positive values of `n` rotate to the right, while negative values rotate to the left.

## Signature

```typescript
function rotate<T>(arr: T[], n: number): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array to be rotated.
- **`n`** (`number`): The number of positions to rotate the array. Positive values rotate to the right, negative values to the left.

### Return

- **`T[]`**: A new array with the elements rotated `n` positions.

## Examples

```typescript
console.log(rotate([1, 2, 3, 4], 1)); // [2, 3, 4, 1]
console.log(rotate([1, 2, 3, 4], -1)); // [4, 1, 2, 3]
```

## Notes

- The rotation is performed in a circular manner.
- If `n` is zero, the original array is returned.

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
