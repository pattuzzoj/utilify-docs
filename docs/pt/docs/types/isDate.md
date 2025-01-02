# isDate

```typescript
function isDate(value: Date): boolean
```

A função `isDate` verifica se um valor é uma instância de `Date`.

## Assinatura

```typescript
function isDate(value: Date): boolean;
```

### Parâmetros

- **`value`** (`Date`): Valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma instância de `Date`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isDate(new Date())); // true
console.log(isDate("2023-01-01")); // false
```