# isDecimal

```typescript
function isDecimal(str: string): boolean {
  return /^\d+[.,]\d+$/.test(str);
}
```

Verifica se a string fornecida representa um número decimal, com ponto ou vírgula como separador decimal.

## Assinatura

```typescript
function isDecimal(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string representar um número decimal válido (com ponto ou vírgula como separador decimal), caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isDecimal("123.45")); // true
console.log(isDecimal("123,45")); // true
console.log(isDecimal("12345"));  // false
console.log(isDecimal("123.abc")); // false
```

## Notas

- A função considera tanto o ponto quanto a vírgula como separadores decimais válidos.
- A string deve conter números antes e depois do separador decimal para ser considerada válida.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)