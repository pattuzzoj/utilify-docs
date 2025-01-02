# isIterable

```typescript
function isIterable(obj: any): boolean {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```

La función `isIterable` verifica si el objeto es iterable.

## Firma

```typescript
function isIterable(obj: any): boolean;
```

### Parámetros

- **`obj`** (`any`): El objeto a verificar.

### Retorno

- **`boolean`**: `true` si el objeto es iterable, de lo contrario `false`.

## Ejemplos

```typescript
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable(123)); // false
```

## Notas

- La función verifica si el objeto tiene la propiedad `Symbol.iterator`.

## Referencias

- [Symbol.iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
