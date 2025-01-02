# first

```typescript
function first<T>(array: T[], n?: number): T[] {
  return n ? array.slice(0, n) : array.slice(0, 1);
}
```

A função `first` retorna um novo array contendo os primeiros `n` elementos do array original. Se `n` não for fornecido, retorna o primeiro elemento.

## Assinatura

```typescript
function first<T>(array: T[], n?: number): T[];
```

### Parâmetros

- **`array`** (`T[]`): O array original.
- **`n`** (`number`, opcional): O número de elementos a serem retornados do início do array.

### Retorno

- **`T[]`**: Um novo array contendo os primeiros `n` elementos do array original. Se `n` não for fornecido, retorna o primeiro elemento.

## Exemplos

```typescript
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4])); // [1]
```

## Notas

- Se `n` for maior que o comprimento do array, o array inteiro será retornado.
- Se `n` não for fornecido, a função retorna o primeiro elemento do array.

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
