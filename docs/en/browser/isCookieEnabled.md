# isCookieEnabled

```typescript
import { isServer } from '../environment';

export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}
```

The `isCookieEnabled` function checks if cookies are enabled in the browser.

## Signature

```typescript
function isCookieEnabled(): boolean | undefined;
```

### Parameters

None.

### Return

- **`boolean | undefined`**: `true` if cookies are enabled, `false` otherwise, or `undefined` if executed on the server.

## Examples

```typescript
console.log(isCookieEnabled()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Navigator.cookieEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)
