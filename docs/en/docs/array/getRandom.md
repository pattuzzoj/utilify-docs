# getRandom

The `getRandom` function returns a random element from the array.

## Syntax

```typescript
function getRandom<T>(arr: T[]): T;
```

### Parameters

| Name  | Type     | Description                                                      |
|-------|----------|------------------------------------------------------------------|
| `arr` | `T[]`    | The array from which a random element will be selected.          |

### Return

| Type   | Description                                                      |
|--------|------------------------------------------------------------------|
| `T`    | A random element from the array.                                 |

## Examples

```typescript
console.log(getRandom([1, 2, 3, 4, 5])); // Can return any element from the array
```

## Notes

- The function uses `Math.random` and `Math.floor` to select a random index from the array.

## Source Code

::: code-group
```typescript
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

```javascript
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```
:::

## References

- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)