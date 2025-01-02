# isUndefined

```typescript
function isUndefined(value: unknown): boolean
```

A função `isUndefined` verifica se o valor fornecido é do tipo `undefined`.

## Assinatura

```typescript
function isUndefined(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for do tipo `undefined`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isUndefined(undefined)); // true
console.log(isUndefined(null)); // false
console.log(isUndefined(123)); // false
console.log(isUndefined("hello")); // false
```

## Notas

- A função utiliza o operador `typeof` para verificar se o valor é do tipo `undefined`.
- O operador `typeof` é uma maneira eficiente de verificar se um valor é `undefined`, já que retorna `"undefined"` para valores desse tipo.

## Referências

- [undefined - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)