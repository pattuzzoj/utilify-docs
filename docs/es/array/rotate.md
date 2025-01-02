# rotate

```typescript
function rotate<T>(arr: T[], n: number): T[] {
  const len = arr.length;
  const shift = ((n % len) + len) % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
```

La función `rotate` rota los elementos del array `n` posiciones. Los valores positivos de `n` rotan a la derecha, mientras que los valores negativos rotan a la izquierda.

## Firma

```typescript
function rotate<T>(arr: T[], n: number): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original a rotar.
- **`n`** (`number`): El número de posiciones para rotar el array. Los valores positivos rotan a la derecha, los negativos a la izquierda.

### Retorno

- **`T[]`**: Un nuevo array con los elementos rotados `n` posiciones.

## Ejemplos

```typescript
console.log(rotate([1, 2, 3, 4], 1)); // [2, 3, 4, 1]
console.log(rotate([1, 2, 3, 4], -1)); // [4, 1, 2, 3]
```

## Notas

- La rotación se realiza de manera circular.
- Si `n` es cero, se devuelve el array original.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
