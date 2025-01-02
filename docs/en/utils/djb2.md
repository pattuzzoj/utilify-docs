# djb2

```typescript
export default function djb2(str: string): string {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```

The `djb2` function generates a hash for a given string using the djb2 algorithm.

## Signature

```typescript
function djb2(str: string): string;
```

### Parameters

- **`str`** (`string`): The string to be hashed.

### Returns

- **`string`**: The generated hash.

## Examples

```typescript
console.log(djb2("hello")); // "2106941444"
```

## Notes

- The function uses the djb2 algorithm to generate the hash.

## References

- [djb2 Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Djb2)
