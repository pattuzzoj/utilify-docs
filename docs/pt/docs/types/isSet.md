# isSet

```typescript
function isSet(value: unknown): boolean
```

A função `isSet` verifica se o valor fornecido é uma instância de `Set`.

## Assinatura

```typescript
function isSet(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma instância de `Set`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isSet(new Set([1, 2, 3]))); // true
console.log(isSet([1, 2, 3])); // false
console.log(isSet({ 1: "one", 2: "two" })); // false
```

## Notas

- A função utiliza o operador `instanceof` para verificar se o valor é uma instância de `Set`.
- O `instanceof` permite que a verificação seja precisa, considerando que `Set` é uma estrutura de dados incorporada que armazena valores únicos.

## Referências

- [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)