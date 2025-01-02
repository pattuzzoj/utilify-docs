# flattenArr

```typescript
function flattenArr<T>(array: any[], depth: number = 1): any[] {
  return array.flat(depth);
}
```

The `flattenArr` function flattens an array up to the specified depth.

## Signature

```typescript
function flattenArr<T>(array: any[], depth?: number): any[];
```

### Parameters

- **`array`** (`any[]`): The array to flatten.
- **`depth`** (`number`, optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

### Return

- **`any[]`**: A new array with the sub-array elements concatenated into it.

## Examples

```typescript
console.log(flattenArr([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenArr([1, [2, [3, [4]]]])); // [1, 2, 3, [4]]
```

## Notes

- The function uses `Array.prototype.flat` to flatten the array.

## References

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
