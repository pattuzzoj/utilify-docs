# isCryptoAvailable

```typescript
import { getType } from '../types';

export default function isCryptoAvailable(): boolean | undefined {
  return getType(crypto) === 'crypto';
}
```

A função `isCryptoAvailable` verifica se a API Web Crypto está disponível.

## Assinatura

```typescript
function isCryptoAvailable(): boolean | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`boolean | undefined`**: `true` se a API Web Crypto estiver disponível, `false` caso contrário.

## Exemplos

```typescript
console.log(isCryptoAvailable()); // true ou false
```

## Notas

- Esta função não verifica se é executada no servidor.

## Referências

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
