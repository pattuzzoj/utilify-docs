# isSharedWorker

```typescript
import { getType } from "../types";

function isSharedWorker(): boolean {
  return getType(self) === "sharedworkerglobalscope";
}
```

Verifica se o código está sendo executado dentro de um **Shared Worker**. Retorna `true` se o ambiente for um Shared Worker, ou `false` caso contrário.

## Assinatura

```typescript
function isSharedWorker(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado dentro de um Shared Worker.
- **`false`**: Se o código não estiver em um Shared Worker, retorna `false`.

## Exemplos

```typescript
console.log(isSharedWorker()); // true se executado dentro de um Shared Worker
```

## Notas

- A função usa a utilitária `getType` para verificar o tipo de `self` e determinar se o código está sendo executado em um Shared Worker.
- Shared Workers são úteis para scripts que podem ser compartilhados entre várias páginas ou abas no navegador.

## Referências

- [SharedWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)
- [self - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/self)