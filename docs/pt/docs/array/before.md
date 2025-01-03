# before

A função `before` retorna um novo array contendo todos os elementos antes do índice especificado. Ela é útil para extrair uma submatriz até um ponto específico.

## Sintaxe

```typescript
function before<T>(arr: T[], index: number): T[];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                        |
|--------|--------------|-------------------------------------------------------------------|
| `arr`  | `T[]`        | O array original do qual os elementos serão extraídos.            |
| `index`| `number`     | O índice antes do qual os elementos serão incluídos no novo array. |

### Retorno

| Tipo    | Descrição                                                                 |
|---------|--------------------------------------------------------------------------|
| `T[]`   | Um novo array que contém todos os elementos antes do índice especificado. |

## Exemplos

```typescript
const data = [1, 2, 3, 4, 5];

// Elementos antes do índice 2
console.log(before(data, 2)); // [1, 2]

// Elementos antes do índice 0
console.log(before(data, 0)); // []

// Índice fora de alcance
console.log(before(data, 10)); // [1, 2, 3, 4, 5]

// Índice negativo
console.log(before(data, -1)); // []
```

## Notas

- Se o índice for menor ou igual a zero, um array vazio será retornado.
- Se o índice for negativo, ele será tratado como zero.

## Código Fonte

::: code-group
```typescript
function before<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}
```

```javascript
function before(arr, index) {
  return arr.slice(0, index);
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)