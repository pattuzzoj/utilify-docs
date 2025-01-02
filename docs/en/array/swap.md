# swap

```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[] {
  const swapedArr = Array.from(arr);
  [swapedArr[pivot], swapedArr[partner]] = [
    swapedArr[partner],
    swapedArr[pivot],
  ];

  return swapedArr;
}
```

The `swap` function returns a new array with the elements at the specified indices swapped. It is useful for exchanging the positions of two elements in an array.

## Signature

```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array.
- **`pivot`** (`number`): The index of the first element to swap.
- **`partner`** (`number`): The index of the second element to swap.

### Return

- **`T[]`**: A new array with the elements at the specified indices swapped.

## Examples

```typescript
console.log(swap([1, 2, 3, 4], 1, 3)); // [1, 4, 3, 2]
```

## Notes

- The original array is not modified.
- If either index is out of bounds, the function will throw an error.

## References

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
