# isServer

```typescript
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

function isServer(): boolean {
  return isNode() || isDeno() || isBun();
}
```

Verifica se o código está sendo executado em um ambiente de servidor. Retorna `true` se o ambiente for **Node.js**, **Deno**, ou **Bun**, ou `false` caso contrário.

## Assinatura

```typescript
function isServer(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado em um ambiente de servidor (Node.js, Deno, ou Bun).
- **`false`**: Se o código não estiver em um desses ambientes de servidor, retorna `false`.

## Exemplos

```typescript
console.log(isServer()); // true se executado no Node.js, Deno, ou Bun
```

## Notas

- A função utiliza outras funções utilitárias (`isNode`, `isDeno`, `isBun`) para identificar o ambiente de execução.
- Esta função é útil para realizar verificações de ambiente e garantir que o código seja executado apenas no servidor.

## Referências

- [Bun](https://bun.sh)
- [Deno](https://docs.deno.com/)
- [Node](https://nodejs.org/)