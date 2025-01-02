# unique

```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

A função `unique` retorna um novo array contendo apenas os elementos únicos do array original. É útil para remover duplicatas de um array.

## Assinatura

```typescript
function unique<T>(arr: T[]): T[];
```

### Parâmetros

- **`arr`** (`T[]`): O array original.

### Retorno

- **`T[]`**: Um novo array contendo apenas os elementos únicos do array original.

## Exemplos

```typescript
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## Notas

- A ordem dos elementos no array retornado é determinada pela sua primeira aparição no array de entrada.
