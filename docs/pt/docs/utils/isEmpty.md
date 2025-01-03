# isEmpty

```typescript
import { isEmptyString } from "../regex";
import { getType } from "../types";

function isEmpty(value: unknown): boolean {
  const type = getType(value);

  switch (type) {
    case "undefined":
    case "null":
      return true;
    case "string":
      return isEmptyString(value as string);
    case "map":
    case "set":
      return (value as Set<any> | Map<any, any>).size === 0;
    case "object":
    case "array":
      return Object.keys(value as object | any[]).length === 0;
    default:
      return false;
  }
}
```

A função `isEmpty` verifica se o valor fornecido está vazio. O comportamento da função varia dependendo do tipo do valor, sendo útil para verificar valores como `null`, `undefined`, strings vazias, objetos, arrays, Mapas e Sets.

## Assinatura

```typescript
function isEmpty(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado. Pode ser de qualquer tipo.

### Retorno

- **`boolean`**: Retorna `true` se o valor estiver vazio, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isEmpty(undefined)); // true
console.log(isEmpty(null)); // true
console.log(isEmpty("")); // true
console.log(isEmpty("Hello")); // false
console.log(isEmpty(new Map())); // true
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
```

## Notas

- Se o valor for `undefined` ou `null`, a função retornará `true`.
- Para strings, será verificado se a string está vazia usando a função `isEmptyString`.
- Para `Map` e `Set`, a função verificará se o tamanho da coleção é igual a zero.
- Para objetos e arrays, a função verificará se o número de chaves (ou elementos) é igual a zero.
- Para outros tipos de valores, a função retornará `false`.

## Referências

- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)