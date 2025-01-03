# omit

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return (Object.keys(obj) as K[]).reduce((result, key) => {
    if (!keys.includes(key)) {
      (result as T)[key] = obj[key];
    }
    
    return result;
  }, {} as Omit<T, K>);
}
```

A função `omit` cria um novo objeto sem as propriedades especificadas, removendo as chaves indicadas do objeto original.

## Assinatura

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
```

## Parâmetros

- **`obj`** (`T`): O objeto do qual as propriedades serão omitidas.
- **`keys`** (`K[]`): Um array contendo as chaves que devem ser omitidas do objeto.

## Retorno

- **`Omit<T, K>`**: Retorna um novo objeto do tipo `T`, mas sem as propriedades cujas chaves estão presentes no array `keys`.

## Exemplos

```typescript
const obj = { a: 1, b: 2, c: 3 };
const result = omit(obj, ['b', 'c']);
console.log(result); // { a: 1 }
```

## Notas

- A função não altera o objeto original. Ela retorna um novo objeto.
- O tipo de retorno garante que as propriedades omitidas sejam removidas do tipo resultante.

## Referências

- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Mapped Types - TypeScript](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)