# isFullscreenEnabled

```typescript
import { isServer } from '../environment';

export default function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```

The `isFullscreenEnabled` function checks if the fullscreen mode is enabled.

## Signature

```typescript
function isFullscreenEnabled(): boolean | undefined;
```

### Parameters

None.

### Return

- **`boolean | undefined`**: `true` if fullscreen mode is enabled, `false` otherwise, or `undefined` if executed on the server.

## Examples

```typescript
console.log(isFullscreenEnabled()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Document.fullscreenEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled)
