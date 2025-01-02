# isNegative

```typescript
function isNegative(str: string): boolean
```
Verifica se a string fornecida representa um número negativo, com ou sem parte decimal.

## Assinatura

```typescript
function isNegative(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string representar um número negativo válido, com ou sem parte decimal. Retorna `false` caso contrário.

## Exemplos

```typescript
console.log(isNegative("-123")); // true
console.log(isNegative("-123.45")); // true
console.log(isNegative("123")); // false
console.log(isNegative("0")); // false
console.log(isNegative("-0.5")); // true
```

## Notas

- A função permite tanto números inteiros negativos quanto números decimais negativos.
- A expressão regular verifica se a string começa com um sinal de menos (`-`), seguido por um ou mais dígitos, e opcionalmente uma parte decimal.
  
## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)