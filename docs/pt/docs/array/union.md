# union

A função `union` retorna um novo array contendo os elementos únicos de todos os arrays fornecidos. É útil para combinar múltiplos arrays em um só sem duplicatas.

## Sintaxe

```typescript
function union<T>(...arrs: T[][]): T[];
```

### Parâmetros

| Nome   | Tipo     | Descrição                                              |
|--------|----------|--------------------------------------------------------|
| `arrs` | `T[][]`  | Os arrays a serem combinados.                          |

### Retorno

| Tipo   | Descrição                                              |
|--------|--------------------------------------------------------|
| `T[]`  | Um novo array contendo os elementos únicos de todos os arrays fornecidos. |

## Exemplos

```typescript
console.log(union([1, 2], [2, 3])); // [1, 2, 3]
console.log(union([1, 2], [3, 4], [4, 5])); // [1, 2, 3, 4, 5]
```

## Notas

- A ordem dos elementos no array retornado é determinada pela ordem de sua primeira aparição nos arrays de entrada.
- [unique](./unique.md): A função `unique` é usada para garantir que os elementos retornados no array final sejam únicos, eliminando duplicatas entre os arrays combinados.

## Código Fonte

::: code-group
```typescript
import unique from "./unique";

function union<T>(...arrs: T[][]): T[] {
  return unique(
    arrs.reduce((unionArr, arr) => {
      unionArr = [...unionArr, ...arr];
      return unionArr;
    }, [])
  );
}
```
```javascript
import unique from "./unique";

function union(...arrs) {
  return unique(
    arrs.reduce((unionArr, arr) => {
      unionArr = [...unionArr, ...arr];
      return unionArr;
    }, [])
  );
}
```
:::

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)