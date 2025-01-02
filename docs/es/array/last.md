# last

```typescript
function last<T>(arr: T[], n?: number): T[] {
  if (n === undefined) return [arr[arr.length - 1]];
  return arr.slice(-n);
}
```

La función `last` devuelve un nuevo array que contiene los últimos `n` elementos del array original. Si no se proporciona `n`, devuelve el último elemento como un array.

## Firma

```typescript
function last<T>(arr: T[], n?: number): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original del cual se extraerán los elementos.
- **`n`** (`number`): El número de elementos a incluir en el nuevo array. Si no se proporciona, el valor predeterminado es 1.

### Retorno

- **`T[]`**: Un nuevo array que contiene los últimos `n` elementos. Si `n` es mayor que la longitud del array, se devolverá todo el array.

## Ejemplos

```typescript
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5])); // [5]
```

## Notas

- Si `n` es mayor que la longitud del array, se devolverá todo el array.
- Si no se proporciona `n`, la función devuelve el último elemento como un array.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
