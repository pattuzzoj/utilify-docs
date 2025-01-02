# unique

```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

La función `unique` devuelve un nuevo array que contiene solo los elementos únicos del array original. Es útil para eliminar duplicados de un array.

## Firma

```typescript
function unique<T>(arr: T[]): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original.

### Retorno

- **`T[]`**: Un nuevo array que contiene solo los elementos únicos del array original.

## Ejemplos

```typescript
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## Notas

- El orden de los elementos en el array devuelto está determinado por su primera aparición en el array de entrada.
