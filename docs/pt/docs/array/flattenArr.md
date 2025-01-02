# flattenArr

```typescript
function flattenArr<T>(array: any[], depth: number = 1): any[] {
  return array.flat(depth);
}
```

A função `flattenArr` achata um array até a profundidade especificada.

## Assinatura

```typescript
function flattenArr<T>(array: any[], depth?: number): any[];
```

### Parâmetros

- **`array`** (`any[]`): O array a ser achatado.
- **`depth`** (`number`, opcional): O nível de profundidade que especifica quão profunda deve ser a estrutura de array aninhado. O padrão é 1.

### Retorno

- **`any[]`**: Um novo array com os elementos do sub-array concatenados nele.

## Exemplos

```typescript
console.log(flattenArr([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenArr([1, [2, [3, [4]]]])); // [1, 2, 3, [4]]
```

## Notas

- A função usa `Array.prototype.flat` para achatar o array.

## Referências

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
