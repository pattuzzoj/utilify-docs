# adjustTimezone

```typescript
import { isValidDate } from ".";

export default function adjustTimezone(date: Date, timezoneOffset: number): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
```

A função `adjustTimezone` ajusta a instância de uma data para um fuso horário específico, considerando o deslocamento em minutos do fuso horário de destino.

## Assinatura

```typescript
function adjustTimezone(date: Date, timezoneOffset: number): Date;
```

### Parâmetros

- **`date`** (`Date`): A instância de data que será ajustada.
- **`timezoneOffset`** (`number`): O deslocamento do fuso horário em minutos em relação ao UTC. Valores positivos indicam fusos horários à frente do UTC, e valores negativos indicam fusos horários atrás do UTC.

### Retorno

- **`Date`**: Uma nova instância de `Date` ajustada para o fuso horário especificado. Se a data fornecida for inválida, retorna uma instância inválida de `Date` (`new Date(NaN)`).

## Exemplos

```typescript
const date = new Date("2024-01-01T12:00:00Z"); // 1 de janeiro de 2024, 12:00 UTC

console.log(adjustTimezone(date, -300)); // 1 de janeiro de 2024, 07:00 (UTC-5)
console.log(adjustTimezone(date, 60)); // 1 de janeiro de 2024, 13:00 (UTC+1)
console.log(adjustTimezone(date, 0)); // 1 de janeiro de 2024, 12:00 (UTC)
console.log(adjustTimezone(new Date(NaN), 60)); // Invalid date, retorna Date inválida
```

## Notas

- A função considera o deslocamento atual da data (`getTimezoneOffset`) e ajusta o valor com base na diferença entre o deslocamento atual e o deslocamento de destino.
- A data fornecida não é modificada; uma nova instância ajustada é retornada.
- Se a data for inválida, um erro será registrado no console, e uma instância inválida de `Date` será retornada.

## Referências

- [Date.prototype.getTimezoneOffset() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [UTC and time zones - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#utc_and_time_zones)