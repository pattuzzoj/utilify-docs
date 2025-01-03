# benchmark

```typescript
import { average } from "../math";

function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number> {
  return new Promise(async (resolve) => {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }
    
    resolve(average(times));
  });
}
```

A função `benchmark` executa uma função `callback` várias vezes, mede o tempo de execução de cada iteração e retorna a média do tempo de execução. É útil para medir o desempenho de um código ou função em termos de tempo.

## Assinatura

```typescript
function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number>;
```

### Parâmetros

- **`callback`** (`() => void | Promise<void>`): A função a ser executada e medida em tempo. Pode ser uma função síncrona ou assíncrona.
- **`iterations`** (`number`): O número de vezes que a função `callback` será executada. O valor padrão é 1.

### Retorno

- **`Promise<number>`**: Retorna uma promessa que resolve com a média do tempo de execução (em milissegundos) das iterações.

## Exemplos

```typescript
benchmark(() => {
  // algum código para medir o tempo
}).then((averageTime) => {
  console.log(`Tempo médio de execução: ${averageTime}ms`);
});

benchmark(async () => {
  await new Promise(resolve => setTimeout(resolve, 100)); // Simula uma operação assíncrona
}, 5).then((averageTime) => {
  console.log(`Tempo médio de execução (assíncrono): ${averageTime}ms`);
});
```

## Notas

- A função `callback` pode ser assíncrona, mas deve sempre retornar uma `Promise` ou ser uma função que não retorne nada.
- O número de iterações pode ser ajustado de acordo com a necessidade. Um número maior de iterações pode fornecer uma média mais precisa.
- A função utiliza o `performance.now()` para medir o tempo com alta precisão.

## Referências

- [Performance.now() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)