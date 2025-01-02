# isDeno

```typescript
export default function isDeno(): boolean {
  return typeof Deno === 'object' && 'version' in Deno;
}
```

Verifica se o código está sendo executado no ambiente **Deno**. Retorna `true` se a variável `Deno` existir e tiver a propriedade `version`, indicando que o ambiente é **Deno**, e `false` caso contrário.

## Assinatura

```typescript
function isDeno(): boolean;
```

### Retorno

- **`boolean`**: Retorna `true` se o código estiver sendo executado no ambiente **Deno**, e `false` caso contrário.

## Exemplos

```typescript
console.log(isDeno()); // true se executado no Deno, false caso contrário
```

## Notas

- **Deno** é um ambiente de execução JavaScript/TypeScript de próxima geração, semelhante ao Node.js, mas com um foco maior em segurança e simplicidade. Ele expõe a variável global `Deno`, que contém propriedades como `version`.
- A função verifica especificamente a existência de `version` dentro de `Deno` como uma forma de identificar esse ambiente.

## Referências

- [Deno](https://docs.deno.com/)