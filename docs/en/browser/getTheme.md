# getTheme

```typescript
import { isServer } from '../environment';

export default function getTheme(): string | undefined {
  if (isServer()) return;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
```

The `getTheme` function returns the current theme preference of the user.

## Signature

```typescript
function getTheme(): string | undefined;
```

### Parameters

None.

### Return

- **`string | undefined`**: The theme preference (`'dark'` or `'light'`), or `undefined` if executed on the server.

## Examples

```typescript
console.log(getTheme()); // 'dark' or 'light' depending on user preference
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
