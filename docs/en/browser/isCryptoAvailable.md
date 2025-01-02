# isCryptoAvailable

```typescript
import { getType } from '../types';

export default function isCryptoAvailable(): boolean | undefined {
  return getType(crypto) === 'crypto';
}
```

The `isCryptoAvailable` function checks if the Web Crypto API is available.

## Signature

```typescript
function isCryptoAvailable(): boolean | undefined;
```

### Parameters

None.

### Return

- **`boolean | undefined`**: `true` if the Web Crypto API is available, `false` otherwise.

## Examples

```typescript
console.log(isCryptoAvailable()); // true or false
```

## Notes

- This function does not check if executed on the server.

## References

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
