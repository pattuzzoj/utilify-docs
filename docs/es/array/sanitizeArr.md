# sanitizeArr

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[] {
  return arr.map(item => values.includes(item) ? replaceValue : item).filter(item => item !== replaceValue);
}
```

La función `sanitizeArr` elimina o reemplaza los valores especificados en el array.

## Firma

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original a sanear.
- **`values`** (`T[]`): Los valores a eliminar o reemplazar.
- **`replaceValue`** (`T`): El valor con el que reemplazar los valores especificados. Si no se proporciona, los valores especificados serán eliminados.

### Retorno

- **`T[]`**: Un nuevo array con los valores especificados eliminados o reemplazados.

## Ejemplos

```typescript
console.log(sanitizeArr([1, 2, 3, 4], [2, 3])); // [1, 4]
console.log(sanitizeArr([1, 2, 3, 4], [2, 3], 0)); // [1, 0, 0, 4]
```

## Notas

- Si no se proporciona `replaceValue`, los valores especificados serán eliminados del array.
- Si se proporciona `replaceValue`, los valores especificados serán reemplazados por él.

## Referencias

- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
