# shuffle

The `shuffle` function returns a new array with the elements shuffled in random order. It is useful for randomizing the order of elements in an array.

## Syntax

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parameters

| Name  | Type   | Description                                      |
|-------|--------|--------------------------------------------------|
| `arr` | `T[]`  | The original array to be shuffled.               |

### Return

| Type   | Description                                      |
|--------|--------------------------------------------------|
| `T[]`  | A new array with the elements shuffled in random order. |

## Examples

```typescript
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 4, 5, 2] (example output)
```

## Notes

- The original array is not modified.
- The order of the elements in the returned array is random.

## Source Code

::: code-group
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
```javascript
function shuffle(arr) {
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
:::

## References

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)