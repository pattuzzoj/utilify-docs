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

A função `randomUUID` gera um UUID aleatório usando a API Web Crypto.

## Assinatura

```typescript
function randomUUID(): string | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`string | undefined`**: Um UUID aleatório, ou `undefined` se a API Web Crypto não estiver disponível.

## Exemplos

```typescript
console.log(randomUUID()); // '3b241101-e2bb-4255-8caf-4136c566a962'
```

## Notas

- Se a API Web Crypto não estiver disponível, a função registrará um erro e retornará `undefined`.

## Referências

- [crypto.randomUUID() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
