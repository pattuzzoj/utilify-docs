# convertDate

```typescript
import { isValidDate } from ".";

type DateFormat = "string" | "utc" | "iso";

export default function convertDate(date: Date, format: DateFormat): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}
```

A função `convertDate` converte um objeto de data (`Date`) para diferentes formatos de string.

## Assinatura

```typescript
function convertDate(date: Date, format: DateFormat): string | undefined;
```

### Parâmetros

- **`date`** (`Date`): O objeto de data a ser convertido.
- **`format`** (`DateFormat`): O formato desejado para a data convertida. Pode ser:
  - `"string"`: Retorna a representação padrão da data.
  - `"utc"`: Retorna a data em formato UTC.
  - `"iso"`: Retorna a data em formato ISO 8601.

### Retorno

- **`string | undefined`**:
  - Uma string representando a data no formato especificado.
  - `undefined` se a data fornecida for inválida.

## Exemplos

```typescript
const date = new Date("2024-12-31T23:59:59Z");

console.log(convertDate(date, "string")); // "Tue Dec 31 2024 23:59:59 GMT+0000 (Coordinated Universal Time)"
console.log(convertDate(date, "utc"));    // "Tue, 31 Dec 2024 23:59:59 GMT"
console.log(convertDate(date, "iso"));    // "2024-12-31T23:59:59.000Z"

console.log(convertDate(new Date("invalid-date"), "iso")); // undefined (com log de erro)
```

## Notas

- A validação do objeto `Date` é feita com a função `isValidDate`, que garante que apenas datas válidas sejam processadas.
- Se o formato especificado for inválido, a função retornará a representação padrão (`toString()`).
- A função usa métodos nativos do JavaScript para conversões de data.

## Referências

- [Date.prototype.toString() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
- [Date.prototype.toUTCString() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
- [Date.prototype.toISOString() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)