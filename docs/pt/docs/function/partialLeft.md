# partialLeft

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...partial, ...args);
}
```

A função `partialLeft` cria uma nova função que aplica parcialmente os primeiros argumentos fornecidos para a função original, deixando os outros argumentos para serem fornecidos posteriormente.

## Assinatura

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parâmetros

- **`callback`** (`(...args: any[]) => T`): A função à qual os argumentos parciais serão aplicados.
- **`...partial`** (`any[]`): Os argumentos que serão aplicados à função original, à esquerda (no início da lista de argumentos).

### Retorno

- **`(...args: any[]) => T`**: Retorna uma nova função que, quando chamada, combina os argumentos parciais já fornecidos com os novos argumentos fornecidos no momento da invocação e executa a função original.

## Exemplos

```typescript
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;

const greetWithHello = partialLeft(greet, 'Hello');

console.log(greetWithHello('John')); // 'Hello, John!'
```

## Notas

- A função `partialLeft` aplica os argumentos parciais à esquerda, ou seja, na frente da lista de argumentos fornecidos.
- Esta abordagem é útil para criar versões de funções com argumentos predefinidos, evitando a necessidade de repetir esses argumentos em chamadas subsequentes.

## Referências

- [Function.prototype.apply() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)