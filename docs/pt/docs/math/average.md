# average

```typescript
import { sum } from ".";

export default function average(values: number[]): number {
  return values.length ? (sum(values) / values.length) : 0;
}
```

A função `average` calcula a média aritmética de um conjunto de números fornecido como entrada. Se o array estiver vazio, a função retorna `0`.

## Assinatura

```typescript
function average(values: number[]): number;
```

### Parâmetros

- **`values`** (`number[]`): Um array contendo números cujos valores serão usados para calcular a média.

### Retorno

- **`number`**: O valor médio calculado ou `0` se o array estiver vazio.

## Exemplos

```typescript
import { average } from "./average";

console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([10, 20, 30])); // 20
console.log(average([])); // 0
```

## Notas

- A função utiliza a função `sum` para calcular a soma dos números no array.
- Se o array não contiver elementos, a média será retornada como `0`.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)