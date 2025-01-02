# isFullscreenEnabled

```typescript
import { isServer } from '../environment';

export default function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```

A função `isFullscreenEnabled` verifica se o modo de tela cheia está habilitado.

## Assinatura

```typescript
function isFullscreenEnabled(): boolean | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`boolean | undefined`**: `true` se o modo de tela cheia estiver habilitado, `false` caso contrário, ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(isFullscreenEnabled()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Document.fullscreenEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled)
