# once

```typescript
export default function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T {
  let called = false;
  let result: T;

  return (...args: any[]): T => {
    if(!called) {
      called = true;
      result = callback(...args);
    };

    return result;
  }
}
```

A função `once` cria uma função que executa o callback fornecido apenas uma vez, independentemente de quantas vezes a função resultante seja chamada. Na primeira chamada, o callback é executado e seu resultado é retornado nas chamadas subsequentes.

## Assinatura

```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => T`): A função que será chamada apenas uma vez. O resultado dessa função será retornado para chamadas subsequentes.

### Retorno

- **`(...args: any[]) => T`**: Retorna uma nova função que executa o `callback` apenas na primeira chamada, retornando o resultado nas chamadas subsequentes.

## Exemplos

```typescript
const increment = (x: number) => x + 1;

const onceIncrement = once(increment);

console.log(onceIncrement(5)); // 6
console.log(onceIncrement(10)); // 6
```

## Notas

- O `callback` será executado apenas na primeira invocação, e o valor retornado será reutilizado nas chamadas subsequentes.
- Pode ser útil quando você precisa garantir que uma operação seja executada apenas uma vez, como em inicializações ou configurações de estado.

## Referências

- [Function.prototype.call - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)