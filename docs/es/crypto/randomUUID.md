# randomUUID

```typescript
import { isCryptoAvailable } from "../browser";

export default function randomUUID(): string | undefined {
  if (!isCryptoAvailable()) {
    console.error("Crypto API is not available");
    return;
  }

  return crypto.randomUUID();
}
```

La función `randomUUID` genera un UUID aleatorio utilizando la API Web Crypto.

## Firma

```typescript
function randomUUID(): string | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`string | undefined`**: Un UUID aleatorio, o `undefined` si la API Web Crypto no está disponible.

## Ejemplos

```typescript
console.log(randomUUID()); // '3b241101-e2bb-4255-8caf-4136c566a962'
```

## Notas

- Si la API Web Crypto no está disponible, la función registrará un error y devolverá `undefined`.

## Referencias

- [crypto.randomUUID() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
