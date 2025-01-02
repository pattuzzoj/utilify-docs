# sanitizeArr

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[] {
  return arr.map(item => values.includes(item) ? replaceValue : item).filter(item => item !== replaceValue);
}
```

A função `sanitizeArr` remove ou substitui os valores especificados no array.

## Assinatura

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replaceValue?: T): T[];
```

### Parâmetros

- **`arr`** (`T[]`): O array original a ser sanitizado.
- **`values`** (`T[]`): Os valores a serem removidos ou substituídos.
- **`replaceValue`** (`T`): O valor para substituir os valores especificados. Se não for fornecido, os valores especificados serão removidos.

### Retorno

- **`T[]`**: Um novo array com os valores especificados removidos ou substituídos.

## Exemplos

```typescript
console.log(sanitizeArr([1, 2, 3, 4], [2, 3])); // [1, 4]
console.log(sanitizeArr([1, 2, 3, 4], [2, 3], 0)); // [1, 0, 0, 4]
```

## Notas

- Se `replaceValue` não for fornecido, os valores especificados serão removidos do array.
- Se `replaceValue` for fornecido, os valores especificados serão substituídos por ele.

## Referências

- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
