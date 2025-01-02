# isBrowser

```typescript
import { getType } from "../types";

export default function isBrowser(): boolean {
  return getType(window) === "window";
}
```

Verifica se o código está sendo executado em um ambiente de navegador, retornando `true` se o ambiente for um navegador, e `false` caso contrário. A função utiliza a função `getType` para determinar o tipo do objeto `window`, que é exclusivo do navegador.

## Assinatura

```typescript
function isBrowser(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado no navegador, e `false` caso contrário.

## Exemplos

```typescript
console.log(isBrowser()); // true se executado no navegador, false caso contrário
```

## Notas

- A função depende da verificação do tipo do objeto `window`, que é característico de ambientes de navegador.
- Não será válida em ambientes como o Node.js, onde o objeto `window` não está presente.

## Referências

- [Window - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)