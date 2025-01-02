# difference

```typescript
function difference<T>(array: T[], values: T[]): T[] {
  return array.filter(x => !values.includes(x));
}
```

A função `difference` retorna um novo array contendo elementos que estão presentes no primeiro array, mas não no segundo array.

## Assinatura

```typescript
function difference<T>(array: T[], values: T[]): T[];
```

### Parâmetros

- **`array`** (`T[]`): O array original.
- **`values`** (`T[]`): O array de valores a serem excluídos do array original.

### Retorno

- **`T[]`**: Um novo array contendo elementos que estão presentes no primeiro array, mas não no segundo array.

## Exemplos

```typescript
console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
console.log(difference([1, 2, 3], [1, 2, 3])); // []
```

## Notas

- A função usa `Array.prototype.filter` e `Array.prototype.includes` para determinar a diferença.

## Referências

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
