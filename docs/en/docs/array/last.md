# last

The `last` function returns the last `n` elements of the array.

## Syntax

```typescript
function last<T>(arr: T[], n?: number): T[];
```

### Parameters

| Name  | Type     | Description                                                      |
|-------|----------|------------------------------------------------------------------|
| `arr` | `T[]`    | The array from which the elements will be extracted.            |
| `n`   | `number` | The number of elements to be returned from the end of the array. The default value is 1. |

### Return

| Type   | Description                                                      |
|--------|------------------------------------------------------------------|
| `T[]`  | A new array containing the last `n` elements of the array.       |

## Examples

```typescript
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5]));    // [5]
```

## Notes

- If `n` is greater than the length of the array, all the elements of the array will be returned.

## Source Code

::: code-group
```typescript
function last<T>(arr: T[], n: number = 1): T[] {
  return arr.slice(-n);
}
```

```javascript
function last(arr, n = 1) {
  return arr.slice(-n);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)