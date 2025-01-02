# shuffle

```typescript
function shuffle<T>(arr: T[]): T[] {
  const shuffled = Array.from(arr);

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}
```

La función `shuffle` devuelve un nuevo array con los elementos mezclados en orden aleatorio. Es útil para aleatorizar el orden de los elementos en un array.

## Firma

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parámetros

- **`arr`** (`T[]`): El array original a mezclar.

### Retorno

- **`T[]`**: Un nuevo array con los elementos mezclados en orden aleatorio.

## Ejemplos

```typescript
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 4, 5, 2] (ejemplo de salida)
```

## Notas

- El array original no se modifica.
- El orden de los elementos en el array devuelto es aleatorio.

## Referencias

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
