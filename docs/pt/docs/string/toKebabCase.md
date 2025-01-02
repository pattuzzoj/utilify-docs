# toKebabCase

```typescript
function toKebabCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}
```

A função `toKebabCase` converte uma string para o formato kebab-case, onde todas as letras são minúsculas e os espaços são substituídos por hífens.

## Assinatura

```typescript
function toKebabCase(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser convertida para kebab-case.

### Retorno

- **`string`**: A string convertida para o formato kebab-case.

## Exemplos

```typescript
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("This is a test")); // "this-is-a-test"
```

## Notas

- A função remove espaços em branco e converte todas as letras para minúsculas antes de realizar a transformação.
  
## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)