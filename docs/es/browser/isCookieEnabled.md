# isCookieEnabled

```typescript
import { isServer } from '../environment';

export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}
```

La función `isCookieEnabled` verifica si las cookies están habilitadas en el navegador.

## Firma

```typescript
function isCookieEnabled(): boolean | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`boolean | undefined`**: `true` si las cookies están habilitadas, `false` de lo contrario, o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(isCookieEnabled()); // true o false
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Navigator.cookieEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)
