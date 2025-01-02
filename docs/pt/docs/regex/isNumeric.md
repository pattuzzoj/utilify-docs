# isNumeric

```typescript
export default function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}
```

Verifica se a string fornecida contém apenas números (0-9).

## Assinatura

```typescript
function isNumeric(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string contiver apenas números (0-9), caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isNumeric("12345"));  // true
console.log(isNumeric("123.45")); // false
console.log(isNumeric("abc123")); // false
console.log(isNumeric("0000123")); // true
```

## Notas

- A função considera apenas números inteiros como válidos (sem separadores de milhares ou decimais).

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)