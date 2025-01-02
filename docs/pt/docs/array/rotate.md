# rotate

```typescript
function rotate<T>(arr: T[], n: number): T[] {
  const len = arr.length;
  const shift = ((n % len) + len) % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
```

A função `rotate` rotaciona os elementos do array `n` posições. Valores positivos de `n` rotacionam para a direita, enquanto valores negativos rotacionam para a esquerda.

## Assinatura

```typescript
function rotate<T>(arr: T[], n: number): T[];
```

### Parâmetros

- **`arr`** (`T[]`): O array original a ser rotacionado.
- **`n`** (`number`): O número de posições para rotacionar o array. Valores positivos rotacionam para a direita, negativos para a esquerda.

### Retorno

- **`T[]`**: Um novo array com os elementos rotacionados `n` posições.

## Exemplos

```typescript
console.log(rotate([1, 2, 3, 4], 1)); // [2, 3, 4, 1]
console.log(rotate([1, 2, 3, 4], -1)); // [4, 1, 2, 3]
```

## Notas

- A rotação é realizada de maneira circular.
- Se `n` for zero, o array original é retornado.

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
