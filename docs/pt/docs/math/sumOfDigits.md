# sumOfDigits

```typescript
export default function sumOfDigits(num: number): number {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
```

A função `sumOfDigits` calcula a soma dos dígitos de um número. Ela converte o número em uma string, separa os caracteres (dígitos), converte cada um de volta para um número e então soma todos os dígitos.

## Assinatura

```typescript
function sumOfDigits(num: number): number;
```

### Parâmetros

- **`num`** (`number`): O número do qual os dígitos serão somados.

### Retorno

- **`number`**: A soma de todos os dígitos do número fornecido.

## Exemplos

```typescript
console.log(sumOfDigits(12345)); 
// Exemplo: 15 (1 + 2 + 3 + 4 + 5)

console.log(sumOfDigits(9876)); 
// Exemplo: 30 (9 + 8 + 7 + 6)

console.log(sumOfDigits(0)); 
// Exemplo: 0 (não há dígitos a somar)
```

## Notas

- A função converte o número em uma string para dividir em caracteres, depois usa `parseInt` para garantir que cada dígito seja tratado como um número.
- O valor inicial da soma no `reduce()` é 0, garantindo que a operação comece com a soma vazia.

## Referências

- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)