# getRandom

```typescript
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

La función `getRandom` devuelve un elemento aleatorio del array.

## Firma

```typescript
function getRandom<T>(arr: T[]): T;
```

### Parámetros

- **`arr`** (`T[]`): El array del cual se seleccionará un elemento aleatorio.

### Retorno

- **`T`**: Un elemento aleatorio del array.

## Ejemplos

```typescript
console.log(getRandom([1, 2, 3, 4, 5])); // Puede devolver cualquier elemento del array
```

## Notas

- La función usa `Math.random` y `Math.floor` para seleccionar un índice aleatorio del array.

## Referencias

- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
