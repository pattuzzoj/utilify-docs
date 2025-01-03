# adjustDate

```typescript
import { isValidDate } from ".";

type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";

function adjustDate(date: Date, amount: number, unit: TimeUnit): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
```

A função `adjustDate` ajusta uma instância de `Date` adicionando ou subtraindo uma quantidade de tempo especificada em uma unidade específica.

## Assinatura

```typescript
function adjustDate(date: Date, amount: number, unit: TimeUnit): Date;
```

### Parâmetros

- **`date`** (`Date`): A instância de data que será ajustada.
- **`amount`** (`number`): A quantidade de tempo a ser ajustada. Pode ser positiva (para adicionar) ou negativa (para subtrair).
- **`unit`** (`TimeUnit`): A unidade de tempo que será ajustada. As opções disponíveis são:
  - `"milliseconds"`
  - `"seconds"`
  - `"minutes"`
  - `"hours"`
  - `"days"`
  - `"months"`
  - `"years"`

### Retorno

- **`Date`**: Uma nova instância de `Date` ajustada com base nos parâmetros fornecidos. Se a data for inválida ou a unidade for desconhecida, retorna uma instância inválida de `Date` (`new Date(NaN)`).

## Exemplos

```typescript
const date = new Date(2024, 0, 1, 12, 0, 0); // 1 de janeiro de 2024, 12:00

console.log(adjustDate(date, 10, "days")); // 11 de janeiro de 2024, 12:00
console.log(adjustDate(date, -2, "months")); // 1 de novembro de 2023, 12:00
console.log(adjustDate(date, 1, "years")); // 1 de janeiro de 2025, 12:00
console.log(adjustDate(date, 15, "minutes")); // 1 de janeiro de 2024, 12:15
console.log(adjustDate(date, 1, "invalidUnit" as TimeUnit)); // Invalid time unit, retorna Date inválida
```

## Notas

- A função cria uma nova instância de `Date` para evitar mutações no objeto original.
- Se a data fornecida for inválida, um erro será registrado no console, e uma instância inválida de `Date` será retornada.
- Se a unidade de tempo não for reconhecida, um erro será registrado no console.

## Referências

- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Date.prototype.setMilliseconds() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [Date.prototype.setSeconds() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [Date.prototype.setMinutes() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [Date.prototype.setHours() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [Date.prototype.setDate() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [Date.prototype.setMonth() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [Date.prototype.setFullYear() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)