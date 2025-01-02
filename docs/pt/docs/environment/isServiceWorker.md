# isServiceWorker

```typescript
import { getType } from "../types";

export default function isServiceWorker(): boolean {
  return getType(self) === "serviceworkerglobalscope";
}
```

Verifica se o código está sendo executado dentro de um **Service Worker**. Retorna `true` se o ambiente for um Service Worker, ou `false` caso contrário.

## Assinatura

```typescript
function isServiceWorker(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado dentro de um Service Worker.
- **`false`**: Se o código não estiver em um Service Worker, retorna `false`.

## Exemplos

```typescript
console.log(isServiceWorker()); // true se executado dentro de um Service Worker
```

## Notas

- A função usa a utilitária `getType` para verificar o tipo de `self` e determinar se o código está sendo executado em um Service Worker.
- Esta função é útil para distinguir entre ambientes de execução, como Service Worker e outras áreas, como o contexto de uma página web.

## Referências

- [ServiceWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope)
- [self - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/self)