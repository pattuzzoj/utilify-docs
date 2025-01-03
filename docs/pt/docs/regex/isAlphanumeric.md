# isAlphanumeric

```typescript
function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}
```

Verifica se a string contém apenas caracteres alfanuméricos (A-Z, a-z, 0-9).

## Assinatura

```typescript
function isAlphanumeric(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string contiver apenas caracteres alfanuméricos, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isAlphanumeric("Hello123")); // true
console.log(isAlphanumeric("Hello 123")); // false
console.log(isAlphanumeric("123")); // true
console.log(isAlphanumeric("!@#")); // false
```

## Notas

- A função verifica apenas caracteres alfanuméricos, ou seja, letras (maiúsculas ou minúsculas) e números.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)