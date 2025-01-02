# isOnline

```typescript
import { isServer } from '../environment';

export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}
```

The `isOnline` function checks if the browser is online.

## Signature

```typescript
function isOnline(): boolean | undefined;
```

### Parameters

None.

### Return

- **`boolean | undefined`**: `true` if the browser is online, `false` otherwise, or `undefined` if executed on the server.

## Examples

```typescript
console.log(isOnline()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Navigator.onLine - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
