# isTouchDevice

```typescript
import { isServer } from '../environment';

export default function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```

The `isTouchDevice` function checks if the device supports touch events.

## Signature

```typescript
function isTouchDevice(): boolean | undefined;
```

### Parameters

None.

### Return

- **`boolean | undefined`**: `true` if the device supports touch events, `false` otherwise, or `undefined` if executed on the server.

## Examples

```typescript
console.log(isTouchDevice()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Touch events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
