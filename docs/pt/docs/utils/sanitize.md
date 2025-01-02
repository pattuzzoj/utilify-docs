# sanitize

```typescript
import { getType } from "../types";
import { sanitizeStr } from "../string";
import { sanitizeArr } from "../array";
import { sanitizeObj } from "../object";

export default function sanitize(str: string, values: string[], replace?: string): string;
export default function sanitize<T>(arr: T[], values: T[], replace?: T): T[];
export default function sanitize(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
export default function sanitize(value: any, values: any[], replace?: any): any {
  const type = getType(value);
  const sanitizeHandlers: Record<string, any> = {
    "string": sanitizeStr,
    "array": sanitizeArr,
    "object": sanitizeObj
  }

  return type in sanitizeHandlers ? sanitizeHandlers[type](value, values, replace) : value;
}
```

A função `sanitize` é projetada para limpar ou sanitizar diferentes tipos de valores, como strings, arrays e objetos. Ela substitui ou remove valores indesejados, conforme especificado, usando manipuladores específicos para cada tipo de dado.

## Assinatura

```typescript
function sanitize(str: string, values: string[], replace?: string): string;
function sanitize<T>(arr: T[], values: T[], replace?: T): T[];
function sanitize(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
function sanitize(value: any, values: any[], replace?: any): any;
```

### Parâmetros

- **`value`** (`any`): O valor a ser sanitizado. Pode ser uma string, array ou objeto.
- **`values`** (`any[]`): Um array contendo os valores a serem removidos ou substituídos.
- **`replace`** (`any`, opcional): O valor que substituirá os valores a serem removidos, caso especificado.

### Retorno

- **`any`**: O valor sanitizado. Se o tipo do valor não for suportado (não for string, array ou objeto), o valor original será retornado.

## Exemplos

```typescript
console.log(sanitize("Hello World", ["World"], "Universe")); // "Hello Universe"
console.log(sanitize([1, 2, 3, 4], [2, 4], 0)); // [1, 0, 3, 0]
console.log(sanitize({ a: 1, b: 2, c: 3 }, [1, 3], 0)); // { a: 0, b: 2, c: 0 }
```

## Notas

- Para strings, a função utiliza o manipulador `sanitizeStr`, que pode substituir ou remover os valores especificados.
- Para arrays, a função utiliza o manipulador `sanitizeArr`, que substitui ou remove os itens presentes no array.
- Para objetos, a função utiliza o manipulador `sanitizeObj`, que permite substituir ou remover as propriedades correspondentes.
- Se o valor fornecido não for um tipo suportado, o valor original será retornado sem alterações.

## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)