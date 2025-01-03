# lock

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void {
  let isLocked = false;

  return async (...args: any[]): Promise<void> => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}
```

A função `lock` cria um mecanismo para garantir que uma função assíncrona (callback) seja executada de forma exclusiva, ou seja, ela bloqueia a execução de chamadas subsequentes até que a execução atual tenha sido concluída. Isso é útil quando é necessário evitar condições de corrida ou chamadas concorrentes de uma função.

## Assinatura

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => Promise<void>`): A função assíncrona que será executada de forma bloqueada. Deve retornar uma `Promise`.

### Retorno

- **`(...args: any[]) => void`**: Retorna uma nova função que, quando chamada, garantirá que o `callback` seja executado de forma exclusiva. Caso o `callback` ainda esteja sendo executado, novas invocações serão ignoradas até que a execução atual termine.

## Exemplos

```typescript
const fetchData = async (id: number) => {
  console.log(`Fetching data for ${id}...`);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
  console.log(`Data for ${id} fetched.`);
};

const lockedFetchData = lock(fetchData);

lockedFetchData(1); // Fetches data for 1
lockedFetchData(2); // Ignored, as the previous fetch is still running
setTimeout(() => lockedFetchData(3), 1500); // Fetches data for 3 after the previous one finishes
```

**Saída esperada:**
```
Fetching data for 1...
Data for 1 fetched.
Fetching data for 3...
Data for 3 fetched.
```

## Notas

- A função `lock` pode ser útil quando há a necessidade de evitar que funções assíncronas sejam chamadas simultaneamente, como ao acessar recursos compartilhados ou realizar operações que não podem ser executadas em paralelo.
- A execução da função é bloqueada até que a `Promise` retornada pelo `callback` seja resolvida, garantindo que apenas uma execução do `callback` aconteça por vez.

## Referências

- [Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)