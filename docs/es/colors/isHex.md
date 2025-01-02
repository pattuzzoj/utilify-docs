# isHex

```typescript
function isHex(hex: string): boolean {
  return /^([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
}
```

La función `isHex` verifica si una cadena dada es un color hexadecimal válido, incluyendo el canal alfa.

## Firma

```typescript
function isHex(hex: string): boolean;
```

### Parámetros

- **`hex`** (`string`): La cadena a verificar.

### Retorno

- **`boolean`**: Devuelve `true` si la cadena es un color hexadecimal válido, de lo contrario `false`.

## Ejemplos

```typescript
console.log(isHex("fff")); // true
console.log(isHex("ffffff")); // true
console.log(isHex("ggg")); // false
```

## Notas

- La función admite formatos hexadecimales de 3, 4, 6 y 8 caracteres.

## Referencias

- [Expresiones regulares - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
