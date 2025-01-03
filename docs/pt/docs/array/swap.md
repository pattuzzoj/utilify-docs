# swap

A função `swap` retorna um novo array com os elementos nos índices especificados trocados. É útil para trocar as posições de dois elementos em um array.

## Sintaxe

```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[];
```

### Parâmetros

| Nome     | Tipo     | Descrição                                               |
|----------|----------|---------------------------------------------------------|
| `arr`    | `T[]`    | O array original.                                       |
| `pivot`  | `number` | O índice do primeiro elemento a ser trocado.            |
| `partner`| `number` | O índice do segundo elemento a ser trocado.             |

### Retorno

| Tipo   | Descrição                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | Um novo array com os elementos nos índices especificados trocados. |

## Exemplos

```typescript
console.log(swap([1, 2, 3, 4], 1, 3)); // [1, 4, 3, 2]
```

## Notas

- O array original não é modificado.
- Se qualquer um dos índices estiver fora dos limites, a função lançará um erro.

## Código Fonte

::: code-group
```typescript
function swap<T>(arr: T[], pivot: number, partner: number): T[] {
  const swapedArr = Array.from(arr);
  [swapedArr[pivot], swapedArr[partner]] = [
    swapedArr[partner],
    swapedArr[pivot],
  ];

  return swapedArr;
}
```
```javascript
function swap(arr, pivot, partner) {
  const swapedArr = Array.from(arr);
  [swapedArr[pivot], swapedArr[partner]] = [
    swapedArr[partner],
    swapedArr[pivot],
  ];

  return swapedArr;
}
```
:::

## Referências

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)