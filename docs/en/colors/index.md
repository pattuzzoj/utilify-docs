# Color Utility Functions

The color utility functions provide a variety of methods for color conversion and validation operations. These functions help simplify common operations such as converting between different color formats and validating color strings. Below is an overview of the functions available in this category, including their signatures and descriptions.

## [rgbToHsl](./rgbToHsl.md)
```typescript
function rgbToHsl(rgb: string): string | null
```
Converts an RGB color string to its HSL representation.

## [rgbToHex](./rgbToHex.md)
```typescript
function rgbToHex(rgb: string): string | null
```
Converts an RGB color string to its hexadecimal representation.

## [isRgb](./isRgb.md)
```typescript
function isRgb(rgb: string): boolean
```
Checks if a given string is a valid RGB or RGBA color.

## [isHsl](./isHsl.md)
```typescript
function isHsl(hsl: string): boolean
```
Checks if a given string is a valid HSL or HSLA color.

## [isHex](./isHex.md)
```typescript
function isHex(hex: string): boolean
```
Checks if a given string is a valid hexadecimal color, including the alpha channel.

## [hslToRgb](./hslToRgb.md)
```typescript
function hslToRgb(hsl: string): string | null
```
Converts an HSL color string to its RGB representation.

## [hslToHex](./hslToHex.md)
```typescript
function hslToHex(hsl: string): string | null
```
Converts an HSL color string to its hexadecimal representation.

## [hexToRgb](./hexToRgb.md)
```typescript
function hexToRgb(hex: string): string | null
```
Converts a hexadecimal color string to its RGB representation.

## [hexToHsl](./hexToHsl.md)
```typescript
function hexToHsl(hex: string): string | null
```
Converts a hexadecimal color string to its HSL representation.
