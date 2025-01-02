# isEven

```typescript
export default function isEven(value: number): boolean {
  return value % 2 === 0;
}
```

A função `isEven` verifica se um número é par.

## Assinatura

```typescript
function isEven(value: number): boolean;
```

### Parâmetros

- **`value`** (`number`): O número que será verificado.

### Retorno

- **`boolean`**: Retorna `true` se o número for par, caso contrário, retorna `false`.

## Exemplos

```typescript
import { isEven } from "./isEven";

console.log(isEven(4)); 
// true

console.log(isEven(7)); 
// false

console.log(isEven(0)); 
// true

console.log(isEven(-2)); 
// true
```

## Notas

- Um número é considerado par se o resto de sua divisão por 2 for zero.
- A função suporta números inteiros positivos, negativos e zero.

## Referências

- [Arithmetic Operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#remainder)