# after

The `after` function returns a new array containing all elements after the specified index. It is useful for getting a subarray starting from a specific point.

## Syntax

```typescript
function after<T>(arr: T[], index: number): T[];
```

### Parameters

| Name   | Type         | Description                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr`  | `T[]`        | The original array from which the elements will be extracted.      |
| `index`| `number`     | The index after which the elements will be included in the new array. |

### Return

| Type    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| `T[]`   | A new array containing all the elements after the specified index.            |

## Examples

```typescript
const data = [1, 2, 3, 4, 5];

// Elements after index 2
console.log(after(data, 2)); // [4, 5]

// Elements after index -4 (offset from the end)
console.log(after(data, -4)); // [3, 4, 5]

// Index out of range
console.log(after(data, 10)); // []

// Negative index greater than array length
console.log(after(data, -10)); // [1, 2, 3, 4, 5]
```

## Notes

- If the index is greater than or equal to the array length, an empty array will be returned.
- If the index is negative, it will be treated as an offset from the end of the array.

## Source Code

::: code-group
```typescript
function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}
```

```javascript
function after(arr, index) {
  return arr.slice(index + 1);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)