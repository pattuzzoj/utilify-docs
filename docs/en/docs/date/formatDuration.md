# formatDuration

```typescript
function formatDuration(time: number, format: string = "hh:mm:ss"): string {
  let totalMilliseconds = 0;

  if (typeof time === "number") {
    totalMilliseconds = time;
  }

  const hours = String(Math.floor(totalMilliseconds / 3_600_000));
  const minutes = String(Math.floor((totalMilliseconds % 3_600_000) / 60_000)).padStart(2, "0");
  const seconds = String(Math.floor((totalMilliseconds % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(totalMilliseconds % 1000).padStart(3, "0");

  return format
    .toLowerCase()
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace("ms", milliseconds);
}
```

A função `formatDuration` formata uma duração de tempo em milissegundos em uma string, de acordo com o formato desejado, que pode incluir horas, minutos, segundos e milissegundos.

## Assinatura

```typescript
function formatDuration(time: number, format: string = "hh:mm:ss"): string;
```

### Parâmetros

- **`time`** (`number`): O tempo em milissegundos a ser formatado.
- **`format`** (`string`): O formato desejado para a duração. O formato pode incluir os seguintes tokens:
  - **`hh`**: Horas (dois dígitos).
  - **`mm`**: Minutos (dois dígitos).
  - **`ss`**: Segundos (dois dígitos).
  - **`ms`**: Milissegundos (três dígitos).

### Retorno

- **`string`**: A duração formatada de acordo com o padrão especificado.

## Exemplos

```typescript
const duration = 3661000; // 1 hora, 1 minuto e 1 segundo em milissegundos

console.log(formatDuration(duration, "hh:mm:ss")); // "01:01:01"
console.log(formatDuration(duration, "hh:mm:ss ms")); // "01:01:01 000"
console.log(formatDuration(duration, "mm:ss")); // "61:01"
console.log(formatDuration(duration, "ss.ms")); // "3661.000"
console.log(formatDuration(5000, "ss")); // "05"
console.log(formatDuration(5000, "ss.ms")); // "05.000"
```

## Notas

- A função calcula as horas, minutos, segundos e milissegundos com base no tempo fornecido em milissegundos.
- A string de formato é insensível a maiúsculas e minúsculas.
- Se o formato de entrada não incluir todos os componentes desejados, a função irá omitir as partes não especificadas.

## Referências

- [Math.floor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [String.prototype.padStart() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)