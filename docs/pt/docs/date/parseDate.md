# parseDate

A função `parseDate` converte uma string de data válida em um objeto `Date`. Se a string fornecida não for uma data válida, a função registra um erro no console e retorna `undefined`.

## Assinatura

```typescript
function parseDate(date: string): Date | undefined;
```

### Parâmetros

- **`date`** (`string`): A string representando a data que será convertida em um objeto `Date`. Deve ser uma string válida que pode ser analisada como uma data.

### Retorno

- **`Date | undefined`**: 
  - Retorna um objeto `Date` correspondente à string de data fornecida, caso seja válida.
  - Retorna `undefined` se a string não for uma data válida.

## Exemplos

```typescript
console.log(parseDate("2024-12-30T10:30:00")); // Date object: Mon Dec 30 2024 10:30:00
console.log(parseDate("invalid-date")); // undefined (e registra "Invalid date" no console)
```

## Notas

- A função depende de `isValidDateString` para verificar se a string fornecida é válida antes de criar o objeto `Date`.
- Um erro será registrado no console para strings de data inválidas.
- A validação prévia evita criar objetos `Date` inválidos que resultem em valores `Invalid Date`.

## Referências

- [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Date.parse() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)