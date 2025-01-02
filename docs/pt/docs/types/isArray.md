# isArray

```typescript
function isArray(value: unknown): boolean
```

A função `isArray` verifica se o valor fornecido é uma matriz (`Array`).

## Assinatura

```typescript
function isArray(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma matriz, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isArray([1, 2, 3])); // true
console.log(isArray("string")); // false
console.log(isArray({ key: "value" })); // false
console.log(isArray(undefined)); // false
```

## Notas

- A função utiliza o método nativo `Array.isArray` para realizar a verificação de forma eficiente e confiável.
- É segura para verificar valores de qualquer tipo, incluindo `null` e `undefined`. 

## Referências

- [Array.isArray() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)