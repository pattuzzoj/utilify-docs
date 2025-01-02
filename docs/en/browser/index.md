# Browser Utility Functions

The browser utility functions provide a variety of methods to interact with the browser environment. These functions help simplify common operations such as checking the connection status, detecting touch devices, among others. Below is an overview of the functions available in this category, including their signatures and descriptions.

## [getLanguage](./getLanguage.md)
```typescript
function getLanguage(): string | undefined
```
Returns the browser's language code.

## [getTheme](./getTheme.md)
```typescript
function getTheme(): string | undefined
```
Returns the user's current theme preference.

## [isCookieEnabled](./isCookieEnabled.md)
```typescript
function isCookieEnabled(): boolean | undefined
```
Checks if cookies are enabled in the browser.

## [isCryptoAvailable](./isCryptoAvailable.md)
```typescript
function isCryptoAvailable(): boolean | undefined
```
Checks if the Web Crypto API is available.

## [isFullscreenEnabled](./isFullscreenEnabled.md)
```typescript
function isFullscreenEnabled(): boolean | undefined
```
Checks if fullscreen mode is enabled.

## [isOnline](./isOnline.md)
```typescript
function isOnline(): boolean | undefined
```
Checks if the browser is online.

## [isTouchDevice](./isTouchDevice.md)
```typescript
function isTouchDevice(): boolean | undefined
```
Checks if the device supports touch events.

## [toggleFullscreen](./toggleFullscreen.md)
```typescript
function toggleFullscreen(elem: HTMLElement): void
```
Toggles fullscreen mode for a given element.
