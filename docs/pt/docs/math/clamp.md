# clamp

```typescript
export default function clamp(value: number, min: number, max: number): number {
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}
```

A função `clamp` limita um valor a um intervalo especificado, garantindo que ele não seja menor que o limite mínimo ou maior que o limite máximo.

## Assinatura

```typescript
function clamp(value: number, min: number, max: number): number;
```

### Parâmetros

- **`value`** (`number`): O valor a ser limitado.
- **`min`** (`number`): O limite inferior do intervalo.
- **`max`** (`number`): O limite superior do intervalo.

### Retorno

- **`number`**: O valor limitado ao intervalo definido por `min` e `max`.

## Exemplos

```typescript
import { clamp } from "./clamp";

console.log(clamp(5, 1, 10)); // 5
console.log(clamp(-5, 0, 100)); // 0
console.log(clamp(150, 0, 100)); // 100
```

## Notas

- Se o valor for menor que o limite inferior (`min`), será retornado o valor de `min`.
- Se o valor for maior que o limite superior (`max`), será retornado o valor de `max`.
- Caso o valor esteja dentro do intervalo, ele será retornado sem alterações.

## Referências

- [Math.min() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [Math.max() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)