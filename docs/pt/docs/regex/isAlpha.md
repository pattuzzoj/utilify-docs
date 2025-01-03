# isAlpha

```typescript
function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}
```

Verifica se a string contém apenas caracteres alfabéticos (A-Z, a-z).

## Assinatura

```typescript
function isAlpha(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string contiver apenas caracteres alfabéticos, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isAlpha("Hello")); // true
console.log(isAlpha("Hello123")); // false
console.log(isAlpha("123")); // false
```

## Notas

- A função verifica apenas caracteres alfabéticos, sem considerar números, espaços ou caracteres especiais.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)