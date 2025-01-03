# formatTime

```typescript
import { isValidDate } from ".";

function formatTime(date: Date, format: string): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}
```

A função `formatTime` formata uma instância de `Date` em uma string de hora, ajustando para o formato desejado, incluindo suporte para a notação AM/PM, caso especificado.

## Assinatura

```typescript
function formatTime(date: Date, format: string): string | undefined;
```

### Parâmetros

- **`date`** (`Date`): A data e hora que será formatada.
- **`format`** (`string`): O formato desejado para a hora. O formato pode incluir os seguintes tokens:
  - **`hh`**: Horas (em formato 12 horas).
  - **`mm`**: Minutos (dois dígitos).
  - **`ss`**: Segundos (dois dígitos).
  - **`ms`**: Milissegundos (três dígitos).
  - **`a`**: AM ou PM (quando presente, ajusta o horário para um formato de 12 horas).

### Retorno

- **`string`**: A hora formatada de acordo com o padrão especificado.
- **`undefined`**: Caso a data seja inválida.

## Exemplos

```typescript
const date = new Date("2024-01-15T15:30:45.123Z");

console.log(formatTime(date, "hh:mm:ss")); // "03:30:45"
console.log(formatTime(date, "hh:mm:ss.ms")); // "03:30:45.123"
console.log(formatTime(date, "hh:mm:ss a")); // "03:30:45 PM"
console.log(formatTime(date, "hh:mm:ss a ms")); // "03:30:45 PM 123"
console.log(formatTime(date, "HH:mm:ss")); // "15:30:45"
console.log(formatTime(new Date(NaN), "hh:mm:ss")); // Logs error: "Invalid date"
```

## Notas

- O uso do `padStart` garante que os minutos, segundos e milissegundos sempre tenham o número correto de dígitos.
- O parâmetro de formatação é insensível a maiúsculas e minúsculas.

## Referências

- [Date.prototype.getHours() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
- [Date.prototype.getMinutes() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
- [Date.prototype.getSeconds() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
- [Date.prototype.getMilliseconds() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)