# guard

```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U {
  return (value: T): U => validator(value) ? callback(value) : fallback(value);
}
```

A função `guard` é usada para proteger a execução de uma função com base em uma validação. Ela executa a função `callback` se o `validator` retornar `true` e executa a função `fallback` se a validação falhar. Isso ajuda a controlar o fluxo de execução com base em condições específicas.

## Assinatura

```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U;
```

### Parâmetros

- **`validator`** (`(value: T) => boolean`): A função que valida o valor. Ela deve retornar `true` ou `false` dependendo da validade do valor.
- **`callback`** (`(value: T) => U`): A função a ser executada caso o `validator` retorne `true`.
- **`fallback`** (`(value: T) => U`): A função a ser executada caso o `validator` retorne `false`.

### Retorno

- **`(value: T) => U`**: Retorna uma função que, quando chamada, verifica o valor com o `validator` e, dependendo do resultado, executa a função `callback` ou `fallback`.

## Exemplos

```typescript
const isPositive = (value: number) => value > 0;
const double = (value: number) => value * 2;
const zero = (value: number) => 0;

const guardedFunction = guard(isPositive, double, zero);

console.log(guardedFunction(5)); // 10
console.log(guardedFunction(-5)); // 0
```

## Notas

- A função `guard` é útil para condicionar a execução de uma lógica específica a partir de uma validação.
- Ao utilizar `guard`, você pode controlar facilmente fluxos alternativos com base em condições de entrada.

## Referências

- [function - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)