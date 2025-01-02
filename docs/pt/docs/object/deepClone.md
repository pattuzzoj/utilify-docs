# deepClone

```typescript
import { isObject } from '../types';

export default function deepClone<T extends Record<string, any>>(value: T): T;
export default function deepClone<T extends unknown[]>(value: T): T;
export default function deepClone<T>(value: T): T {
  const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

  for (const key in value) {
    if (Array.isArray(value[key]) || isObject(value[key])) {
      clonedValue[key] = deepClone(value[key] as any);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}
```

A função `deepClone` cria uma cópia profunda (deep copy) do valor fornecido. Isso significa que ela clona não apenas o valor principal, mas também todas as suas propriedades e objetos aninhados, garantindo que as referências internas não sejam compartilhadas entre o objeto original e o clonado.

## Assinatura

```typescript
function deepClone<T extends Record<string, any>>(value: T): T;
function deepClone<T extends unknown[]>(value: T): T;
function deepClone<T>(value: T): T;
```

## Parâmetros

- **`value`** (`T`): O valor que será clonado. Pode ser um objeto, um array ou qualquer outro tipo de dado.

## Retorno

- **`T`**: Uma nova instância de `value`, com todos os seus objetos e arrays clonados profundamente. Se o valor fornecido for um objeto ou array, suas propriedades ou elementos também serão clonados recursivamente.

## Exemplos

```typescript
const obj = { a: 1, b: { c: 2, d: [3, 4] } };
const clonedObj = deepClone(obj);

console.log(clonedObj); // { a: 1, b: { c: 2, d: [3, 4] } }
console.log(clonedObj !== obj); // true (o objeto é uma nova instância)
console.log(clonedObj.b !== obj.b); // true (o objeto interno foi clonado)
console.log(clonedObj.b.d !== obj.b.d); // true (o array interno foi clonado)

const arr = [1, [2, 3], { a: 4 }];
const clonedArr = deepClone(arr);

console.log(clonedArr); // [1, [2, 3], { a: 4 }]
console.log(clonedArr !== arr); // true (o array é uma nova instância)
console.log(clonedArr[1] !== arr[1]); // true (o array interno foi clonado)
console.log(clonedArr[2] !== arr[2]); // true (o objeto interno foi clonado)
```

## Notas

- **Clonagem profunda**: Todos os objetos, arrays e valores aninhados dentro do valor original serão clonados, garantindo que não haja compartilhamento de referências entre o original e o clonado.
- **Limitações**: A função pode não lidar com certos tipos especiais como `Map`, `Set`, ou instâncias de classes personalizadas. Além disso, propriedades não enumeráveis e símbolos não são clonados.
- **Função auxiliar**: A função `isObject` é usada para verificar se um valor é um objeto, garantindo que apenas objetos e arrays sejam clonados de maneira profunda.

## Referências

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)