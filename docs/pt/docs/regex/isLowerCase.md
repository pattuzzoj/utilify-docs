# isLowerCase

```typescript
function isLowerCase(str: string): boolean
```
Verifica se a string fornecida está completamente em minúsculas, desconsiderando espaços em branco.

## Assinatura

```typescript
function isLowerCase(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string contiver apenas caracteres minúsculos, desconsiderando os espaços em branco. Retorna `false` caso contrário.

## Exemplos

```typescript
console.log(isLowerCase("hello world")); // true
console.log(isLowerCase("Hello world")); // false
console.log(isLowerCase("hello world 123")); // true
console.log(isLowerCase("HELLO WORLD")); // false
```

## Notas

- A função desconsidera espaços em branco na string ao realizar a verificação.
- A expressão regular garante que não haja letras maiúsculas e que ao menos uma letra minúscula esteja presente na string.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)