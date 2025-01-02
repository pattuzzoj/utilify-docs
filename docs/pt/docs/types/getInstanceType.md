# getInstanceType

```typescript
function getInstanceType(value: object): string | undefined {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}
```
 
A função `getInstanceType` retorna o tipo da instância de um objeto como uma string em letras minúsculas. Útil para identificar o tipo específico de um objeto em tempo de execução.

## Assinatura

```typescript
function getInstanceType(value: object): string | undefined;
```

### Parâmetros

- **`value`** (`object`): O objeto do qual se deseja obter o tipo da instância.

### Retorno

- **`string | undefined`**: O nome do tipo da instância em letras minúsculas, ou `undefined` se o valor não for um objeto válido.

## Exemplos

```typescript
const date = new Date();
console.log(getInstanceType(date)); // "date"

const arr = new Array();
console.log(getInstanceType(arr)); // "array"

console.log(getInstanceType(null)); // undefined (e mostra erro no console)
```

### Explicação dos Exemplos

1. **`getInstanceType(date)`**: Retorna "date" pois o objeto é uma instância de Date.
2. **`getInstanceType(arr)`**: Retorna "array" pois o objeto é uma instância de Array.
3. **`getInstanceType(null)`**: Retorna undefined e mostra um erro no console pois null não é um objeto válido.

## Notas

- A função exibe um erro no console e retorna `undefined` se o valor fornecido for `null` ou não for um objeto.
- O tipo retornado está sempre em letras minúsculas.
- Utiliza a propriedade `constructor.name` do objeto para determinar seu tipo.

## Referências

- [MDN Web Docs: Object.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [MDN Web Docs: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)