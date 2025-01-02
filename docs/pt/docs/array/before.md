# before

```typescript
function before<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}
```

A função `before` retorna uma nova matriz contendo todos os elementos antes do índice especificado. É útil para obter uma submatriz até um ponto específico.

## Assinatura

```typescript
function before<T>(arr: T[], index: number): T[];
```

### Parâmetros

- **`arr`** (`T[]`): A matriz original da qual os elementos serão extraídos.
- **`index`** (`number`): O índice antes do qual os elementos serão incluídos na nova matriz. Deve ser um número inteiro.

### Retorno

- **`T[]`**: Uma nova matriz contendo todos os elementos antes do índice especificado. Se o índice for menor ou igual a zero, uma matriz vazia será retornada.

## Exemplos

```typescript
console.log(before([1, 2, 3, 4, 5], 2)); // [1, 2]
console.log(before([1, 2, 3, 4, 5], 0)); // []
```

## Notas

- Se o índice for menor ou igual a zero, uma matriz vazia será retornada.
- Se o índice for negativo, ele será tratado como zero.

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
