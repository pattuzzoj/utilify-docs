# deepMerge

```typescript
import { isArray, isObject } from "../types";

function deepMerge(...values: Record<string, any>[]): Record<string, any>;
function deepMerge(...values: unknown[][]): unknown[];
function deepMerge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if (isArray(obj[key]) || isObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, isArray(values[0]) ? [] : {});
}
```

A função `deepMerge` realiza a mesclagem recursiva de múltiplos objetos ou arrays, combinando suas propriedades de forma que, se houver propriedades aninhadas (como objetos ou arrays), essas também sejam mescladas de maneira profunda.

## Assinatura

```typescript
function deepMerge(...values: Record<string, any>[]): Record<string, any>;
function deepMerge(...values: unknown[][]): unknown[];
```

## Parâmetros

- **`values`** (`Record<string, any>[]` ou `unknown[][]`): Uma lista de objetos ou arrays que serão mesclados. Caso o parâmetro seja um objeto ou array aninhado, ele será recursivamente mesclado com os outros valores.

## Retorno

- **`Record<string, any>` ou `unknown[]`**: O objeto ou array resultante da mesclagem dos valores fornecidos, com as propriedades combinadas. Se os valores passados forem arrays, o resultado será um array, caso contrário, será um objeto.

## Exemplos

```typescript
const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { y: 30, z: 40 }, c: 3 };
const obj3 = { b: { z: 50 }, d: 4 };

const merged = deepMerge(obj1, obj2, obj3);
console.log(merged); 
// { a: 1, b: { x: 10, y: 30, z: 50 }, c: 3, d: 4 }

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArr = deepMerge(arr1, arr2);
console.log(mergedArr); 
// [1, 2, 3, 4, 5, 6]
```

## Notas

- **Recursividade**: A função mescla objetos e arrays de forma profunda, o que significa que ela lida com objetos aninhados e arrays dentro de objetos ou arrays, mesclando-os recursivamente.
- **Sobrescrita**: Se duas propriedades tiverem o mesmo nome, o valor da última propriedade será utilizado. No caso de objetos, essa propriedade será mesclada de forma recursiva.
- **Arrays e Objetos**: Se os parâmetros fornecidos são arrays, o resultado será um array mesclado. Se forem objetos, o resultado será um objeto mesclado.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.assign() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)