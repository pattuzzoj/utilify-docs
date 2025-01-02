# factorial

```typescript
export default function factorial(value: number): number {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}
```

A função `factorial` calcula o fatorial de um número não negativo fornecido. O fatorial de um número `n` é o produto de todos os inteiros positivos de `1` a `n` (denotado como `n!`).

## Assinatura

```typescript
function factorial(value: number): number;
```

### Parâmetros

- **`value`** (`number`): Um número inteiro não negativo cujo fatorial será calculado.

### Retorno

- **`number`**: O valor do fatorial calculado para o número fornecido. Retorna `1` se o número for `0` ou `1`.

## Exemplos

```typescript
import { factorial } from "./factorial";

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // 1 (por definição, 0! = 1)
console.log(factorial(3)); // 6 (3 * 2 * 1)
```

## Notas

- Por definição, o fatorial de `0` é igual a `1` (`0! = 1`).
- A função assume que o parâmetro fornecido é um número inteiro não negativo.

## Referências

- [Fatorial - Wikipedia](https://pt.wikipedia.org/wiki/Fatorial)