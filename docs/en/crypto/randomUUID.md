# randomUUID

```typescript
import { isCryptoAvailable } from "../browser";

export default function randomUUID(): string | undefined {
  if (!isCryptoAvailable()) {
    console.error("Crypto API is not available");
    return;
  }

  return crypto.randomUUID();
}
```

The `randomUUID` function generates a random UUID using the Web Crypto API.

## Signature

```typescript
function randomUUID(): string | undefined;
```

### Parameters

None.

### Return

- **`string | undefined`**: A random UUID string, or `undefined` if the Web Crypto API is not available.

## Examples

```typescript
console.log(randomUUID()); // '3b241101-e2bb-4255-8caf-4136c566a962'
```

## Notes

- If the Web Crypto API is not available, the function will log an error and return `undefined`.

## References

- [crypto.randomUUID() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
