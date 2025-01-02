# isHsl

```typescript
function isHsl(hsl: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    hsl
  );
}
```

La función `isHsl` verifica si una cadena dada es un color HSL o HSLA válido.

## Firma

```typescript
function isHsl(hsl: string): boolean;
```

### Parámetros

- **`hsl`** (`string`): La cadena a verificar.

### Retorno

- **`boolean`**: Devuelve `true` si la cadena es un color HSL o HSLA válido, de lo contrario `false`.

## Ejemplos

```typescript
console.log(isHsl("120, 100%, 50%")); // true
console.log(isHsl("120, 100%, 50%, 0.5")); // true
console.log(isHsl("120, 100%, 50%, 1.5")); // false
```

## Notas

- La función admite formatos HSL y HSLA.

## Referencias

- [Expresiones regulares - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
