# divisors

```typescript
export default function divisors(num: number): number[] {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if (num % index === 0) {
      divisors.push(index);

      if (index !== num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}
```

A função `divisors` retorna todos os divisores de um número fornecido, incluindo `1` e o próprio número, ordenados em ordem crescente.

## Assinatura

```typescript
function divisors(num: number): number[];
```

### Parâmetros

- **`num`** (`number`): O número cujo os divisores serão calculados.

### Retorno

- **`number[]`**: Um array contendo todos os divisores do número fornecido, em ordem crescente.

## Exemplos

```typescript
import { divisors } from "./divisors";

console.log(divisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(divisors(28)); // [1, 2, 4, 7, 14, 28]
console.log(divisors(13)); // [1, 13]
```

## Notas

- A função utiliza a propriedade de simetria dos divisores para melhorar a eficiência, iterando apenas até a raiz quadrada do número.
- Para números primos, o retorno será `[1, num]`.

## Referências

- [Divisores - Wikipedia](https://pt.wikipedia.org/wiki/Divisor)