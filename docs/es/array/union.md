# union

```typescript
import unique from "./unique";

function union<T>(...arrs: T[][]): T[] {
  return unique(
    arrs.reduce((unionArr, arr) => {
      unionArr = [...unionArr, ...arr];
      return unionArr;
    }, [])
  );
}
```

La función `union` devuelve un nuevo array que contiene los elementos únicos de todos los arrays proporcionados. Es útil para combinar múltiples arrays en uno solo sin duplicados.

## Firma

```typescript
function union<T>(...arrs: T[][]): T[];
```

### Parámetros

- **`arrs`** (`T[][]`): Los arrays a combinar.

### Retorno

- **`T[]`**: Un nuevo array que contiene los elementos únicos de todos los arrays proporcionados.

## Ejemplos

```typescript
console.log(union([1, 2], [2, 3])); // [1, 2, 3]
console.log(union([1, 2], [3, 4], [4, 5])); // [1, 2, 3, 4, 5]
```

## Notas

- El orden de los elementos en el array devuelto está determinado por el orden de su primera aparición en los arrays de entrada.

## Referencias

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
