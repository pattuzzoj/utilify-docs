# flattenObj

```typescript
import { isObject } from "../types";

export default function flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any> {
  let flatObj: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = path ? `${path}${separator}${key}` : key;
      
      if (isObject(obj[key])) {
        Object.assign(flatObj, flattenObj(obj[key], separator, newPath));
      } else {
        flatObj[newPath] = obj[key];
      }
    }
  }

  return flatObj;
}
```

A função `flattenObj` transforma um objeto aninhado em um objeto "plano", cujas chaves representam os caminhos de cada valor original, utilizando um separador entre os níveis do caminho.

## Assinatura

```typescript
function flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any>;
```

## Parâmetros

- **`obj`** (`Record<string, any>`): O objeto a ser achatado. Pode conter objetos aninhados que serão expandidos para um formato plano.
- **`separator`** (`string`, opcional): O separador que será usado para concatenar as chaves dos caminhos. O valor padrão é `"."`.
- **`path`** (`string`, opcional): O caminho atual sendo construído recursivamente. Este parâmetro é usado internamente pela função para manter o estado durante a recursão.

## Retorno

- **`Record<string, any>`**: O objeto achatado, cujas chaves são compostas pelos caminhos para os valores originais, separados pelo `separator`.

## Exemplos

```typescript
const obj = {
  a: 1,
  b: { x: 10, y: { z: 20 } },
  c: [1, 2, 3],
};

const flattened = flattenObj(obj);
console.log(flattened);
// { a: 1, "b.x": 10, "b.y.z": 20, c: [1, 2, 3] }

const customFlattened = flattenObj(obj, "_");
console.log(customFlattened);
// { a: 1, "b_x": 10, "b_y_z": 20, c: [1, 2, 3] }
```

## Notas

- **Objetos aninhados**: A função lida com objetos aninhados e os achata, criando chaves que representam o caminho completo para cada valor.
- **Arrays**: A função não altera arrays, mantendo-os inalterados na estrutura final.
- **Separador personalizado**: O separador pode ser personalizado, permitindo o uso de diferentes convenções de formatação de chave (como "_" ao invés de ".").

## Referências

- [Object.prototype.hasOwnProperty() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [Object.assign() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)