# isSlug

```typescript
function isSlug(str: string): boolean
```
Verifica se a string fornecida está no formato de "slug", ou seja, uma string composta por letras minúsculas, números e separada por hífens.

## Assinatura

```typescript
function isSlug(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string estiver no formato de slug (letras minúsculas, números e separação por hífens). Retorna `false` caso contrário.

## Exemplos

```typescript
console.log(isSlug("my-slug")); // true
console.log(isSlug("my_slug")); // false
console.log(isSlug("my-slug-123")); // true
console.log(isSlug("My-Slug")); // false
console.log(isSlug("123-abc")); // true
```

## Notas

- A função permite letras minúsculas (a-z), números (0-9) e hífens entre palavras.
- Não permite caracteres especiais, espaços ou letras maiúsculas.
- Um "slug" válido começa e termina com uma letra ou número e pode ter um ou mais hífens como separadores.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)