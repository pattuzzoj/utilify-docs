# Funciones Utilitarias de Colores

Las funciones utilitarias de colores proporcionan una variedad de métodos para operaciones de conversión y validación de colores. Estas funciones ayudan a simplificar operaciones comunes como la conversión entre diferentes formatos de colores y la validación de cadenas de colores. A continuación se muestra una descripción general de las funciones disponibles en esta categoría, incluidas sus firmas y descripciones.

## [rgbToHsl](./rgbToHsl.md)
```typescript
function rgbToHsl(rgb: string): string | null
```
Convierte una cadena de color RGB a su representación HSL.

## [rgbToHex](./rgbToHex.md)
```typescript
function rgbToHex(rgb: string): string | null
```
Convierte una cadena de color RGB a su representación hexadecimal.

## [isRgb](./isRgb.md)
```typescript
function isRgb(rgb: string): boolean
```
Verifica si una cadena proporcionada es un color RGB o RGBA válido.

## [isHsl](./isHsl.md)
```typescript
function isHsl(hsl: string): boolean
```
Verifica si una cadena proporcionada es un color HSL o HSLA válido.

## [isHex](./isHex.md)
```typescript
function isHex(hex: string): boolean
```
Verifica si una cadena proporcionada es un color hexadecimal válido, incluido el canal alfa.

## [hslToRgb](./hslToRgb.md)
```typescript
function hslToRgb(hsl: string): string | null
```
Convierte una cadena de color HSL a su representación RGB.

## [hslToHex](./hslToHex.md)
```typescript
function hslToHex(hsl: string): string | null
```
Convierte una cadena de color HSL a su representación hexadecimal.

## [hexToRgb](./hexToRgb.md)
```typescript
function hexToRgb(hex: string): string | null
```
Convierte una cadena de color hexadecimal a su representación RGB.

## [hexToHsl](./hexToHsl.md)
```typescript
function hexToHsl(hex: string): string | null
```
Convierte una cadena de color hexadecimal a su representación HSL.
