# rate

```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean {
  let calls = 0;

  return (...args: any[]): boolean => {
    if (calls < limit) {
      if(calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  }
}
```

A função `rate` limita a quantidade de vezes que uma função pode ser chamada em um intervalo específico. Após o limite ser atingido, novas chamadas são ignoradas até o término do intervalo.

## Assinatura

```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => void`): A função que será executada, mas que terá sua execução limitada pelo rate limiting.
- **`limit`** (`number`): O número máximo de vezes que a função `callback` pode ser chamada dentro do intervalo especificado.
- **`interval`** (`number`): O intervalo de tempo, em milissegundos, durante o qual o número de chamadas será limitado.

### Retorno

- **`(...args: any[]) => boolean`**: Retorna uma função que, quando chamada, verifica se a função `callback` pode ser executada. Retorna `true` se a execução for permitida, ou `false` se o limite de chamadas foi atingido dentro do intervalo.

## Exemplos

```typescript
const logMessage = (message: string) => console.log(message);

const rateLimitedLogMessage = rate(logMessage, 3, 1000);

rateLimitedLogMessage("Message 1"); // Executa
rateLimitedLogMessage("Message 2"); // Executa
rateLimitedLogMessage("Message 3"); // Executa
rateLimitedLogMessage("Message 4"); // Ignora (limite atingido)
```

## Notas

- A função `callback` será executada no máximo `limit` vezes dentro do intervalo `interval`. 
- Após o intervalo expirar, o contador de chamadas é resetado e as chamadas subsequentes serão permitidas.
- A função `rate` é útil para limitar a frequência de chamadas em cenários como eventos de clique, digitação, ou requisições a APIs externas.

## Referências

- [setTimeout() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)