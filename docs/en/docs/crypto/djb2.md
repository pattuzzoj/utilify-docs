# djb2
The `djb2` function implements the DJB2 hash algorithm to compute a hash value from a string.

## Syntax

```typescript
djb2(str: string): string
```

### Parameters

| Parameter | Type   | Description               |
|-----------|--------|---------------------------|
| `str`     | `string` | The string to be hashed. |

### Return

| Type   | Description                                  |
|--------|----------------------------------------------|
| `string` | The hash value generated by the DJB2 function, returned as a string. |

## Examples

### Example 1
```typescript
const result = djb2("Hello, World!");
console.log(result); // The DJB2 hash value for "Hello, World!"
```

### Example 2
```typescript
const hashValue = djb2("Utilify");
console.log(hashValue); // Hash value for "Utilify"
```

## Notes
- The function uses the DJB2 algorithm, which is efficient and widely used for string hashing.
- The returned hash value is a string representation of a non-negative number, derived by using an unsigned right shift (`>>>`), ensuring the value is treated as a non-negative number.

## Dependencies
None.

## Source Code
::: code-group

```typescript
export default function djb2(str: string): string {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```

```javascript
function djb2(str) {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```
:::

## References
- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)