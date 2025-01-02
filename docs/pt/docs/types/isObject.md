# isObject

```typescript
function isObject(value: unknown): boolean
```

A função `isObject` verifica se o valor fornecido é do tipo `object`, utilizando a função `getType` para determinar o tipo exato.

## Assinatura

```typescript
function isObject(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for do tipo `object`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isObject({})); // true
console.log(isObject([])); // true (arrays são considerados objetos em JavaScript)
console.log(isObject(null)); // false (null não é um objeto, apesar de ser considerado assim por algumas verificações)
console.log(isObject("string")); // false
console.log(isObject(42)); // false
```

## Notas

- A função utiliza a função `getType` para verificar o tipo do valor. A função `getType` provavelmente retorna uma string representando o tipo exato do valor, permitindo distinguir entre diferentes tipos de objetos, como arrays e objetos literais.
- A função considera arrays como objetos, o que é um comportamento esperado em JavaScript, onde arrays também são instâncias de `object`.

## Referências

- [typeof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
