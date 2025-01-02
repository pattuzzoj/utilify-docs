# interpolate

```typescript
import { isObject } from "../types";

export default function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T {
  const result: T = {} as T;

  for (const key in obj) {
    if (isObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_: string, match: string) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

A função `interpolate` percorre um objeto e substitui as expressões no formato `{{key}}` dentro das propriedades do objeto, usando os valores correspondentes fornecidos em outro objeto `data`. 

## Assinatura

```typescript
function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T;
```

## Parâmetros

- **`obj`** (`T`): O objeto cujas propriedades podem conter expressões a serem substituídas.
- **`data`** (`Record<string, any>`): Um objeto contendo os valores para substituir as expressões dentro do `obj`.

## Retorno

- **`T`**: Um novo objeto com as expressões interpoladas substituídas pelos valores de `data`. Se uma expressão não for encontrada no objeto `data`, ela será deixada intacta.

## Exemplos

```typescript
const template = {
  name: "{{firstName}} {{lastName}}",
  greeting: "Hello, {{firstName}}!"
};

const data = {
  firstName: "John",
  lastName: "Doe"
};

const result = interpolate(template, data);
console.log(result);
// Output: { name: "John Doe", greeting: "Hello, John!" }
```

## Notas

- A substituição de variáveis é feita usando expressões no formato `{{key}}`. Se a chave não for encontrada em `data`, ela será deixada sem alteração no formato original.
- A função realiza a substituição de maneira recursiva, permitindo a interpolação de objetos aninhados.

## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)