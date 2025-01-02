# isMap

```typescript
function isMap(value: unknown): boolean
```

A função `isMap` verifica se o valor fornecido é uma instância de `Map`.

## Assinatura

```typescript
function isMap(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for uma instância de `Map`, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isMap(new Map())); // true
console.log(isMap(new Set())); // false
console.log(isMap({})); // false
console.log(isMap([1, 2, 3])); // false
```

## Notas

- A função utiliza o operador `instanceof` para verificar se o valor é uma instância de `Map`.
- É útil para garantir que o valor é do tipo `Map` e não de outro tipo de estrutura de dados semelhante.

## Referências

- [Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)