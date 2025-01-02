# compose

```typescript
export default function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}
```
A função `compose` permite compor várias funções que operam sobre o mesmo tipo de valor, aplicando-as em sequência. As funções são aplicadas de forma reversa, ou seja, a última função fornecida será executada primeiro, e a primeira função será executada por último.


## Assinatura

```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parâmetros

- **`callbacks`** (`((value: T) => T)[]`): Um array de funções que recebem um valor do tipo `T` e retornam um valor do tipo `T`. Essas funções serão aplicadas sequencialmente, começando pela última função.

### Retorno

- **`(value: T) => T`**: Retorna uma função que, quando chamada, aplica todas as funções fornecidas ao valor `value` em ordem reversa.

## Exemplos

```typescript
const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;

const addThenMultiply = compose(multiply2, add1);

console.log(addThenMultiply(2)); // 6 (2 + 1 = 3, 3 * 2 = 6)
```

## Notas

- A ordem de execução das funções é da última para a primeira, ou seja, a função mais à direita é executada primeiro.
- Se você passar funções como `callbacks[0], callbacks[1], callbacks[2]`, o comportamento será `callbacks[2](callbacks[1](callbacks[0](value)))`.

## Referências

- [Array.prototype.reduceRight() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)