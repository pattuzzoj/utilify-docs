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

A função `shuffle` retorna um novo array com os elementos embaralhados em ordem aleatória. É útil para randomizar a ordem dos elementos em um array.

## Assinatura

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parâmetros

- **`arr`** (`T[]`): O array original a ser embaralhado.

### Retorno

- **`T[]`**: Um novo array com os elementos embaralhados em ordem aleatória.

## Exemplos

```typescript
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 4, 5, 2] (exemplo de saída)
```

## Notas

- O array original não é modificado.
- A ordem dos elementos no array retornado é aleatória.

## Referências

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
