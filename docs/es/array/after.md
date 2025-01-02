# after

```typescript
function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}
```

La función `after` devuelve una nueva matriz que contiene todos los elementos después del índice especificado. Es útil para obtener una submatriz desde un punto específico.

## Firma

```typescript
function after<T>(arr: T[], index: number): T[];
```

### Parámetros

- **`arr`** (`T[]`): La matriz original de la cual se extraerán los elementos.
- **`index`** (`number`): El índice después del cual se incluirán los elementos en la nueva matriz. Debe ser un número entero.

### Retorno

- **`T[]`**: Una nueva matriz que contiene todos los elementos después del índice especificado. Si el índice es mayor o igual a la longitud de la matriz, se devolverá una matriz vacía.

## Ejemplos

```typescript
console.log(after([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(after([1, 2, 3, 4, 5], -4)); // [3, 4, 5]
```

## Notas

- Si el índice es mayor o igual a la longitud de la matriz, se devolverá una matriz vacía.
- Si el índice es negativo, se tratará como un desplazamiento desde el final de la matriz.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
