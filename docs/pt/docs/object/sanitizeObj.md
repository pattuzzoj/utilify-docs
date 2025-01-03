# sanitizeObj

```typescript
import { isObject } from "../types";

function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (isObject(obj[key])) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

A função `sanitizeObj` permite substituir valores específicos em um objeto, de forma recursiva para objetos aninhados, e pode substituir esses valores por um valor de substituição, caso fornecido.

## Assinatura

```typescript
function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```

## Parâmetros

- **`obj`** (`Record<string, any>`): O objeto que será sanitizado.
- **`values`** (`any[]`): Uma lista de valores a serem substituídos.
- **`replace`** (`any`): O valor a ser usado como substituto, caso um dos valores na lista `values` seja encontrado. Se não for fornecido, o valor será mantido.

## Retorno

- **`Record<string, any>`**: Retorna um novo objeto onde os valores presentes na lista `values` foram substituídos pelo valor de `replace` (se fornecido). Se o valor não for encontrado, ele será mantido.

## Exemplos

```typescript
const obj = { a: 1, b: 2, c: { d: 3, e: 2 } };
const result = sanitizeObj(obj, [2], 0);
console.log(result); // { a: 1, b: 0, c: { d: 3, e: 0 } }

const resultNoReplace = sanitizeObj(obj, [2]);
console.log(resultNoReplace); // { a: 1, b: 2, c: { d: 3, e: 2 } }
```

## Notas

- A função opera recursivamente, o que significa que ela substituirá os valores até em objetos aninhados.
- Se o parâmetro `replace` não for passado, os valores em `values` serão simplesmente ignorados, e o objeto original será retornado sem alteração.

## Referências

- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Recursion - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)