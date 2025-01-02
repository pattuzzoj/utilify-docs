# isFalsy

### Código-fonte

```typescript
export default function isFalsy(value: any): boolean {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}
```

**Descrição**:  
A função `isFalsy` verifica se o valor fornecido é um valor falsy.

## Assinatura

```typescript
function isFalsy(value: any): boolean;
```

### Parâmetros

- **`value`** (`any`): O valor a ser verificado.

### Retorno

- **`boolean`**: Retorna `true` se o valor for falsy, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isFalsy(0)); // true
console.log(isFalsy("hello")); // false
```

### Explicação dos Exemplos

1. **`isFalsy(0)`**: Verifica se o número 0 é um valor falsy.
2. **`isFalsy("hello")`**: Verifica se a string "hello" é um valor falsy.

## Notas

- A função considera os valores `undefined`, `null`, `false`, `NaN`, `0`, `0n` e `""` como falsy.

## Referências

- [MDN Web Docs: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)