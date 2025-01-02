# shuffle

```typescript
function shuffle<T>(arr: T[]): T[] {
  const shuffled = Array.from(arr);

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}
```

The `shuffle` function returns a new array with the elements shuffled in random order. It is useful for randomizing the order of elements in an array.

## Signature

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parameters

- **`arr`** (`T[]`): The original array to be shuffled.

### Return

- **`T[]`**: A new array with the elements shuffled in random order.

## Examples

```typescript
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 4, 5, 2] (example output)
```

## Notes

- The original array is not modified.
- The order of elements in the returned array is random.

## References

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
