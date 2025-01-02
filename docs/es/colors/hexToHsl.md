# hexToHsl

```typescript
function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```

La función `hexToHsl` convierte una cadena de color hexadecimal a su representación HSL.

## Firma

```typescript
function hexToHsl(hex: string): string | null;
```

### Parámetros

- **`hex`** (`string`): La cadena de color hexadecimal a convertir.

### Retorno

- **`string | null`**: Devuelve la cadena de color HSL si la entrada es válida, de lo contrario `null`.

## Ejemplos

```typescript
console.log(hexToHsl("ff0000")); // "0, 100%, 50%"
console.log(hexToHsl("00ff007f")); // "120, 100%, 50%, 0.5"
console.log(hexToHsl("invalid")); // null
```

## Notas

- La función soporta cadenas hexadecimales con o sin canal alfa.
- Los valores HSL se redondean a dos decimales.
- La conversión a RGB es necesaria porque la representación hexadecimal se basa en el modelo de color RGB.

## Referencias

- [HSL y HSV - Wikipedia](https://es.wikipedia.org/wiki/HSL_y_HSV)
