# isIterable

The `isIterable` function checks if an object is iterable.

## Syntax

```typescript
function isIterable(obj: any): boolean;
```

### Parameters

| Name  | Type    | Description                                      |
|-------|---------|--------------------------------------------------|
| `obj` | `any`   | The object to be checked.                        |

### Return

| Type    | Description                                                       |
|---------|-------------------------------------------------------------------|
| `boolean` | `true` if the object is iterable, otherwise `false`.              |

## Examples

```typescript
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable(123));       // false
```

## Notes

- The function checks if the object has the `Symbol.iterator` property.

## Source Code

::: code-group
```typescript
function isIterable(obj: any): boolean {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```

```javascript
function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```
:::

## References

- [Symbol.iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)