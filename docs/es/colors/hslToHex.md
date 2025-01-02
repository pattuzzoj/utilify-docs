# hslToHex

```typescript
function hslToHex(hsl: string): string | null {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```

La función `hslToHex` convierte una cadena de color HSL a su representación hexadecimal.

## Firma

```typescript
function hslToHex(hsl: string): string | null;
```

### Parámetros

- **`hsl`** (`string`): La cadena de color HSL a convertir.

### Retorno

- **`string | null`**: Devuelve la cadena de color hexadecimal si la entrada es válida, de lo contrario `null`.

## Ejemplos

```typescript
console.log(hslToHex("0, 100%, 50%")); // "ff0000"
console.log(hslToHex("120, 100%, 50%, 0.5")); // "00ff007f"
console.log(hslToHex("invalid")); // null
```

## Notas

- La función soporta cadenas HSL con o sin canal alfa.
- Los valores hexadecimales se convierten de la representación RGB.
- La conversión a RGB es necesaria porque la representación hexadecimal se basa en el modelo de color RGB.

## Referencias

- [Modelo de color RGB - Wikipedia](https://es.wikipedia.org/wiki/Modelo_de_color_RGB)
