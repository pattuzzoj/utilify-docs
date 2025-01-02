# difference

```typescript
function difference<T>(array: T[], values: T[]): T[] {
  return array.filter(x => !values.includes(x));
}
```

The `difference` function returns a new array containing elements that are present in the first array but not in the second array.

## Signature

```typescript
function difference<T>(array: T[], values: T[]): T[];
```

### Parameters

- **`array`** (`T[]`): The original array.
- **`values`** (`T[]`): The array of values to exclude from the original array.

### Return

- **`T[]`**: A new array containing elements that are present in the first array but not in the second array.

## Examples

```typescript
console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
console.log(difference([1, 2, 3], [1, 2, 3])); // []
```

## Notes

- The function uses `Array.prototype.filter` and `Array.prototype.includes` to determine the difference.

## References

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
