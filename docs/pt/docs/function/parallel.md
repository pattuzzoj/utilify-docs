# parallel

```typescript
async function parallel(...callbacks: (() => Promise<any>)[]) {
  return Promise.all(callbacks.map(callback => callback()));
}
```

A função `parallel` permite executar várias promessas em paralelo e aguarda a resolução de todas elas. Ela recebe um conjunto de funções que retornam promessas e retorna uma única promessa que resolve quando todas as promessas fornecidas forem resolvidas.

## Assinatura

```typescript
function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]>;
```

### Parâmetros

- **`callbacks`** (`(...args: any[]) => Promise<any>[]`): Um conjunto de funções que retornam promessas. Cada função será executada em paralelo.

### Retorno

- **`Promise<any[]>`**: Retorna uma promessa que resolve para um array contendo os resultados das promessas resolvidas, na mesma ordem em que as funções foram fornecidas.

## Exemplos

```typescript
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 1000));
const fetchOtherData = () => new Promise(resolve => setTimeout(() => resolve('Other Data'), 500));

parallel(fetchData, fetchOtherData)
  .then(results => console.log(results)); // ['Data', 'Other Data']
```

## Notas

- A execução das funções é feita em paralelo, e a função retorna uma única promessa que resolve quando todas as promessas passadas como argumentos são resolvidas.
- A ordem dos resultados na promessa resolvida será a mesma ordem das funções passadas, não dependendo da ordem em que as promessas são resolvidas.

## Referências

- [Promise.all() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)