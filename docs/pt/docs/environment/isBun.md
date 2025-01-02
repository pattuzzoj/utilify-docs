# isBun

```typescript
export default function isBun(): boolean {
  return typeof Bun === 'object' && 'version' in Bun;
}
```

Verifica se o código está sendo executado em um ambiente Bun, retornando `true` se o ambiente for Bun e `false` caso contrário. A função checa a presença do objeto global `Bun` e a propriedade `version`, que são características desse ambiente de execução.

## Assinatura

```typescript
function isBun(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado no Bun, e `false` caso contrário.

## Exemplos

```typescript
console.log(isBun()); // true se executado no Bun, false caso contrário
```

## Notas

- A função verifica a existência do objeto global `Bun` e sua propriedade `version`, que são exclusivos do ambiente Bun.
- Esta abordagem não se aplica a outros ambientes como Node.js ou navegadores, onde o objeto `Bun` não está presente.

## Referências

- [Bun](https://bun.sh)