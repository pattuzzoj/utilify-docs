# isFullscreenEnabled

```typescript
import { isServer } from '../environment';

export default function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```

La función `isFullscreenEnabled` verifica si el modo de pantalla completa está habilitado.

## Firma

```typescript
function isFullscreenEnabled(): boolean | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`boolean | undefined`**: `true` si el modo de pantalla completa está habilitado, `false` de lo contrario, o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(isFullscreenEnabled()); // true o false
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Document.fullscreenEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled)
