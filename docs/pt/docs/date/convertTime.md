# convertTime

```typescript
type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days";

function convertTime(time: number, from: TimeUnit, to: TimeUnit): number {
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}
```

A função `convertTime` converte um valor de tempo entre diferentes unidades, como milissegundos, segundos, minutos, horas e dias.

## Assinatura

```typescript
function convertTime(time: number, from: TimeUnit, to: TimeUnit): number;
```

### Parâmetros

- **`time`** (`number`): O valor de tempo a ser convertido.
- **`from`** (`TimeUnit`): A unidade original do tempo. Pode ser:
  - `"milliseconds"`
  - `"seconds"`
  - `"minutes"`
  - `"hours"`
  - `"days"`
- **`to`** (`TimeUnit`): A unidade desejada para conversão. Pode ser as mesmas opções de `from`.

### Retorno

- **`number`**: O valor convertido, arredondado para baixo.

## Exemplos

```typescript
console.log(convertTime(5000, "milliseconds", "seconds")); // 5
console.log(convertTime(2, "hours", "minutes"));           // 120
console.log(convertTime(3, "days", "hours"));              // 72
console.log(convertTime(1, "days", "milliseconds"));       // 86400000
console.log(convertTime(120, "minutes", "hours"));         // 2
```

## Notas

- A função usa fatores de conversão fixos para calcular a conversão de uma unidade de tempo para outra.
- O resultado é arredondado para o número inteiro inferior usando `Math.floor`.
- Se os parâmetros `from` ou `to` forem inválidos (fora das opções em `TimeUnit`), a função pode causar um erro de execução.

## Referências

- [Date and Time - JavaScript Guide - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)