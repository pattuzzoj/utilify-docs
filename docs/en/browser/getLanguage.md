# getLanguage

```typescript
import { isServer } from '../environment';

export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}
```

The `getLanguage` function returns the language code of the browser.

## Signature

```typescript
function getLanguage(): string | undefined;
```

### Parameters

None.

### Return

- **`string | undefined`**: The language code of the browser, or `undefined` if executed on the server.

## Examples

```typescript
console.log(getLanguage()); // 'en' (if the browser language is English)
```

## Notes

- If executed on the server, the function will return `undefined`.

## References

- [Navigator.language - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)
