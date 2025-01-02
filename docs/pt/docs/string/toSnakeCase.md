# toSnakeCase

```typescript
function toSnakeCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}
```

A função `toSnakeCase` converte uma string para o formato snake_case, onde todas as letras são minúsculas e os espaços são substituídos por underscores.

## Assinatura

```typescript
function toSnakeCase(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser convertida para snake_case.

### Retorno

- **`string`**: A string convertida para o formato snake_case.

## Exemplos

```typescript
console.log(toSnakeCase("Hello World")); // "hello_world"
console.log(toSnakeCase("This is a test")); // "this_is_a_test"
```

## Notas

- A função remove espaços em branco e converte todas as letras para minúsculas antes de realizar a transformação.
  
## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)