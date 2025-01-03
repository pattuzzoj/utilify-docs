# isWebWorker

```typescript
import { getType } from "../types";

function isWebWorker(): boolean {
  return getType(self) === "dedicatedworkerglobalscope" || getType(self) === "sharedworkerglobalscope" || getType(self) === "serviceworkerglobalscope";
}
```

Verifica se o código está sendo executado dentro de um **Web Worker**, que pode ser um **Dedicated Worker**, **Shared Worker** ou **Service Worker**. Retorna `true` se estiver dentro de qualquer um desses tipos de workers, ou `false` caso contrário.

## Assinatura

```typescript
function isWebWorker(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado dentro de um Web Worker (Dedicated, Shared ou Service Worker).
- **`false`**: Se o código não estiver em nenhum tipo de Web Worker, retorna `false`.

## Exemplos

```typescript
console.log(isWebWorker()); // true se executado dentro de um Web Worker
```

## Notas

- A função utiliza a utilitária `getType` para verificar o tipo de `self` e determinar se o código está sendo executado em um Web Worker.
- Web Workers são usados para executar scripts em threads separadas, permitindo que o navegador não bloqueie a execução da interface do usuário enquanto realiza tarefas pesadas.

## Referências

- [DedicatedWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope)
- [SharedWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)
- [ServiceWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope)
- [self - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/self)