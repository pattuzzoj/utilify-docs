# capitalize

```typescript
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
```

A função `capitalize` recebe uma string e retorna uma nova string com a primeira letra em maiúscula, mantendo o restante das letras inalteradas. É útil para garantir que a primeira letra de uma string esteja em maiúscula, como em títulos ou nomes próprios.

## Assinatura

```typescript
function capitalize(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser capitalizada.

### Retorno

- **`string`**: A string com a primeira letra em maiúscula e o restante das letras inalteradas.

## Exemplos

```typescript
console.log(capitalize("hello")); // "Hello"
console.log(capitalize("world")); // "World"
```

## Notas

- Apenas a primeira letra será alterada para maiúscula; o restante da string permanece inalterado.

## Referências

- [String.prototype.charAt() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.prototype.toUpperCase() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)