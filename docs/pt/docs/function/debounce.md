# debounce

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void {
  let timerId: number;

  return (...args: any[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay) as unknown as number;
  }
}
```

A função `debounce` permite controlar a frequência de execução de uma função, garantindo que ela seja executada apenas após um certo período de tempo após a última chamada. Isso é útil para melhorar o desempenho em casos como eventos de digitação ou rolagem.

## Assinatura

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => void`): A função que será executada após o atraso especificado.
- **`delay`** (`number`): O tempo de espera (em milissegundos) antes que o `callback` seja executado após a última invocação. O valor padrão é `300`.

### Retorno

- **`(...args: any[]) => void`**: Retorna uma função que, quando chamada, vai adiar a execução do `callback` até que o tempo especificado por `delay` tenha passado desde a última chamada.

## Exemplos

```typescript
const logMessage = (message: string) => console.log(message);

const debouncedLogMessage = debounce(logMessage, 500);

debouncedLogMessage("Hello"); // A execução será adiada por 500ms
debouncedLogMessage("World"); // Somente após 500ms após o último "World" ser chamado
```

## Notas

- A função `debounce` é ideal para eventos de alta frequência como `scroll`, `resize`, e `input` em formulários.
- O `callback` será executado apenas depois de o tempo especificado em `delay` ter passado sem novas invocações da função resultante.
- Se a função resultante for chamada repetidamente antes que o `delay` expire, o contador de tempo será resetado.

## Referências

- [setTimeout() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)