# chunk

```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

A função `chunk` divide a matriz em pedaços menores de tamanho especificado. É útil para dividir uma matriz em partes menores.

## Assinatura

```typescript
function chunk<T>(arr: T[], size: number): T[][];
```

### Parâmetros

- **`arr`** (`T[]`): A matriz original a ser dividida.
- **`size`** (`number`): O tamanho de cada pedaço. Deve ser um número inteiro positivo.

### Retorno

- **`T[][]`**: Uma nova matriz contendo pedaços menores da matriz original.

## Exemplos

```typescript
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
```

## Notas

- Se o tamanho for maior que o comprimento da matriz, uma matriz contendo a matriz original será retornada.
- Se o tamanho for menor ou igual a zero, uma matriz vazia será retornada.

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
