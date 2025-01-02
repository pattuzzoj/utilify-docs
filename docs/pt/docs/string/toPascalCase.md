# toPascalCase

```typescript
function toPascalCase(str: string): string {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

A função `toPascalCase` converte uma string para o formato PascalCase, onde cada palavra começa com uma letra maiúscula e as palavras são concatenadas sem espaços.

## Assinatura

```typescript
function toPascalCase(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser convertida para PascalCase.

### Retorno

- **`string`**: A string convertida para o formato PascalCase.

## Exemplos

```typescript
console.log(toPascalCase("hello world")); // "HelloWorld"
console.log(toPascalCase("this is a test")); // "ThisIsATest"
```

## Notas

- A função remove espaços em branco e converte a primeira letra de cada palavra para maiúscula antes de realizar a transformação.
  
## Referências

- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)