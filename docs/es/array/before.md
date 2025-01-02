# before

```typescript
function before<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}
```

La función `before` devuelve una nueva matriz que contiene todos los elementos antes del índice especificado. Es útil para obtener una submatriz hasta un punto específico.

## Firma

```typescript
function before<T>(arr: T[], index: number): T[];
```

### Parámetros

- **`arr`** (`T[]`): La matriz original de la cual se extraerán los elementos.
- **`index`** (`number`): El índice antes del cual se incluirán los elementos en la nueva matriz. Debe ser un número entero.

### Retorno

- **`T[]`**: Una nueva matriz que contiene todos los elementos antes del índice especificado. Si el índice es menor o igual a cero, se devolverá una matriz vacía.

## Ejemplos

```typescript
console.log(before([1, 2, 3, 4, 5], 2)); // [1, 2]
console.log(before([1, 2, 3, 4, 5], 0)); // []
```

## Notas

- Si el índice es menor o igual a cero, se devolverá una matriz vacía.
- Si el índice es negativo, se tratará como cero.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
