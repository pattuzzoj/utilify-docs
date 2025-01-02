# isRgb

```typescript
function isRgb(rgb: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    rgb
  );
}
```

La función `isRgb` verifica si una cadena dada es un color RGB o RGBA válido.

## Firma

```typescript
function isRgb(rgb: string): boolean;
```

### Parámetros

- **`rgb`** (`string`): La cadena a verificar.

### Retorno

- **`boolean`**: Devuelve `true` si la cadena es un color RGB o RGBA válido, de lo contrario `false`.

## Ejemplos

```typescript
console.log(isRgb("255, 0, 0")); // true
console.log(isRgb("255, 0, 0, 0.5")); // true
console.log(isRgb("255, 0, 0, 1.5")); // false
```

## Notas

- La función admite formatos RGB y RGBA.

## Referencias

- [Expresiones regulares - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
