# isDeepEqual

```typescript
import { isEqualType } from "../types";

function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
function isDeepEqual(value1: any, value2: any): boolean {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!isEqualType(value1[key], value2[key])) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
```

A função `isDeepEqual` compara dois valores profundamente, verificando se eles são iguais em estrutura e valor, levando em consideração objetos e arrays aninhados.

## Assinatura

```typescript
function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
function isDeepEqual(value1: any, value2: any): boolean;
```

## Parâmetros

- **`value1`** (`any`): O primeiro valor a ser comparado.
- **`value2`** (`any`): O segundo valor a ser comparado.

## Retorno

- **`boolean`**: Retorna `true` se os dois valores forem profundamente iguais, ou `false` caso contrário.

## Exemplos

```typescript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(isDeepEqual(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 3 } };
console.log(isDeepEqual(obj1, obj3)); // false

const arr1 = [1, 2, { a: 3 }];
const arr2 = [1, 2, { a: 3 }];
console.log(isDeepEqual(arr1, arr2)); // true
```

## Notas

- A comparação é realizada recursivamente, o que permite comparar objetos e arrays aninhados.
- A função leva em consideração tipos de dados, como `null`, `undefined`, e objetos.
- A função utiliza `Object.is` para comparar os valores primitivos, e recursivamente compara objetos e arrays.

## Referências

- [Object.is() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)