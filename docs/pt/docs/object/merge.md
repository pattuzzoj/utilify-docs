# merge

```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: unknown[][]): unknown[];
function merge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```

A função `merge` combina múltiplos objetos ou arrays em um único valor. No caso de objetos, as propriedades são combinadas, e no caso de arrays, os elementos são concatenados.

## Assinatura

```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: unknown[][]): unknown[];
function merge(...values: any[]): any;
```

## Parâmetros

- **`values`** (`Record<string, any>[] | unknown[][]`): Um ou mais objetos ou arrays a serem combinados.

## Retorno

- **`Record<string, any>`**: Retorna um único objeto contendo todas as propriedades dos objetos passados. Se forem passados arrays, será retornado um array concatenado.

## Exemplos

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(merge(obj1, obj2)); // { a: 1, b: 2, c: 3, d: 4 }

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(merge(arr1, arr2)); // [1, 2, 3, 4]
```

## Notas

- A função sobrescreve as propriedades existentes em objetos caso elas sejam duplicadas entre os objetos passados.
- Para arrays, os elementos são concatenados na ordem em que são passados.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)