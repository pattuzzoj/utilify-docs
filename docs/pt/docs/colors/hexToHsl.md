# hexToHsl

```typescript
function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```

A função `hexToHsl` converte uma string de cor hexadecimal para sua representação HSL.

## Assinatura

```typescript
function hexToHsl(hex: string): string | null;
```

### Parâmetros

- **`hex`** (`string`): A string de cor hexadecimal a ser convertida.

### Retorno

- **`string | null`**: Retorna a string de cor HSL se a entrada for válida, caso contrário `null`.

## Exemplos

```typescript
console.log(hexToHsl("ff0000")); // "0, 100%, 50%"
console.log(hexToHsl("00ff007f")); // "120, 100%, 50%, 0.5"
console.log(hexToHsl("invalid")); // null
```

## Notas

- A função suporta strings hexadecimais com ou sem canal alfa.
- Os valores HSL são arredondados para duas casas decimais.
- A conversão para RGB é necessária porque a representação hexadecimal é baseada no modelo de cores RGB.

## Referências

- [HSL e HSV - Wikipedia](https://pt.wikipedia.org/wiki/HSL_e_HSV)
