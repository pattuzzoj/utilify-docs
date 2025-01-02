# isNull

```typescript
function isNull(value: unknown): boolean
```

A função `isNull` verifica se o valor fornecido é `null`.

## Assinatura

```typescript
function isNull(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for `null`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isNull(null)); // true
console.log(isNull(undefined)); // false
console.log(isNull(0)); // false
console.log(isNull("")); // false
```

## Notas

- A função utiliza o operador de igualdade estrita (`===`) para comparar o valor com `null`, garantindo que somente o valor exato `null` seja considerado.
- Diferentemente do operador `==`, o `===` não faz conversões de tipo, o que torna a verificação mais precisa.

## Referências

- [null - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)