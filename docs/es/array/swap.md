# swap

```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[] {
  const swapedArr = Array.from(arr);
  [swapedArr[pivot], swapedArr[partner]] = [
    swapedArr[partner],
    swapedArr[pivot],
  ];

  return swapedArr;
}
```

La función `swap` devuelve un nuevo array con los elementos en los índices especificados intercambiados. Es útil para intercambiar las posiciones de dos elementos en un array.

## Firma

```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original.
- **`pivot`** (`number`): El índice del primer elemento a intercambiar.
- **`partner`** (`number`): El índice del segundo elemento a intercambiar.

### Retorno

- **`T[]`**: Un nuevo array con los elementos en los índices especificados intercambiados.

## Ejemplos

```typescript
console.log(swap([1, 2, 3, 4], 1, 3)); // [1, 4, 3, 2]
```

## Notas

- El array original no se modifica.
- Si alguno de los índices está fuera de los límites, la función lanzará un error.

## Referencias

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
