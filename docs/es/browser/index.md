# Funciones Utilitarias del Navegador

Las funciones utilitarias del navegador proporcionan una variedad de métodos para interactuar con el entorno del navegador. Estas funciones ayudan a simplificar operaciones comunes como verificar el estado de la conexión, detectar dispositivos táctiles, entre otras. A continuación se muestra una descripción general de las funciones disponibles en esta categoría, incluidas sus firmas y descripciones.

## [getLanguage](./getLanguage.md)
```typescript
function getLanguage(): string | undefined
```
Devuelve el código de idioma del navegador.

## [getTheme](./getTheme.md)
```typescript
function getTheme(): string | undefined
```
Devuelve la preferencia de tema actual del usuario.

## [isCookieEnabled](./isCookieEnabled.md)
```typescript
function isCookieEnabled(): boolean | undefined
```
Verifica si las cookies están habilitadas en el navegador.

## [isCryptoAvailable](./isCryptoAvailable.md)
```typescript
function isCryptoAvailable(): boolean | undefined
```
Verifica si la API Web Crypto está disponible.

## [isFullscreenEnabled](./isFullscreenEnabled.md)
```typescript
function isFullscreenEnabled(): boolean | undefined
```
Verifica si el modo de pantalla completa está habilitado.

## [isOnline](./isOnline.md)
```typescript
function isOnline(): boolean | undefined
```
Verifica si el navegador está en línea.

## [isTouchDevice](./isTouchDevice.md)
```typescript
function isTouchDevice(): boolean | undefined
```
Verifica si el dispositivo admite eventos táctiles.

## [toggleFullscreen](./toggleFullscreen.md)
```typescript
function toggleFullscreen(elem: HTMLElement): void
```
Alterna el modo de pantalla completa para un elemento dado.