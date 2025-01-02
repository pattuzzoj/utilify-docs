# getRandom

```typescript
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

The `getRandom` function returns a random element from the array.

## Signature

```typescript
function getRandom<T>(arr: T[]): T;
```

### Parameters

- **`arr`** (`T[]`): The array from which a random element will be selected.

### Return

- **`T`**: A random element from the array.

## Examples

```typescript
console.log(getRandom([1, 2, 3, 4, 5])); // Can return any element from the array
```

## Notes

- The function uses `Math.random` and `Math.floor` to select a random index from the array.

## References

- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
