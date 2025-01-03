# isValidDateString

```typescript
function isValidDateString(date: string) {
  return !isNaN(new Date(date).getTime());
}
```

A função `isValidDateString` verifica se uma string fornecida representa uma data válida.

## Assinatura

```typescript
function isValidDateString(date: string): boolean;
```

### Parâmetros

- **`date`** (`string`): Uma string que representa a data a ser validada.

### Retorno

- **`boolean`**: 
  - `true` se a string representa uma data válida.
  - `false` caso contrário.

## Exemplos

```typescript
console.log(isValidDateString("2024-12-31")); // true
console.log(isValidDateString("2024-02-29")); // true (ano bissexto)
console.log(isValidDateString("not-a-date")); // false
console.log(isValidDateString("2024-13-01")); // false (mês inválido)
console.log(isValidDateString("")); // false
```

## Notas

- A função utiliza o construtor `Date` do JavaScript para tentar criar uma instância da data fornecida.
- Datas inválidas resultam em um `NaN` quando `getTime()` é chamado, o que a função detecta e retorna `false`.
- A precisão da validação depende do suporte e comportamento do motor JavaScript para o formato de string de data.

## Referências

- [Date() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Number.isNaN() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)