# isInteger

```typescript
export default function isInteger(value: number): boolean {
  return Number.isInteger(value);
}
```

A função `isInteger` verifica se o valor fornecido é um número inteiro.

## Assinatura

```typescript
function isInteger(value: number): boolean;
```

### Parâmetros

- **`value`** (`number`): O número que será verificado.

### Retorno

- **`boolean`**: Retorna `true` se o valor for um número inteiro, caso contrário, retorna `false`.

## Exemplos

```typescript
import { isInteger } from "./isInteger";

console.log(isInteger(4)); 
// true

console.log(isInteger(7.5)); 
// false

console.log(isInteger(0)); 
// true

console.log(isInteger(-3)); 
// true
```

## Notas

- A função utiliza `Number.isInteger` para verificar se o valor é um número inteiro.
- Valores como números decimais ou NaN retornarão `false`.

## Referências

- [Number.isInteger() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)