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

La función `getTheme` devuelve la preferencia de tema actual del usuario.

## Firma

```typescript
function getTheme(): string | undefined;
```

### Parámetros

Ninguno.

### Retorno

- **`string | undefined`**: La preferencia de tema (`'dark'` o `'light'`), o `undefined` si se ejecuta en el servidor.

## Ejemplos

```typescript
console.log(getTheme()); // 'dark' o 'light' dependiendo de la preferencia del usuario
```

## Notas

- Si se ejecuta en el servidor, la función devolverá `undefined`.

## Referencias

- [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)