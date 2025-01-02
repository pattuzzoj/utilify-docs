# isUpperCase

```typescript
function isUpperCase(str: string): boolean
```
Verifica se a string fornecida contém apenas letras maiúsculas, ignorando espaços em branco.

## Assinatura

```typescript
function isUpperCase(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string contiver apenas letras maiúsculas, ignorando espaços em branco. Retorna `false` caso contrário.

## Exemplos

```typescript
console.log(isUpperCase("HELLO")); // true
console.log(isUpperCase("Hello")); // false
console.log(isUpperCase("HELLO WORLD")); // true
console.log(isUpperCase("HELLO world")); // false
console.log(isUpperCase("12345")); // false
```

## Notas

- A função ignora espaços em branco na string ao realizar a verificação.
- Apenas letras maiúsculas são permitidas na string. Qualquer letra minúscula ou outro caractere resultará em `false`.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)