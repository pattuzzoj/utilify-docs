# difference

A função `difference` retorna um novo array contendo elementos que estão presentes no primeiro array, mas não no segundo array.

## Sintaxe

```typescript
function difference<T>(array: T[], values: T[]): T[];
```

### Parâmetros

| Nome    | Tipo         | Descrição                                               |
|---------|--------------|---------------------------------------------------------|
| `array` | `T[]`        | O array original.                                       |
| `values`| `T[]`        | O array de valores a serem excluídos do array original. |

### Retorno

| Tipo   | Descrição                                                                            |
|--------|--------------------------------------------------------------------------------------|
| `T[]`  | Um novo array contendo elementos que estão presentes no primeiro array, mas não no segundo. |

## Exemplos

```typescript
const data1 = [1, 2, 3];
const data2 = [2, 3, 4];

// Elementos no primeiro array, mas não no segundo
console.log(difference(data1, data2)); // [1]

const data3 = [1, 2, 3];

// Arrays idênticos, nenhum elemento restante
console.log(difference(data3, data3)); // []
```

## Notas

- A função usa `Array.prototype.filter` e `Array.prototype.includes` para determinar a diferença.

## Código Fonte

::: code-group
```typescript
function difference<T>(array: T[], values: T[]): T[] {
  return array.filter(x => !values.includes(x));
}
```
```javascript
function difference(array, values) {
  return array.filter(x => !values.includes(x));
}
```
:::

## Referências

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)