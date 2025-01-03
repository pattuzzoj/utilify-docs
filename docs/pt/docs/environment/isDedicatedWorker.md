# isDedicatedWorker

```typescript
function isDedicatedWorker(): boolean {
  return getType(self) === "dedicatedworkerglobalscope";
}
```

Verifica se o código está sendo executado em um **Dedicated Worker**, retornando `true` se estiver e `false` caso contrário. A função faz essa verificação usando a função `getType` para identificar o tipo do objeto global `self`, que representa o escopo global do worker.

## Assinatura

```typescript
function isDedicatedWorker(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado em um **Dedicated Worker**, e `false` caso contrário.

## Exemplos

```typescript
console.log(isDedicatedWorker()); // true se executado dentro de um Dedicated Worker, false caso contrário
```

## Notas

- A função utiliza a função `getType` para identificar o tipo do escopo global. No caso de um **Dedicated Worker**, o tipo será `dedicatedworkerglobalscope`.
- A função não detecta **Service Workers** ou **Shared Workers**.

## Referências

- [DedicatedWorkerGlobalScope - MDN](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope)