# isPromise

```typescript
function isPromise(value: object): boolean
```

A função `isPromise` verifica se o valor fornecido é uma instância de `Promise`.

## Assinatura

```typescript
function isPromise(value: object): boolean;
```

### Parâmetros

- **`value`** (`object`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma instância de `Promise`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isPromise(new Promise((resolve) => resolve()))); // true
console.log(isPromise({})); // false
console.log(isPromise([])); // false
console.log(isPromise("string")); // false
```

## Notas

- A função utiliza o operador `instanceof` para verificar se o valor é uma instância de `Promise`.
- O `instanceof` garante que a verificação é realizada de forma precisa para instâncias de `Promise`, considerando suas propriedades específicas.

## Referências

- [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)