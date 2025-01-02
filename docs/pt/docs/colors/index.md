# Funções Utilitárias de Cores

As funções utilitárias de cores fornecem uma variedade de métodos para operações de conversão e validação de cores. Estas funções ajudam a simplificar operações comuns como conversão entre diferentes formatos de cores e validação de strings de cores.

## [rgbToHsl](./rgbToHsl.md)
```typescript
function rgbToHsl(rgb: string): string | null
```
Converte uma string de cor RGB para sua representação HSL.

## [rgbToHex](./rgbToHex.md)
```typescript
function rgbToHex(rgb: string): string | null
```
Converte uma string de cor RGB para sua representação hexadecimal.

## [isRgb](./isRgb.md)
```typescript
function isRgb(rgb: string): boolean
```
Verifica se uma string fornecida é uma cor RGB ou RGBA válida.

## [isHsl](./isHsl.md)
```typescript
function isHsl(hsl: string): boolean
```
Verifica se uma string fornecida é uma cor HSL ou HSLA válida.

## [isHex](./isHex.md)
```typescript
function isHex(hex: string): boolean
```
Verifica se uma string fornecida é uma cor hexadecimal válida, incluindo o canal alfa.

## [hslToRgb](./hslToRgb.md)
```typescript
function hslToRgb(hsl: string): string | null
```
Converte uma string de cor HSL para sua representação RGB.

## [hslToHex](./hslToHex.md)
```typescript
function hslToHex(hsl: string): string | null
```
Converte uma string de cor HSL para sua representação hexadecimal.

## [hexToRgb](./hexToRgb.md)
```typescript
function hexToRgb(hex: string): string | null
```
Converte uma string de cor hexadecimal para sua representação RGB.

## [hexToHsl](./hexToHsl.md)
```typescript
function hexToHsl(hex: string): string | null
```
Converte uma string de cor hexadecimal para sua representação HSL.
