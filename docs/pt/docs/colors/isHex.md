# isHex

```typescript
function isHex(hex: string): boolean {
  return /^([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
}
```

A função `isHex` verifica se uma string fornecida é uma cor hexadecimal válida, incluindo o canal alfa.

## Assinatura

```typescript
function isHex(hex: string): boolean;
```

### Parâmetros

- **`hex`** (`string`): A string a ser verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string for uma cor hexadecimal válida, caso contrário `false`.

## Exemplos

```typescript
console.log(isHex("fff")); // true
console.log(isHex("ffffff")); // true
console.log(isHex("ggg")); // false
```

## Notas

- A função suporta formatos hexadecimais de 3, 4, 6 e 8 caracteres.

## Referências

- [Expressões Regulares - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
