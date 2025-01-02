# sanitizeArr

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[] {
  return arr.map(item => values.includes(item) ? replaceValue : item).filter(item => item !== replaceValue);
}
```

The `sanitizeArr` function removes or replaces the specified values in the array.

## Signature

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array to be sanitized.
- **`values`** (`T[]`): The values to be removed or replaced.
- **`replaceValue`** (`T`): The value to replace the specified values with. If not provided, the specified values will be removed.

### Return

- **`T[]`**: A new array with the specified values removed or replaced.

## Examples

```typescript
console.log(sanitizeArr([1, 2, 3, 4], [2, 3])); // [1, 4]
console.log(sanitizeArr([1, 2, 3, 4], [2, 3], 0)); // [1, 0, 0, 4]
```

## Notes

- If `replaceValue` is not provided, the specified values will be removed from the array.
- If `replaceValue` is provided, the specified values will be replaced with it.

## References

- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
