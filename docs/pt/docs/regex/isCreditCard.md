# isCreditCard

```typescript
function isCreditCard(str: string): boolean {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(str);
}
```

Verifica se a string fornecida é um número de cartão de crédito válido, de acordo com diferentes bandeiras de cartões.

## Assinatura

```typescript
function isCreditCard(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string representar um número de cartão de crédito válido, de acordo com as bandeiras mais comuns, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isCreditCard("4111111111111111")); // true (Visa)
console.log(isCreditCard("5105105105105100")); // true (MasterCard)
console.log(isCreditCard("6011512345678901")); // true (Discover)
console.log(isCreditCard("1234567890123456")); // false
```

## Notas

- A função utiliza uma expressão regular para verificar a estrutura do número do cartão de crédito, abrangendo diferentes bandeiras como Visa, MasterCard, American Express, Discover, entre outras.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)