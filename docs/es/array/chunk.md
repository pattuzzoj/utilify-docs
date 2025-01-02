# chunk

```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

La función `chunk` divide la matriz en trozos más pequeños del tamaño especificado. Es útil para dividir una matriz en partes más pequeñas.

## Firma

```typescript
function chunk<T>(arr: T[], size: number): T[][];
```

### Parámetros

- **`arr`** (`T[]`): La matriz original a dividir.
- **`size`** (`number`): El tamaño de cada trozo. Debe ser un número entero positivo.

### Retorno

- **`T[][]`**: Una nueva matriz que contiene trozos más pequeños de la matriz original.

## Ejemplos

```typescript
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
```

## Notas

- Si el tamaño es mayor que la longitud de la matriz, se devolverá una matriz que contiene la matriz original.
- Si el tamaño es menor o igual a cero, se devolverá una matriz vacía.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
