# isOnline

```typescript
import { isServer } from '../environment';

export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}
```

A função `isOnline` verifica se o navegador está online.

## Assinatura

```typescript
function isOnline(): boolean | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`boolean | undefined`**: `true` se o navegador estiver online, `false` caso contrário, ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(isOnline()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Navigator.onLine - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
