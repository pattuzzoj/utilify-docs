# after

A função `after` retorna um novo array que contém todos os elementos após o índice especificado. É útil para obter uma submatriz a partir de um ponto específico.

## Sintaxe

```typescript
function after<T>(arr: T[], index: number): T[];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                        |
|--------|--------------|-------------------------------------------------------------------|
| `arr`  | `T[]`        | O array original do qual os elementos serão extraídos.            |
| `index`| `number`     | O índice após o qual os elementos serão incluídos no novo array.  |

### Retorno

| Tipo    | Descrição                                                                 |
|---------|--------------------------------------------------------------------------|
| `T[]`   | Um novo array que contém todos os elementos após o índice especificado.  |

## Exemplos

```typescript
const data = [1, 2, 3, 4, 5];

// Elementos após o índice 2
console.log(after(data, 2)); // [4, 5]

// Elementos após o índice -4 (deslocamento a partir do final)
console.log(after(data, -4)); // [3, 4, 5]

// Índice fora de alcance
console.log(after(data, 10)); // []

// Índice negativo maior que o tamanho do array
console.log(after(data, -10)); // [1, 2, 3, 4, 5]
```

## Notas

- Se o índice for maior ou igual ao tamanho do array, um array vazio será retornado.
- Se o índice for negativo, ele será tratado como um deslocamento a partir do final do array.

## Código Fonte

::: code-group
```typescript
function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}
```

```javascript
function after(arr, index) {
  return arr.slice(index + 1);
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)