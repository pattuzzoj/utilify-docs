# throttle

```typescript
export default function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void {
  let timerId: number | null;

  return (...args: any[]): void => {
    if (!timerId) {
      timerId = setTimeout(() => timerId = null, wait) as any as number;
      callback(...args);
    }
  }
}
```

A função `throttle` limita a frequência com que uma função pode ser chamada. Ela garante que a função fornecida seja executada no máximo uma vez a cada intervalo de tempo especificado, útil em eventos de alta frequência como `scroll`, `resize` e `input` em formulários.

## Assinatura

```typescript
function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => void`): A função que será executada. Ela será chamada no máximo uma vez a cada `wait` milissegundos.
- **`wait`** (`number`): O intervalo de tempo (em milissegundos) que deve passar entre cada execução da função. O valor padrão é `300` ms.

### Retorno

- **`(...args: any[]) => void`**: Retorna uma nova função que, quando chamada, adia a execução do `callback` até que o intervalo `wait` tenha passado.

## Exemplos

```typescript
const logMessage = (message: string) => console.log(message);

const throttledLogMessage = throttle(logMessage, 1000);

throttledLogMessage("Hello");  // Executa imediatamente
throttledLogMessage("World");  // Ignorada até 1 segundo após a última execução
```

## Notas

- A função `throttle` é útil para limitar a execução de funções em eventos que ocorrem em rápida sucessão.
- O `callback` será executado apenas uma vez durante cada período de espera, mesmo que a função resultante seja chamada múltiplas vezes dentro desse intervalo.
- Se o valor de `wait` for `0`, o `callback` será executado imediatamente na primeira chamada e nunca será executado novamente até que o intervalo tenha terminado.

## Referências

- [setTimeout() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)