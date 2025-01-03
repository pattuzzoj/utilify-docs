# isBase64

```typescript
function isBase64(str: string): boolean {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
}
```

Verifica se a string fornecida está no formato Base64.

## Assinatura

```typescript
function isBase64(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string estiver no formato Base64, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isBase64("U29tZSBzdHJpbmc=")); // true
console.log(isBase64("Invalid base64")); // false
console.log(isBase64("c3RyaW5n")); // true
console.log(isBase64("Not_Base64@123")); // false
```

## Notas

- A função utiliza uma expressão regular para validar se a string segue a sintaxe comum de Base64, incluindo os caracteres alfanuméricos e o uso de `+`, `/`, e os preenchimentos `=`.

## Referências

- [Base64 - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Base64)