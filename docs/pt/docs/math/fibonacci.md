# fibonacci

```typescript
function fibonacci(num: number): number {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
```

A função `fibonacci` calcula o valor da sequência de Fibonacci no índice fornecido. A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores, começando por `0` e `1`.

## Assinatura

```typescript
function fibonacci(num: number): number;
```

### Parâmetros

- **`num`** (`number`): O índice na sequência de Fibonacci para o qual o valor será calculado. Deve ser um número inteiro não negativo.

### Retorno

- **`number`**: O valor correspondente ao índice fornecido na sequência de Fibonacci.

## Exemplos

```typescript
import { fibonacci } from "./fibonacci";

console.log(fibonacci(0)); // 0 (primeiro valor da sequência)
console.log(fibonacci(1)); // 1 (segundo valor da sequência)
console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(10)); // 55
```

## Notas

- Esta implementação utiliza recursão, o que pode levar a problemas de desempenho para valores altos de `num`, devido à repetição de cálculos. Para uma versão mais eficiente, considere usar memoization ou uma abordagem iterativa.
- O índice `0` corresponde ao valor `0` e o índice `1` corresponde ao valor `1`.

## Referências

- [Sequência de Fibonacci - Wikipedia](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci)