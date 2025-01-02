# rgbToHex

```typescript
function rgbToHex(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}
```

A função `rgbToHex` converte uma string de cor RGB para sua representação hexadecimal.

## Assinatura

```typescript
function rgbToHex(rgb: string): string | null;
```

### Parâmetros

- **`rgb`** (`string`): A string de cor RGB a ser convertida.

### Retorno

- **`string | null`**: Retorna a string de cor hexadecimal se a entrada for válida, caso contrário `null`.

## Exemplos

```typescript
console.log(rgbToHex("255,0,0")); // "ff0000"
console.log(rgbToHex("0,255,0,0.5")); // "00ff007f"
console.log(rgbToHex("invalid")); // null
```

## Notas

- A função suporta strings RGB com ou sem canal alfa.
- O canal alfa, se presente, é convertido para um valor hexadecimal de dois dígitos.

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)
