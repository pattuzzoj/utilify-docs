# first

The `first` function returns a new array containing the first `n` elements of the original array. If `n` is not provided, it returns the first element.

## Syntax

```typescript
function first<T>(array: T[], n?: number): T[];
```

### Parameters

| Name   | Type           | Description                                                                 |
|--------|----------------|-----------------------------------------------------------------------------|
| `array`| `T[]`          | The original array.                                                          |
| `n`    | `number` (optional) | The number of elements to be returned from the beginning of the array. If not provided, it returns the first element. |

### Return

| Type   | Description                                                                         |
|--------|-------------------------------------------------------------------------------------|
| `T[]`  | A new array containing the first `n` elements of the original array. If `n` is not provided, it returns the first element. |

## Examples

```typescript
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4]));    // [1]
```

## Notes

- If `n` is greater than the length of the array, the entire array will be returned.
- If `n` is not provided, the function returns the first element of the array.

## Source Code

::: code-group
```typescript
export default function first<T>(arr: T[], index: number = 1): T[] {
  return arr.slice(0, index);
}
```

```javascript
export default function first(arr, index = 1) {
  return arr.slice(0, index);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)