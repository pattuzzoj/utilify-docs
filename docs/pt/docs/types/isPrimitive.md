# isPrimitive

```typescript
function isPrimitive(value: unknown): boolean
```

A função `isPrimitive` verifica se o valor fornecido é um tipo primitivo. Tipos primitivos incluem `string`, `number`, `boolean`, `symbol`, `undefined` e `null`.

## Assinatura

```typescript
function isPrimitive(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for um tipo primitivo (incluindo `null`), ou `false` caso contrário.

## Exemplos

```typescript
console.log(isPrimitive(42)); // true
console.log(isPrimitive("string")); // true
console.log(isPrimitive(true)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
console.log(isPrimitive(function() {})); // false
```

## Notas

- A função utiliza o operador `typeof` para verificar se o valor é um tipo primitivo. Caso o valor seja um objeto ou função, ele será considerado como não primitivo.
- O valor `null` é tratado como primitivo, pois em JavaScript, `typeof null` retorna `"object"`, mas conceitualmente é considerado um tipo primitivo.

## Referências

- [typeof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)