# isSymbol

```typescript
function isSymbol(value: unknown): boolean
```

A função `isSymbol` verifica se o valor fornecido é do tipo `symbol`.

## Assinatura

```typescript
function isSymbol(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for do tipo `symbol`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isSymbol(Symbol("unique"))); // true
console.log(isSymbol(Symbol.iterator)); // true
console.log(isSymbol("symbol")); // false
console.log(isSymbol(123)); // false
```

## Notas

- A função utiliza o operador `typeof` para verificar se o valor é do tipo `symbol`.
- O `typeof` retorna `"symbol"` para valores do tipo `symbol`, o que torna a verificação simples e eficiente.

## Referências

- [symbol - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)