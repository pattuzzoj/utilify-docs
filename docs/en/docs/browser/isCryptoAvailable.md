# isCryptoAvailable

The `isCryptoAvailable` function checks if the Web Crypto API is available in the browser.

## Syntax

```typescript
function isCryptoAvailable(): boolean | undefined;
```

### Return

| Type            | Description                                               |
|-----------------|-----------------------------------------------------------|
| `boolean`       | `true` if the Web Crypto API is available, `false` otherwise. |
| `undefined`     | If the function is executed on the server.                |

## Examples

```typescript
console.log(isCryptoAvailable()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

export default function isCryptoAvailable(): boolean | undefined {
  if (isServer()) return;

  return window?.crypto !== undefined;
}
```

```javascript
function isCryptoAvailable() {
  if (isServer()) return;

  return window?.crypto !== undefined;
}
```
:::

## References

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)