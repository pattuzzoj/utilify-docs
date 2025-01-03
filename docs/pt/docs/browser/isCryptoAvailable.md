# isCryptoAvailable

A função `isCryptoAvailable` verifica se a API Web Crypto está disponível no navegador.

## Assinatura

```typescript
function isCryptoAvailable(): boolean | undefined;
```

### Retorno

| Tipo            | Descrição                                               |
|-----------------|---------------------------------------------------------|
| `boolean`       | `true` se a API Web Crypto estiver disponível, `false` caso contrário. |
| `undefined`     | Se a função for executada no servidor.                 |

## Exemplos

```typescript
console.log(isCryptoAvailable()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

export default function isCryptoAvailable(): boolean | undefined {
  if (isServer()) return;

  return window?.crypto !== undefined;
}
```

```javascript
function isCryptoAvailable() {
  if (isServer()) return;

  return window?.crypto !== undefined;
}
```
:::

## Referências

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)