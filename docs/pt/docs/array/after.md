# after

```typescript
function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}
```

A função `after` retorna uma nova matriz contendo todos os elementos após o índice especificado. É útil para obter uma submatriz a partir de um ponto específico.

## Assinatura

```typescript
function after<T>(arr: T[], index: number): T[];
```

### Parâmetros

- **`arr`** (`T[]`): A matriz original da qual os elementos serão extraídos.
- **`index`** (`number`): O índice após o qual os elementos serão incluídos na nova matriz. Deve ser um número inteiro.

### Retorno

- **`T[]`**: Uma nova matriz contendo todos os elementos após o índice especificado. Se o índice for maior ou igual ao comprimento da matriz, uma matriz vazia será retornada.

## Exemplos

```typescript
console.log(after([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(after([1, 2, 3, 4, 5], -4)); // [3, 4, 5]
```

## Notas

- Se o índice for maior ou igual ao comprimento da matriz, uma matriz vazia será retornada.
- Se o índice for negativo, ele será tratado como um deslocamento a partir do final da matriz.

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
