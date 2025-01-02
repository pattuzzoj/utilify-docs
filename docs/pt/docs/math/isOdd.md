# isOdd

```typescript
export default function isOdd(value: number): boolean {
  return value % 2 !== 0;
}
```

A função `isOdd` verifica se o valor fornecido é um número ímpar.

## Assinatura

```typescript
function isOdd(value: number): boolean;
```

### Parâmetros

- **`value`** (`number`): O número que será verificado.

### Retorno

- **`boolean`**: Retorna `true` se o valor for um número ímpar, caso contrário, retorna `false`.

## Exemplos

```typescript
import { isOdd } from "./isOdd";

console.log(isOdd(3)); 
// true

console.log(isOdd(4)); 
// false

console.log(isOdd(0)); 
// false

console.log(isOdd(-1)); 
// true
```

## Notas

- A função utiliza a operação de módulo para verificar se o número é ímpar.
- Números negativos ímpares também retornarão `true`.

## Referências

- [Operador de Módulo - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#modulo)