# difference

```typescript
function difference<T>(array: T[], values: T[]): T[] {
  return array.filter(x => !values.includes(x));
}
```

La función `difference` devuelve un nuevo array que contiene elementos que están presentes en el primer array pero no en el segundo array.

## Firma

```typescript
function difference<T>(array: T[], values: T[]): T[];
```

### Parámetros

- **`array`** (`T[]`): El array original.
- **`values`** (`T[]`): El array de valores a excluir del array original.

### Retorno

- **`T[]`**: Un nuevo array que contiene elementos que están presentes en el primer array pero no en el segundo array.

## Ejemplos

```typescript
console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
console.log(difference([1, 2, 3], [1, 2, 3])); // []
```

## Notas

- La función usa `Array.prototype.filter` y `Array.prototype.includes` para determinar la diferencia.

## Referencias

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
