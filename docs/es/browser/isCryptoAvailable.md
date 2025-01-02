# isCryptoAvailable

```typescript
import { getType } from '../types';

export default function isCryptoAvailable(): boolean | undefined {
  return getType(crypto) === 'crypto';
}
```

La función `isCryptoAvailable` verifica si la API Web Crypto está disponible.

## Firma

```typescript
function isCryptoAvailable(): boolean | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`boolean | undefined`**: `true` si la API Web Crypto está disponible, `false` de lo contrario.

## Ejemplos

```typescript
console.log(isCryptoAvailable()); // true o false
```

## Notas

- Esta función no verifica si se ejecuta en el servidor.

## Referencias

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
