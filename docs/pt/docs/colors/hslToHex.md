# hslToHex

```typescript
function hslToHex(hsl: string): string | null {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```

A função `hslToHex` converte uma string de cor HSL para sua representação hexadecimal.

## Assinatura

```typescript
function hslToHex(hsl: string): string | null;
```

### Parâmetros

- **`hsl`** (`string`): A string de cor HSL a ser convertida.

### Retorno

- **`string | null`**: Retorna a string de cor hexadecimal se a entrada for válida, caso contrário `null`.

## Exemplos

```typescript
console.log(hslToHex("0, 100%, 50%")); // "ff0000"
console.log(hslToHex("120, 100%, 50%, 0.5")); // "00ff007f"
console.log(hslToHex("invalid")); // null
```

## Notas

- A função suporta strings HSL com ou sem canal alfa.
- Os valores hexadecimais são convertidos da representação RGB.
- A conversão para RGB é necessária porque a representação hexadecimal é baseada no modelo de cores RGB.

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)
