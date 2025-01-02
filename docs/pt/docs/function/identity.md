# identity

```typescript
export default function identity<T>(value: T): T {
  return value;
}
```

A função `identity` simplesmente retorna o valor fornecido, sem qualquer modificação. Ela é útil em situações em que você precisa de uma função que apenas retorne o argumento original, frequentemente usada em composições ou como valor de fallback.

## Assinatura

```typescript
function identity<T>(value: T): T;
```

### Parâmetros

- **`value`** (`T`): O valor que será retornado pela função.

### Retorno

- **`T`**: O valor fornecido, sem modificações.

## Exemplos

```typescript
console.log(identity(5)); // 5
console.log(identity("Hello")); // "Hello"
console.log(identity([1, 2, 3])); // [1, 2, 3]
```

**Saída esperada:**
```
5
"Hello"
[1, 2, 3]
```

## Notas

- A função `identity` é útil em contextos onde uma função é necessária, mas o comportamento desejado é simplesmente retornar o valor original.
- Pode ser utilizada em composições de funções ou como valor padrão em métodos de alta ordem.

## Referências

- [Function.prototype - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)