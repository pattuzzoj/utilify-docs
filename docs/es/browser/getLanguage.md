# getLanguage

```typescript
import { isServer } from '../environment';

export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}
```

La función `getLanguage` devuelve el código de idioma del navegador.

## Firma

```typescript
function getLanguage(): string | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`string | undefined`**: El código de idioma del navegador, o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(getLanguage()); // 'en' (si el idioma del navegador es inglés)
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Navigator.language - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)
