# isOnline

```typescript
import { isServer } from '../environment';

export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}
```

La función `isOnline` verifica si el navegador está en línea.

## Firma

```typescript
function isOnline(): boolean | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`boolean | undefined`**: `true` si el navegador está en línea, `false` de lo contrario, o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(isOnline()); // true o false
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Navigator.onLine - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
