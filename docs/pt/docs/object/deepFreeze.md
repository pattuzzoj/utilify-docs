# deepFreeze

```typescript
import { isObject } from "../types";
import { freeze } from ".";

function deepFreeze(obj: Record<string, any>): Record<string, any> {
  const freezedObj = freeze(obj);

  for (const key in freezedObj) {
    if (isObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
```

A função `deepFreeze` aplica o método `freeze` de forma recursiva em um objeto, congelando o objeto e suas propriedades (e propriedades aninhadas) para garantir que seus valores não possam ser alterados após a criação. Isso impede que qualquer parte do objeto ou seus objetos internos sejam modificados, tornando-os imutáveis.

## Assinatura

```typescript
function deepFreeze(obj: Record<string, any>): Record<string, any>;
```

## Parâmetros

- **`obj`** (`Record<string, any>`): O objeto que será congelado. Este objeto e suas propriedades aninhadas serão imutáveis após a execução da função.

## Retorno

- **`Record<string, any>`**: O objeto congelado, onde tanto o objeto original quanto suas propriedades e subpropriedades (se forem objetos) são congelados, impedindo modificações.

## Exemplos

```typescript
const obj = { a: 1, b: { c: 2, d: [3, 4] } };
const frozenObj = deepFreeze(obj);

console.log(frozenObj); // { a: 1, b: { c: 2, d: [3, 4] } }
frozenObj.a = 2; // Não terá efeito, pois o objeto foi congelado
console.log(frozenObj.a); // 1

frozenObj.b.c = 3; // Não terá efeito, pois o objeto interno também foi congelado
console.log(frozenObj.b.c); // 2
```

## Notas

- **Imutabilidade**: Ao aplicar `deepFreeze`, tanto o objeto original quanto todos os objetos aninhados se tornam imutáveis. Isso significa que não será possível alterar os valores das propriedades ou adicionar novas propriedades.
- **Recursividade**: A função percorre todas as propriedades do objeto e aplica `freeze` a elas, garantindo que a imutabilidade se propague para objetos e arrays internos.
- **Limitações**: `deepFreeze` não congela propriedades não enumeráveis ou símbolos, e não impede mudanças em objetos que não sejam manipulados diretamente (como objetos de protótipo).

## Referências

- [Object.freeze() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [Recursão em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion)