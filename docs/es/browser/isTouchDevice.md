# isTouchDevice

```typescript
import { isServer } from '../environment';

export default function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```

La función `isTouchDevice` verifica si el dispositivo admite eventos táctiles.

## Firma

```typescript
function isTouchDevice(): boolean | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`boolean | undefined`**: `true` si el dispositivo admite eventos táctiles, `false` de lo contrario, o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(isTouchDevice()); // true o false
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Touch events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
