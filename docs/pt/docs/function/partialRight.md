# partialRight

```typescript
export default function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...args, ...partial);
}
```

A função `partialRight` cria uma nova função que aplica parcialmente os últimos argumentos fornecidos para a função original, deixando os outros argumentos para serem fornecidos posteriormente.

## Assinatura

```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => T`): A função à qual os argumentos parciais serão aplicados.
- **`...partial`** (`any[]`): Os argumentos que serão aplicados à função original, à direita (no final da lista de argumentos).

### Retorno

- **`(...args: any[]) => T`**: Retorna uma nova função que, quando chamada, combina os novos argumentos fornecidos no momento da invocação com os argumentos parciais já fornecidos e executa a função original.

## Exemplos

```typescript
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;

const greetWithJohn = partialRight(greet, 'John');

console.log(greetWithJohn('Hello')); // 'Hello, John!'
```

## Notas

- A função `partialRight` aplica os argumentos parciais à direita, ou seja, no final da lista de argumentos fornecidos.
- Esta abordagem é útil para criar versões de funções com argumentos predefinidos no final, evitando a necessidade de repetir esses argumentos em chamadas subsequentes.

## Referências

- [Function.prototype.apply() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)