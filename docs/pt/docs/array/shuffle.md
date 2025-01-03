# shuffle

A função `shuffle` retorna um novo array com os elementos embaralhados em ordem aleatória. É útil para randomizar a ordem dos elementos em um array.

## Sintaxe

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parâmetros

| Nome  | Tipo   | Descrição                                      |
|-------|--------|------------------------------------------------|
| `arr` | `T[]`  | O array original a ser embaralhado.            |

### Retorno

| Tipo   | Descrição                                      |
|--------|------------------------------------------------|
| `T[]`  | Um novo array com os elementos embaralhados em ordem aleatória. |

## Exemplos

```typescript
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 4, 5, 2] (exemplo de saída)
```

## Notas

- O array original não é modificado.
- A ordem dos elementos no array retornado é aleatória.

## Código Fonte

::: code-group
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
```javascript
function shuffle(arr) {
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
:::

## Referências

- [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)