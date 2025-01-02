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

La función `rgbToHex` convierte una cadena de color RGB a su representación hexadecimal.

## Firma

```typescript
function rgbToHex(rgb: string): string | null;
```

### Parámetros

- **`rgb`** (`string`): La cadena de color RGB a convertir.

### Retorno

- **`string | null`**: Devuelve la cadena de color hexadecimal si la entrada es válida, de lo contrario `null`.

## Ejemplos

```typescript
console.log(rgbToHex("255,0,0")); // "ff0000"
console.log(rgbToHex("0,255,0,0.5")); // "00ff007f"
console.log(rgbToHex("invalid")); // null
```

## Notas

- La función soporta cadenas RGB con o sin canal alfa.
- El canal alfa, si está presente, se convierte a un valor hexadecimal de dos dígitos.

## Referencias

- [Modelo de color RGB - Wikipedia](https://es.wikipedia.org/wiki/Modelo_de_color_RGB)
