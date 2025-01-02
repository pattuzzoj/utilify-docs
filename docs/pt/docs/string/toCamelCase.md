# toCamelCase

```typescript
function toCamelCase(str: string): string {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

A função `toCamelCase` converte uma string para o formato camelCase, onde a primeira palavra fica em minúsculas e as palavras subsequentes começam com letras maiúsculas, sem espaços.

## Assinatura

```typescript
function toCamelCase(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser convertida para camelCase.

### Retorno

- **`string`**: A string convertida para o formato camelCase.

## Exemplos

```typescript
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("This is a test")); // "thisIsATest"
```

## Notas

- A função remove espaços em branco e converte todas as letras para minúsculas antes de realizar a transformação.
- A primeira palavra é mantida em minúsculas e as subsequentes são capitalizadas.

## Referências

- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)