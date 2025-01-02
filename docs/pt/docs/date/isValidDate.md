# isValidDate

```typescript
export default function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
```

A função `isValidDate` verifica se um valor fornecido é uma instância válida de `Date`.

## Assinatura

```typescript
function isValidDate(date: Date): boolean;
```

### Parâmetros

- **`date`** (`Date`): O objeto a ser validado como uma instância de data válida.

### Retorno

- **`boolean`**:
  - Retorna `true` se o valor fornecido for um objeto `Date` válido.
  - Retorna `false` caso contrário.

## Exemplos

```typescript
console.log(isValidDate(new Date())); // true (data atual válida)
console.log(isValidDate(new Date("invalid"))); // false (data inválida)
console.log(isValidDate(new Date(2023, 11, 30))); // true (data válida: 30 de dezembro de 2023)
console.log(isValidDate("2023-12-30")); // false (não é um objeto Date)
```

## Notas

- Uma data é considerada inválida se `date.getTime()` retornar `NaN`.
- A função verifica se o valor fornecido é de fato uma instância de `Date` antes de validar sua validade.

## Referências

- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)