# hexToRgb

```typescript
function hexToRgb(hex: string): string | null {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels: string[] = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```

A função `hexToRgb` converte uma string de cor hexadecimal para sua representação RGB.

## Assinatura

```typescript
function hexToRgb(hex: string): string | null;
```

### Parâmetros

- **`hex`** (`string`): A string de cor hexadecimal a ser convertida.

### Retorno

- **`string | null`**: Retorna a string de cor RGB se a entrada for válida, caso contrário `null`.

## Exemplos

```typescript
console.log(hexToRgb("ff0000")); // "255, 0, 0"
console.log(hexToRgb("00ff007f")); // "0, 255, 0, 0.5"
console.log(hexToRgb("invalid")); // null
```

## Notas

- A função suporta strings hexadecimais com ou sem canal alfa.
- O canal alfa, se presente, é convertido para um valor decimal entre 0 e 1.

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)
