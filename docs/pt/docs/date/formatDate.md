Segue a documentação para a função `formatDate`:

---

# formatDate

```typescript
import { isValidDate } from ".";

type DateFormat = "DMY" | "MDY" | "YMD";

export default function formatDate(date: Date, format: DateFormat, separator: string = "/"): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      console.error(`Invalid date format: ${format}`);
      return;
  }
}
```

A função `formatDate` formata uma instância de `Date` em uma string, utilizando diferentes padrões de ordem de data e um separador personalizado.

## Assinatura

```typescript
function formatDate(date: Date, format: DateFormat, separator?: string): string | undefined;
```

### Parâmetros

- **`date`** (`Date`): A data que será formatada.
- **`format`** (`DateFormat`): O formato desejado para a data. Pode ser:
  - `"DMY"`: Dia/Mês/Ano.
  - `"MDY"`: Mês/Dia/Ano.
  - `"YMD"`: Ano/Mês/Dia.
- **`separator`** (`string`, opcional): O separador usado entre os elementos da data. O padrão é `"/"`.

### Retorno

- **`string`**: A data formatada de acordo com o padrão especificado.
- **`undefined`**: Caso a data seja inválida ou o formato especificado seja inválido.

## Exemplos

```typescript
const date = new Date("2024-01-15T00:00:00Z");

console.log(formatDate(date, "DMY")); // "15/01/2024"
console.log(formatDate(date, "MDY", "-")); // "01-15-2024"
console.log(formatDate(date, "YMD", ".")); // "2024.01.15"
console.log(formatDate(date, "XYZ")); // Logs error: "Invalid date format: XYZ"
console.log(formatDate(new Date(NaN), "DMY")); // Logs error: "Invalid date"
```

## Notas

- A função utiliza `padStart` para garantir que dias e meses sejam representados com dois dígitos.
- Um separador personalizado pode ser utilizado para maior flexibilidade no formato de saída.
- A data fornecida não é alterada; a função retorna uma nova representação em formato de string.
- Se a data for inválida, um erro será registrado no console, e `undefined` será retornado.

## Referências

- [Date.prototype.getDate() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
- [String.prototype.padStart() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)