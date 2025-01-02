# isIterable

```typescript
function isIterable(obj: any): boolean {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```

A função `isIterable` verifica se o objeto é iterável.

## Assinatura

```typescript
function isIterable(obj: any): boolean;
```

### Parâmetros

- **`obj`** (`any`): O objeto a ser verificado.

### Retorno

- **`boolean`**: `true` se o objeto for iterável, caso contrário `false`.

## Exemplos

```typescript
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable(123)); // false
```

## Notas

- A função verifica se o objeto possui a propriedade `Symbol.iterator`.

## Referências

- [Symbol.iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
