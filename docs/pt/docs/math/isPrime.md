# isPrime

```typescript
export default function isPrime(num: number): boolean {
  if(num === 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}
```

A função `isPrime` verifica se um número é primo. Um número primo é um número maior que 1 que só pode ser dividido por 1 e por ele mesmo.

## Assinatura

```typescript
function isPrime(num: number): boolean;
```

### Parâmetros

- **`num`** (`number`): O número a ser verificado.

### Retorno

- **`boolean`**: Retorna `true` se o número for primo, e `false` caso contrário.

## Exemplos

```typescript
import { isPrime } from "./isPrime";

console.log(isPrime(1)); 
// false

console.log(isPrime(2)); 
// true

console.log(isPrime(3)); 
// true

console.log(isPrime(4)); 
// false

console.log(isPrime(17)); 
// true
```

## Notas

- O número 1 não é considerado primo.
- O número 2 é o único número primo par.
- Para otimizar a verificação, a função verifica divisores até a raiz quadrada do número, o que reduz o tempo de execução.
- A função também descarta rapidamente números pares maiores que 2, já que eles não podem ser primos.

## Referências

- [Números Primos - Wikipedia](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)
- [Math.sqrt() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)