# isFunction

### Código-fonte

```typescript
export default function isFunction(value: unknown): boolean {
  return typeof value === "function";
}
```

**Descrição**:  
A função `isFunction` verifica se o valor fornecido é uma função.

## Assinatura

```typescript
function isFunction(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Retorno

- **`boolean`**: Retorna `true` se o valor for uma função, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isFunction(function() {})); // true
console.log(isFunction(123)); // false
```

### Explicação dos Exemplos

1. **`isFunction(function() {})`**: Verifica se a função anônima é uma função.
2. **`isFunction(123)`**: Verifica se o número 123 é uma função.

## Notas

- A função retorna `false` para qualquer valor que não seja uma função.

## Referências

- [MDN Web Docs: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)