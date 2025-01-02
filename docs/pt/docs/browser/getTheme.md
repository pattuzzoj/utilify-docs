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

A função `getTheme` retorna a preferência de tema atual do usuário.

## Assinatura

```typescript
function getTheme(): string | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`string | undefined`**: A preferência de tema (`'dark'` ou `'light'`), ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(getTheme()); // 'dark' ou 'light' dependendo da preferência do usuário
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
