# unique

```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

The `unique` function returns a new array containing only the unique elements from the original array. It is useful for removing duplicates from an array.

## Signature

```typescript
function unique<T>(arr: T[]): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array.

### Return

- **`T[]`**: A new array containing only the unique elements from the original array.

## Examples

```typescript
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## Notes

- The order of elements in the returned array is determined by their first appearance in the input array.
