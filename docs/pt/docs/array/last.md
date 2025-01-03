# last

A função `last` retorna os últimos `n` elementos do array.

## Sintaxe

```typescript
function last<T>(arr: T[], n?: number): T[];
```

### Parâmetros

| Nome  | Tipo     | Descrição                                                  |
|-------|----------|------------------------------------------------------------|
| `arr` | `T[]`    | O array do qual os elementos serão extraídos.              |
| `n`   | `number` | O número de elementos a serem retornados a partir do final do array. O valor padrão é 1. |

### Retorno

| Tipo   | Descrição                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | Um novo array contendo os últimos `n` elementos do array.  |

## Exemplos

```typescript
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5]));    // [5]
```

## Notas

- Se `n` for maior que o comprimento do array, todos os elementos do array serão retornados.

## Código Fonte

::: code-group
```typescript
function last<T>(arr: T[], n: number = 1): T[] {
  return arr.slice(-n);
}
```
```javascript
function last(arr, n = 1) {
  return arr.slice(-n);
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)