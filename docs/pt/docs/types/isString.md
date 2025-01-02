# isString

```typescript
function isString(value: unknown): boolean
```

A função `isString` verifica se o valor fornecido é do tipo `string`.

## Assinatura

```typescript
function isString(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for do tipo `string`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isString("hello")); // true
console.log(isString("123")); // true
console.log(isString(123)); // false
console.log(isString([1, 2, 3])); // false
```

## Notas

- A função utiliza o operador `typeof` para verificar se o valor é uma string.
- O `typeof` é útil aqui, pois retorna `"string"` para valores do tipo `string`, o que facilita a verificação.

## Referências

- [typeof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)