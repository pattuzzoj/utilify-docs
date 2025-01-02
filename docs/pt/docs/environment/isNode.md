# isNode

```typescript
export default function isNode(): boolean {
  return typeof global !== "undefined" && typeof process !== "undefined";
}
```

Verifica se o código está sendo executado em um ambiente **Node.js**. Retorna `true` se estiver no ambiente Node.js, baseado na presença dos objetos globais `global` e `process`.

## Assinatura

```typescript
function isNode(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado no ambiente Node.js.
- **`false`**: Se o código não estiver em um ambiente Node.js, retorna `false`.

## Exemplos

```typescript
console.log(isNode()); // true se executado no Node.js, false caso contrário
```

## Notas

- A função verifica a presença dos objetos globais `global` e `process`, que são específicos do ambiente Node.js.
- Em ambientes de navegador ou outros ambientes não-Node.js, a função retornará `false`.

## Referências

- [Node](https://nodejs.org/)