# flatten

```typescript
import { flattenArr } from "../array";
import { flattenObj } from "../object";
import { isArray, isObject } from "../types";

function flatten<T>(arr: T[], depth: number): FlatArray<T[], number>[];
function flatten(obj: Record<string, any>, separator: string): Record<string, any>;
function flatten(value: any, depthOrSeparator: any): any {
  if (isObject(value)) {
    return flattenObj(value, depthOrSeparator ?? ".");
  } else if (isArray(value)) {
    return flattenArr(value, depthOrSeparator ?? Infinity);
  }

  return value;
}
```

A função `flatten` pode ser utilizada para "achatar" estruturas de dados, como arrays e objetos, em um formato plano. Se o valor for um array ou objeto, ele será reduzido a uma forma mais simples, com base no parâmetro de profundidade ou separador fornecido.

## Assinatura

```typescript
function flatten<T>(arr: T[], depth: number): FlatArray<T[], number>[];
function flatten(obj: Record<string, any>, separator: string): Record<string, any>;
function flatten(value: any, depthOrSeparator: any): any;
```

### Parâmetros

- **`value`** (`any`): O valor a ser "achatado". Pode ser um array ou objeto.
- **`depthOrSeparator`** (`number` | `string`): A profundidade até a qual um array será achatado, ou o separador utilizado para "achatar" um objeto. Caso seja um array, o valor pode ser um número inteiro (`depth`), e caso seja um objeto, o valor deve ser uma string (`separator`).
  - Se for um array, o parâmetro de profundidade (`depth`) define até onde a estrutura será achatada.
  - Se for um objeto, o separador (`separator`) define o caractere a ser usado para unir as chaves ao achatá-lo.

### Retorno

- **`any`**: O valor "achatado". Pode ser um array ou objeto modificado dependendo do tipo de entrada.

## Exemplos

```typescript
console.log(flatten([1, [2, [3, 4]], 5], 2)); // [1, 2, 3, 4, 5]
console.log(flatten({ a: { b: { c: 1 } } }, ".")); // { "a.b.c": 1 }
```

## Notas

- Se o valor fornecido for um objeto, ele será achatado com o separador definido (por padrão `"."`).
- Se o valor for um array, ele será achatado até a profundidade fornecida (por padrão até o máximo de profundidade, `Infinity`).
- A função retorna o valor inalterado se o parâmetro fornecido não corresponder a um array ou objeto.

## Referências

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)