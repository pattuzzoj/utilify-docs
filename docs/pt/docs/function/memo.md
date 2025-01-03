# memo

```typescript
import { djb2 } from "../utils";

function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any {
  const cache = new Map();

  return (...args: any[]): any => {
    const key = djb2(JSON.stringify(args));

    if(!cache.has(key)) {
      cache.set(key, callback(...args));

      if(cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }
    
    return cache.get(key);
  }
}
```

A função `memo` implementa um cache de resultados de funções para melhorar o desempenho, armazenando o valor retornado para chamadas subsequentes com os mesmos argumentos. Se o mesmo conjunto de argumentos for fornecido, o valor é retornado do cache, evitando a execução do `callback` novamente. Isso é útil para funções com cálculos dispendiosos ou chamadas de rede.

## Assinatura

```typescript
function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => any`): A função cujo resultado será memorizado.
- **`cacheTimeout`** (`number`, opcional): O tempo (em milissegundos) após o qual o valor em cache será removido. Se não fornecido, o cache não expira.

### Retorno

- **`(...args: any[]) => any`**: Retorna uma função que, quando chamada com um conjunto de argumentos, verifica se o resultado já foi calculado e está armazenado no cache. Caso contrário, executa o `callback` e armazena o resultado.

## Exemplos

```typescript
const expensiveOperation = (x: number) => {
  console.log("Performing expensive operation...");
  return x * 2;
};

const memoizedOperation = memo(expensiveOperation, 5000);

console.log(memoizedOperation(2)); // "Performing expensive operation..." seguido por 4
console.log(memoizedOperation(2)); // 4 (do cache, sem log)
setTimeout(() => console.log(memoizedOperation(2)), 6000); // "Performing expensive operation..." seguido por 4, após 6 segundos
```

## Notas

- A chave do cache é gerada com base na string JSON dos argumentos usando a função `djb2`. Isso permite que qualquer conjunto de argumentos seja transformado em uma chave única para o cache.
- O `cacheTimeout` permite controlar a duração do cache, removendo as entradas após o tempo especificado.
- Caso o `cacheTimeout` não seja especificado, o cache persiste até que a função seja redefinida ou a memória seja liberada.

## Referências

- [JSON.stringify() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [setTimeout() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)