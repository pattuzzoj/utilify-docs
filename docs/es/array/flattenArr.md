# flattenArr

```typescript
function flattenArr<T>(array: any[], depth: number = 1): any[] {
  return array.flat(depth);
}
```

La función `flattenArr` aplana un array hasta la profundidad especificada.

## Firma

```typescript
function flattenArr<T>(array: any[], depth?: number): any[];
```

### Parámetros

- **`array`** (`any[]`): El array a aplanar.
- **`depth`** (`number`, opcional): El nivel de profundidad que especifica cuán profunda debe ser la estructura del array anidado. El valor predeterminado es 1.

### Retorno

- **`any[]`**: Un nuevo array con los elementos del sub-array concatenados en él.

## Ejemplos

```typescript
console.log(flattenArr([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenArr([1, [2, [3, [4]]]])); // [1, 2, 3, [4]]
```

## Notas

- La función usa `Array.prototype.flat` para aplanar el array.

## Referencias

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
