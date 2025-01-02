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

La función `hexToRgb` convierte una cadena de color hexadecimal a su representación RGB.

## Firma

```typescript
function hexToRgb(hex: string): string | null;
```

### Parámetros

- **`hex`** (`string`): La cadena de color hexadecimal a convertir.

### Retorno

- **`string | null`**: Devuelve la cadena de color RGB si la entrada es válida, de lo contrario `null`.

## Ejemplos

```typescript
console.log(hexToRgb("ff0000")); // "255, 0, 0"
console.log(hexToRgb("00ff007f")); // "0, 255, 0, 0.5"
console.log(hexToRgb("invalid")); // null
```

## Notas

- La función soporta cadenas hexadecimales con o sin canal alfa.
- El canal alfa, si está presente, se convierte a un valor decimal entre 0 y 1.

## Referencias

- [Modelo de color RGB - Wikipedia](https://es.wikipedia.org/wiki/Modelo_de_color_RGB)
