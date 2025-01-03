# unique
A função `unique` retorna um novo array contendo apenas os elementos únicos do array original. É útil para remover duplicatas de um array.

## Sintaxe

```typescript
function unique<T>(arr: T[]): T[];
```

### Parâmetros

| Nome  | Tipo   | Descrição           |
|-------|--------|---------------------|
| `arr` | `T[]`  | O array original.   |

### Retorno

| Tipo   | Descrição                                           |
|--------|-----------------------------------------------------|
| `T[]`  | Um novo array contendo apenas os elementos únicos.  |

## Exemplos

```typescript
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## Notas

- A ordem dos elementos no array retornado é determinada pela sua primeira aparição no array de entrada.

## Código Fonte
::: code-group
```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

```javascript
function unique(arr) {
  return [...new Set(arr)];
}
```
:::

## Referências
- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)