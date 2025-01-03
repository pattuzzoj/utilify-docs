# freeze

```typescript
function freeze(obj: Record<string, any>): Record<string, any> {
  return Object.freeze(obj);
}
```

A função `freeze` congela um objeto, impedindo a modificação de suas propriedades e a adição de novas propriedades.

## Assinatura

```typescript
function freeze(obj: Record<string, any>): Record<string, any>;
```

## Parâmetros

- **`obj`** (`Record<string, any>`): O objeto que será congelado, impedindo alterações em suas propriedades.

## Retorno

- **`Record<string, any>`**: O objeto congelado, que não pode ser alterado (nenhuma propriedade pode ser adicionada, removida ou modificada).

## Exemplos

```typescript
const obj = { a: 1, b: 2 };
const frozenObj = freeze(obj);

frozenObj.a = 3; // Não tem efeito
frozenObj.c = 4; // Não é adicionado
console.log(frozenObj); // { a: 1, b: 2 }
```

## Notas

- **Congelamento superficial**: A função congela o objeto apenas na superfície. Se o objeto contiver propriedades que são objetos, essas propriedades não serão congeladas (o congelamento é apenas no nível do objeto principal).
  
- **Objetos aninhados**: Para congelar objetos aninhados de forma recursiva, é necessário usar uma função como `deepFreeze`, que aplica o congelamento a todos os níveis do objeto.

## Referências

- [Object.freeze() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)