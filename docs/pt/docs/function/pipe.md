# pipe

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}
```

A função `pipe` permite encadear várias funções, passando o resultado de cada função como entrada para a próxima, criando uma sequência de transformações.

## Assinatura

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parâmetros

- **`...callbacks`** (`((value: T) => T)[]`): Uma sequência de funções que serão aplicadas ao valor de entrada. Cada função recebe o valor de entrada e retorna um novo valor, que é passado para a próxima função.

### Retorno

- **`(value: T) => T`**: Retorna uma nova função que, quando chamada, aplica todas as funções passadas na sequência, em ordem, ao valor fornecido.

## Exemplos

```typescript
const addOne = (x: number) => x + 1;
const multiplyByTwo = (x: number) => x * 2;

const transform = pipe(addOne, multiplyByTwo);

console.log(transform(2)); // 6 (2 + 1 = 3, 3 * 2 = 6)
```

## Notas

- A função `pipe` aplica as funções de forma sequencial. O resultado de uma função é passado como entrada para a próxima.
- É uma maneira funcional de compor transformações simples e reutilizáveis em uma operação mais complexa.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)