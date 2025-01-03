# unique

The `unique` function returns a new array containing only the unique elements from the original array. It is useful for removing duplicates from an array.

## Syntax

```typescript
function unique<T>(arr: T[]): T[];
```

### Parameters

| Name  | Type   | Description           |
|-------|--------|-----------------------|
| `arr` | `T[]`  | The original array.   |

### Return

| Type   | Description                                           |
|--------|-------------------------------------------------------|
| `T[]`  | A new array containing only the unique elements.      |

## Examples

```typescript
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## Notes

- The order of elements in the returned array is determined by their first appearance in the input array.

## Source Code

::: code-group
```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

```javascript
function unique(arr) {
  return [...new Set(arr)];
}
```
:::

## References

- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)