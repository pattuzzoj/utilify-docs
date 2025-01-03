# fallback

```typescript
function fallback<T>(callback: () => T, fallback: () => T): T {
  try {
    const result = callback();

    if (typeof result != "undefined") {
      return result;
    }

    throw new Error();
  } catch (error) {
    return fallback();
  }
}
```

A função `fallback` tenta executar uma função `callback` e, caso ocorra um erro ou o resultado seja `undefined`, executa uma função de substituição `fallback`. É útil quando você deseja garantir um valor seguro, mesmo quando a execução de uma função pode falhar.

## Assinatura

```typescript
function fallback<T>(callback: () => T, fallback: () => T): T;
```

### Parâmetros

- **`callback`** (`() => T`): A função que será executada inicialmente para gerar o valor.
- **`fallback`** (`() => T`): A função que será executada se a função `callback` falhar ou retornar `undefined`.

### Retorno

- **`T`**: Retorna o valor gerado pela função `callback`, ou o valor gerado pela função `fallback` caso a execução de `callback` falhe ou retorne `undefined`.

## Exemplos

```typescript
const getData = () => {
  const data = null; // Simulando um erro
  if (!data) throw new Error("Data not found");
  return data;
};

const fallbackData = () => "Fallback data";

const result = fallback(getData, fallbackData);
console.log(result); // "Fallback data"
```

**Saída esperada:**
```
Fallback data
```

## Notas

- A função `fallback` é útil para fornecer valores de reserva em caso de falhas ou erros na execução de uma função.
- Ela pode ser usada para garantir que sempre haja um valor retornado, evitando erros inesperados em fluxos de dados críticos.
  
## Referências

- [try...catch - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)