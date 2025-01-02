# frequency

```typescript
export default function frequency<T>(arr: T[]): Record<string, number> {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
```

A função `frequency` calcula a frequência de ocorrência de cada elemento em um array, retornando um objeto onde as chaves representam os elementos e os valores indicam quantas vezes cada elemento aparece no array.

## Assinatura

```typescript
function frequency<T>(arr: T[]): Record<string, number>;
```

### Parâmetros

- **`arr`** (`T[]`): Um array de elementos genéricos cujas frequências serão calculadas.

### Retorno

- **`Record<string, number>`**: Um objeto onde cada chave é uma representação em string de um elemento do array e o valor é o número de vezes que ele aparece.

## Exemplos

```typescript
import { frequency } from "./frequency";

console.log(frequency([1, 2, 2, 3, 3, 3])); 
// { "1": 1, "2": 2, "3": 3 }

console.log(frequency(["apple", "banana", "apple", "cherry"])); 
// { "apple": 2, "banana": 1, "cherry": 1 }

console.log(frequency([true, false, true, true])); 
// { "true": 3, "false": 1 }
```

## Notas

- Todos os elementos do array são convertidos para strings ao serem usados como chaves no objeto retornado.
- Para tipos complexos, como objetos, as chaves no objeto resultante serão o resultado da conversão para string, como `"[object Object]"`.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)