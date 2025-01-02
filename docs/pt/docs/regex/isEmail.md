# isEmail

```typescript
export default function isEmail(str: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
}
```

Verifica se a string fornecida é um endereço de e-mail válido.

## Assinatura

```typescript
function isEmail(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string for um endereço de e-mail válido, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isEmail("test@example.com")); // true
console.log(isEmail("test@example")); // false
console.log(isEmail("example.com")); // false
console.log(isEmail("test.email@domain.co.uk")); // true
```

## Notas

- A função verifica se o formato do e-mail está correto, mas não garante a existência do domínio ou a validade do endereço de e-mail.

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)