# difference

The `difference` function returns a new array containing elements that are present in the first array but not in the second array.

## Syntax

```typescript
function difference<T>(array: T[], values: T[]): T[];
```

### Parameters

| Name    | Type         | Description                                                        |
|---------|--------------|--------------------------------------------------------------------|
| `array` | `T[]`        | The original array.                                                |
| `values`| `T[]`        | The array of values to be excluded from the original array.        |

### Return

| Type   | Description                                                                 |
|--------|-----------------------------------------------------------------------------|
| `T[]`  | A new array containing elements that are present in the first array but not in the second. |

## Examples

```typescript
const data1 = [1, 2, 3];
const data2 = [2, 3, 4];

// Elements in the first array but not in the second
console.log(difference(data1, data2)); // [1]

const data3 = [1, 2, 3];

// Identical arrays, no elements remaining
console.log(difference(data3, data3)); // []
```

## Notes

- The function uses `Array.prototype.filter` and `Array.prototype.includes` to determine the difference.

## Source Code

::: code-group
```typescript
function difference<T>(array: T[], values: T[]): T[] {
  return array.filter(x => !values.includes(x));
}
```

```javascript
function difference(array, values) {
  return array.filter(x => !values.includes(x));
}
```
:::

## References

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)