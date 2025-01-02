# isBoolean

```typescript
function isBoolean(value: unknown): boolean
```

A função `isBoolean` verifica se um valor é do tipo `boolean`.

## Assinatura

```typescript
function isBoolean(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): Valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for um `boolean`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isBoolean(true)); // true
console.log(isBoolean(false)); // true
console.log(isBoolean(1)); // false
console.log(isBoolean('true')); // false
```