# djb2

```typescript
export default function djb2(str: string): string {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```

A função `djb2` implementa o algoritmo de hash DJB2, que gera um valor de hash baseado em uma string. Este algoritmo é simples, eficiente e amplamente utilizado em diversos contextos, como na criação de funções hash para tabelas de dispersão.

## Assinatura

```typescript
function djb2(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string de entrada para a qual o hash será gerado.

### Retorno

- **`string`**: A representação em string do valor de hash gerado pela função.

## Exemplos

```typescript
console.log(djb2("hello")); // "99162322"
console.log(djb2("world")); // "10252057"
```

## Notas

- O valor de hash gerado é um número inteiro positivo, convertido para string.
- O algoritmo utiliza uma multiplicação constante (`33`) e uma operação XOR para gerar o hash.
- A operação `>>> 0` é usada para garantir que o valor do hash seja tratado como um número de 32 bits sem sinal.

## Referências

- [DJB2 Hashing Algorithm - Wikipedia](https://en.wikipedia.org/wiki/DJB2)