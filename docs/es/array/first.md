# first

```typescript
function first<T>(array: T[], n?: number): T[] {
  return n ? array.slice(0, n) : array.slice(0, 1);
}
```

La función `first` devuelve un nuevo array que contiene los primeros `n` elementos del array original. Si no se proporciona `n`, devuelve el primer elemento.

## Firma

```typescript
function first<T>(array: T[], n?: number): T[];
```

### Parámetros

- **`array`** (`T[]`): El array original.
- **`n`** (`number`, opcional): El número de elementos a devolver desde el inicio del array.

### Retorno

- **`T[]`**: Un nuevo array que contiene los primeros `n` elementos del array original. Si no se proporciona `n`, devuelve el primer elemento.

## Ejemplos

```typescript
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4])); // [1]
```

## Notas

- Si `n` es mayor que la longitud del array, se devuelve todo el array.
- Si no se proporciona `n`, la función devuelve el primer elemento del array.

## Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
