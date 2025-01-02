# isBetween

```typescript
export default function isBetween(value: number, min: number, max: number): boolean {
  return min <= value && value <= max;
}
```

A função `isBetween` verifica se um número está dentro de um intervalo inclusivo definido pelos limites mínimo e máximo.

## Assinatura

```typescript
function isBetween(value: number, min: number, max: number): boolean;
```

### Parâmetros

- **`value`** (`number`): O número que será verificado.
- **`min`** (`number`): O limite inferior do intervalo.
- **`max`** (`number`): O limite superior do intervalo.

### Retorno

- **`boolean`**: Retorna `true` se o valor estiver dentro do intervalo inclusivo `[min, max]`, caso contrário, retorna `false`.

## Exemplos

```typescript
import { isBetween } from "./isBetween";

console.log(isBetween(5, 1, 10)); 
// true

console.log(isBetween(15, 1, 10)); 
// false

console.log(isBetween(10, 1, 10)); 
// true

console.log(isBetween(1, 1, 10)); 
// true
```

## Notas

- O intervalo `[min, max]` é inclusivo, ou seja, os limites são considerados parte do intervalo.
- Certifique-se de que os valores de `min` e `max` estão ordenados corretamente para evitar resultados inesperados.

## Referências

- [Comparison Operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)