# isRegExp

```typescript
function isRegExp(value: unknown): boolean
```

A função `isRegExp` verifica se o valor fornecido é uma instância de `RegExp` (expressão regular).

## Assinatura

```typescript
function isRegExp(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma instância de `RegExp`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isRegExp(/abc/)); // true
console.log(isRegExp(new RegExp("abc"))); // true
console.log(isRegExp("abc")); // false
console.log(isRegExp({})); // false
```

## Notas

- A função utiliza o operador `instanceof` para verificar se o valor é uma instância de `RegExp`.
- O `instanceof` garante que a verificação é realizada de forma precisa, considerando que `RegExp` é uma função construtora e tem comportamentos e propriedades específicos.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)