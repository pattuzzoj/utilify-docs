# isEqualLength

```typescript
function isEqualLength(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isEqualLength(value1: unknown[], value2: unknown[]): boolean;
function isEqualLength(value1: any, value2: any): boolean {
  return Object.keys(value1).length === Object.keys(value2).length;
}
```

A função `isEqualLength` verifica se dois valores, sejam objetos ou arrays, possuem o mesmo número de propriedades ou elementos.

## Assinatura

```typescript
function isEqualLength(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isEqualLength(value1: unknown[], value2: unknown[]): boolean;
function isEqualLength(value1: any, value2: any): boolean;
```

## Parâmetros

- **`value1`** (`any`): O primeiro valor a ser comparado.
- **`value2`** (`any`): O segundo valor a ser comparado.

## Retorno

- **`boolean`**: Retorna `true` se ambos os valores tiverem o mesmo número de propriedades ou elementos, ou `false` caso contrário.

## Exemplos

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { x: 3, y: 4 };
console.log(isEqualLength(obj1, obj2)); // true

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(isEqualLength(arr1, arr2)); // true

const arr3 = [1, 2];
console.log(isEqualLength(arr1, arr3)); // false
```

## Notas

- A função compara apenas a quantidade de propriedades em objetos ou elementos em arrays, sem considerar os valores internos.
- Se os valores forem de tipos diferentes (por exemplo, um objeto e um array), a função poderá retornar resultados inesperados, portanto, é recomendável que ambos os parâmetros sejam do mesmo tipo.

## Referências

- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)