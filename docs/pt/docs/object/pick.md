# pick

```typescript
export default function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}
```

A função `pick` cria um novo objeto contendo apenas as propriedades especificadas, com base nas chaves fornecidas.

## Assinatura

```typescript
function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
```

## Parâmetros

- **`obj`** (`T`): O objeto do qual as propriedades serão extraídas.
- **`keys`** (`K[]`): Um array contendo as chaves das propriedades que devem ser mantidas no novo objeto.

## Retorno

- **`Pick<T, K>`**: Retorna um novo objeto do tipo `T`, mas contendo apenas as propriedades cujas chaves estão presentes no array `keys`.

## Exemplos

```typescript
const obj = { a: 1, b: 2, c: 3 };
const result = pick(obj, ['a', 'c']);
console.log(result); // { a: 1, c: 3 }
```

## Notas

- A função não altera o objeto original. Ela retorna um novo objeto.
- O tipo de retorno garante que apenas as propriedades especificadas no array `keys` serão incluídas no objeto resultante.

## Referências

- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Mapped Types - TypeScript](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)