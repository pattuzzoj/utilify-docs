# before

The `before` function returns a new array containing all elements before the specified index. It is useful for extracting a subarray up to a specific point.

## Syntax

```typescript
function before<T>(arr: T[], index: number): T[];
```

### Parameters

| Name   | Type         | Description                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr`  | `T[]`        | The original array from which the elements will be extracted.      |
| `index`| `number`     | The index before which the elements will be included in the new array. |

### Return

| Type    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| `T[]`   | A new array containing all the elements before the specified index.           |

## Examples

```typescript
const data = [1, 2, 3, 4, 5];

// Elements before index 2
console.log(before(data, 2)); // [1, 2]

// Elements before index 0
console.log(before(data, 0)); // []

// Index out of range
console.log(before(data, 10)); // [1, 2, 3, 4, 5]

// Negative index
console.log(before(data, -1)); // []
```

## Notes

- If the index is less than or equal to zero, an empty array will be returned.
- If the index is negative, it will be treated as zero.

## Source Code

::: code-group
```typescript
function before<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}
```

```javascript
function before(arr, index) {
  return arr.slice(0, index);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)