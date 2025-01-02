# slugify

```typescript
function slugify(str: string): string {
  return str
    .trim()
    .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
```

A função `slugify` converte uma string em um formato adequado para ser usada em URLs, removendo caracteres especiais e substituindo espaços por hífens. Isso é útil para criar slugs amigáveis em URLs.

## Assinatura

```typescript
function slugify(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser transformada em slug.

### Retorno

- **`string`**: A string convertida em slug.

## Exemplos

```typescript
console.log(slugify("Hello World!")); // "hello-world"
console.log(slugify("This is a test.")); // "this-is-a-test"
```

## Notas

- A função remove caracteres especiais usando uma expressão regular.
- Converte a string para minúsculas e substitui espaços por hífens.
- Remove acentos usando a normalização Unicode (`NFD`).

## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.normalize() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)