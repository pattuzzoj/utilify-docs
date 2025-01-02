# isEqualType

```typescript
function isEqualType(value1: unknown, value2: unknown): boolean
```

A função `isEqualType` verifica se dois valores são do mesmo tipo.

## Assinatura

```typescript
function isEqualType(value1: unknown, value2: unknown): boolean;
```

### Parâmetros

- **`value1`** (`unknown`): Primeiro valor a ser comparado.
- **`value2`** (`unknown`): Segundo valor a ser comparado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se ambos os valores forem do mesmo tipo, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isEqualType(42, 7)); // true
console.log(isEqualType("hello", 42)); // false
console.log(isEqualType([], {})); // false
```