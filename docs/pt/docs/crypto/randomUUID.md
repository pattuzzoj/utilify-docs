# randomUUID

A função `randomUUID` gera um UUID aleatório utilizando a API Web Crypto.

## Assinatura

```typescript
function randomUUID(): string | undefined;
```

### Retorno

| Tipo                 | Descrição                                                                |
|----------------------|--------------------------------------------------------------------------|
| `string`             | Um UUID aleatório gerado utilizando a API Web Crypto.                    |
| `undefined`          | Caso a API Web Crypto não esteja disponível, retorna `undefined`.       |

## Exemplos

```typescript
console.log(randomUUID()); // '3b241101-e2bb-4255-8caf-4136c566a962'
```

## Notas

- Se a API Web Crypto não estiver disponível, a função registrará um erro no console e retornará `undefined`.
- A função depende da API Web Crypto, sendo necessário um ambiente que a suporte.

## Dependências

- [`isCryptoAvailable`](../browser/isCryptoAvailable.md): A função `isCryptoAvailable` é usada para verificar se a API Web Crypto está disponível no ambiente, garantindo que a função `hash` funcione corretamente.

## Código Fonte

::: code-group
```typescript
import { isCryptoAvailable } from '@utilify/browser';

function randomUUID(): string | undefined {
  if (!isCryptoAvailable()) {
    console.error("Crypto API is not available");
    return;
  }

  return crypto.randomUUID();
}
```

```javascript
function randomUUID() {
  if (!isCryptoAvailable()) {
    console.error("Crypto API is not available");
    return;
  }

  return crypto.randomUUID();
}
```
:::

## Referências

- [crypto.randomUUID() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
- [isCryptoAvailable - GitHub](https://github.com/Utilify/utils/blob/main/packages/browser/src/isCryptoAvailable.ts)