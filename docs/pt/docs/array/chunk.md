# chunk

A função `chunk` divide uma matriz em pedaços menores com o tamanho especificado. Ela é útil quando você precisa dividir um conjunto de dados grande em partes menores, seja para processá-los em lotes ou para manipulação de dados.

## Sintaxe

```typescript
function chunk<T>(arr: T[], size: number): T[][];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                     |
|--------|--------------|---------------------------------------------------------------|
| `arr`  | `T[]`        | A matriz original que será dividida em pedaços.               |
| `size` | `number`     | O tamanho de cada pedaço. Deve ser um número inteiro positivo. |

### Retorno

| Tipo    | Descrição                                                              |
|---------|------------------------------------------------------------------------|
| `T[][]` | Retorna uma nova matriz contendo os pedaços menores da matriz original.|

## Exemplos

```typescript
const data = [1, 2, 3, 4, 5, 6, 7];

// Dividindo a matriz em pedaços de tamanho 3
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Dividindo a matriz em pedaços de tamanho 2
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Tamanho maior que o comprimento da matriz
console.log(chunk(data, 10)); // [[1, 2, 3, 4, 5, 6, 7]]

// Tamanho igual a zero
console.log(chunk(data, 0)); // []

// Tamanho negativo
console.log(chunk(data, -2)); // []
```

## Notas

- Se o tamanho for maior que o comprimento da matriz, uma matriz contendo a matriz original será retornada como único pedaço.
- Se o tamanho for menor ou igual a zero, a função retornará uma matriz vazia.
- Pode ser usada, por exemplo, para dividir uma lista de itens em páginas ou processar dados em lotes.

## Código Fonte

::: code-group
```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

```javascript
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)