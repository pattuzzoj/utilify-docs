# sleep

```typescript
export default async function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
```

A função `sleep` permite criar uma pausa (delay) na execução do código por um tempo especificado. Isso é útil para retardar a execução de funções assíncronas, como em testes, simulação de tempo de espera ou delays em animações.

## Assinatura

```typescript
function sleep(timeout: number): Promise<void>;
```

### Parâmetros

- **`timeout`** (`number`): O tempo de espera, em milissegundos, que a execução será suspensa antes de continuar.

### Retorno

- **`Promise<void>`**: Retorna uma `Promise` que resolve após o tempo especificado de delay.

## Exemplos

```typescript
console.log("Before sleep");

await sleep(2000); // Pausa por 2 segundos

console.log("After sleep");
```

## Notas

- A função `sleep` é assíncrona, o que significa que ela pode ser usada com `await` em funções assíncronas para criar pausas sem bloquear o fluxo de execução.
- O tempo é especificado em milissegundos (1 segundo = 1000 milissegundos).

## Referências

- [setTimeout() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)