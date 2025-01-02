# rgbToHsl

```typescript
function rgbToHsl(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  let [r, g, b, a] = rgb.split(",") as unknown[] as number[];
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360 * 100) / 100;
  s = Math.round(s * 100 * 100) / 100 + "%";
  l = Math.round(l * 100 * 100) / 100 + "%";

  const hsl = [h, s, l];

  if (a) {
    hsl.push(a);
  }

  return hsl.join(", ");
}
```

La función `rgbToHsl` convierte una cadena de color RGB a su representación HSL.

## Firma

```typescript
function rgbToHsl(rgb: string): string | null;
```

### Parámetros

- **`rgb`** (`string`): La cadena de color RGB a convertir.

### Retorno

- **`string | null`**: Devuelve la cadena de color HSL si la entrada es válida, de lo contrario `null`.

## Ejemplos

```typescript
console.log(rgbToHsl("255,0,0")); // "0, 100%, 50%"
console.log(rgbToHsl("0,255,0,0.5")); // "120, 100%, 50%, 0.5"
console.log(rgbToHsl("invalid")); // null
```

## Notas

- La función soporta cadenas RGB con o sin canal alfa.
- Los valores HSL se redondean a dos decimales.

## Referencias

- [HSL y HSV - Wikipedia](https://es.wikipedia.org/wiki/HSL_y_HSV)
