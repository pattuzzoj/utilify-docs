# isBigint

```typescript
function isBigint(value: unknown): boolean
```

A função `isBigint` verifica se um valor é do tipo `bigint`.

## Assinatura

```typescript
function isBigint(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): Valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for um `bigint`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isBigint(BigInt(9007199254740991))); // true
console.log(isBigint(123)); // false
console.log(isBigint("123")); // false
```