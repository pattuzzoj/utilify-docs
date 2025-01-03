# isLeapYear

```typescript
function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```

A função `isLeapYear` determina se um ano fornecido é um ano bissexto.

## Assinatura

```typescript
function isLeapYear(year: number): boolean;
```

### Parâmetros

- **`year`** (`number`): O ano a ser verificado. Deve ser um número inteiro.

### Retorno

- **`boolean`**:
  - Retorna `true` se o ano for bissexto.
  - Retorna `false` se o ano não for bissexto.

## Exemplos

```typescript
console.log(isLeapYear(2024)); // true (2024 é bissexto)
console.log(isLeapYear(1900)); // false (1900 não é bissexto)
console.log(isLeapYear(2000)); // true (2000 é bissexto)
console.log(isLeapYear(2023)); // false (2023 não é bissexto)
```

## Notas

- Um ano é bissexto se for divisível por 4, mas não divisível por 100, a menos que também seja divisível por 400.
- O cálculo segue as regras estabelecidas pelo calendário gregoriano.

## Referências

- [Leap Year - Wikipedia](https://en.wikipedia.org/wiki/Leap_year)