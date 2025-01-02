# defer

```typescript
export default function defer(callback: () => void): void {
  Promise.resolve().then(callback);
}
```

A função `defer` permite agendar a execução de uma função para o próximo ciclo de eventos, ou seja, ela garante que a função será executada de forma assíncrona, após o ciclo de execução atual.

## Assinatura

```typescript
function defer(callback: () => void): void;
```

### Parâmetros

- **`callback`** (`() => void`): A função que será executada no próximo ciclo de eventos.

### Retorno

- **`void`**: A função não retorna nenhum valor.

## Exemplos

```typescript
console.log("Antes");

defer(() => {
  console.log("Executado depois do ciclo atual");
});

console.log("Depois");
```

**Saída esperada:**
```
Antes
Depois
Executado depois do ciclo atual
```

## Notas

- A função `defer` é útil quando você deseja garantir que uma função seja executada após o ciclo de execução atual, permitindo que outras operações ou eventos sejam processados primeiro.
- Ela utiliza a resolução de uma promessa para garantir que a execução seja adiada.

## Referências

- [Promise.resolve() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)