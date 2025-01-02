# isNumber

```typescript
function isNumber(value: unknown): boolean
```

A função `isNumber` verifica se o valor fornecido é do tipo `number`.

## Assinatura

```typescript
function isNumber(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for do tipo `number`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isNumber(42)); // true
console.log(isNumber(3.14)); // true
console.log(isNumber("string")); // false
console.log(isNumber(NaN)); // true
console.log(isNumber(undefined)); // false
```

## Notas

- A função utiliza o operador `typeof` para verificar o tipo do valor.
- Isso garante que apenas valores do tipo primitivo `number`, incluindo `NaN` (que é considerado um número em JavaScript), sejam reconhecidos.

## Referências

- [typeof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)