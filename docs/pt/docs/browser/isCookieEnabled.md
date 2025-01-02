# isCookieEnabled

```typescript
import { isServer } from '../environment';

export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}
```

A função `isCookieEnabled` verifica se os cookies estão habilitados no navegador.

## Assinatura

```typescript
function isCookieEnabled(): boolean | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`boolean | undefined`**: `true` se os cookies estiverem habilitados, `false` caso contrário, ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(isCookieEnabled()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Navigator.cookieEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)
