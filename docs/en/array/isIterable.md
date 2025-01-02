# isIterable

```typescript
function isIterable(obj: any): boolean {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```

The `isIterable` function checks if the object is iterable.

## Signature

```typescript
function isIterable(obj: any): boolean;
```

### Parameters

- **`obj`** (`any`): The object to check.

### Return

- **`boolean`**: `true` if the object is iterable, otherwise `false`.

## Examples

```typescript
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable(123)); // false
```

## Notes

- The function checks if the object has the `Symbol.iterator` property.

## References

- [Symbol.iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
