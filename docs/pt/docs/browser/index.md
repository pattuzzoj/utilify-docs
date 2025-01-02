# Funções Utilitárias do Navegador

As funções utilitárias do navegador fornecem uma variedade de métodos para interagir com o ambiente do navegador. Essas funções ajudam a simplificar operações comuns, como verificar o estado da conexão, detectar dispositivos de toque, entre outras.

## [getLanguage](./getLanguage.md)
```typescript
function getLanguage(): string | undefined
```
Retorna o código de idioma do navegador.

## [getTheme](./getTheme.md)
```typescript
function getTheme(): string | undefined
```
Retorna a preferência de tema atual do usuário.

## [isCookieEnabled](./isCookieEnabled.md)
```typescript
function isCookieEnabled(): boolean | undefined
```
Verifica se os cookies estão habilitados no navegador.

## [isCryptoAvailable](./isCryptoAvailable.md)
```typescript
function isCryptoAvailable(): boolean | undefined
```
Verifica se a API Web Crypto está disponível.

## [isFullscreenEnabled](./isFullscreenEnabled.md)
```typescript
function isFullscreenEnabled(): boolean | undefined
```
Verifica se o modo de tela cheia está habilitado.

## [isOnline](./isOnline.md)
```typescript
function isOnline(): boolean | undefined
```
Verifica se o navegador está online.

## [isTouchDevice](./isTouchDevice.md)
```typescript
function isTouchDevice(): boolean | undefined
```
Verifica se o dispositivo suporta eventos de toque.

## [toggleFullscreen](./toggleFullscreen.md)
```typescript
function toggleFullscreen(elem: HTMLElement): void
```
Alterna o modo de tela cheia para um elemento dado.
