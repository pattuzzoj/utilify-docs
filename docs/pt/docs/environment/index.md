# Utilitários Environment

A categoria **Environment** contém funções utilitárias que ajudam a detectar e identificar o ambiente em que o código está sendo executado, seja no navegador, servidor, ou dentro de diferentes tipos de workers. As funções dessa categoria são úteis para fornecer comportamentos específicos dependendo do ambiente de execução.

## [getOS](./getOS.md)
```typescript
function getOS(): string | undefined;
```
Retorna o sistema operacional do usuário baseado no `userAgent` do navegador. Retorna `undefined` se executado no servidor.

## [isBun](./isBun.md)
```typescript
function isBun(): boolean;
```
Verifica se o código está sendo executado no ambiente Bun, identificando o tipo de execução através do objeto `Bun`.

## [isBrowser](./isBrowser.md)
```typescript
function isBrowser(): boolean;
```
Verifica se o código está sendo executado em um ambiente de navegador, verificando o tipo de `window`.

## [isDeno](./isDeno.md)
```typescript
function isDeno(): boolean;
```
Verifica se o código está sendo executado no ambiente Deno, verificando a presença do objeto `Deno`.

## [isDedicatedWorker](./isDedicatedWorker.md)
```typescript
function isDedicatedWorker(): boolean;
```
Determina se o código está sendo executado dentro de um **Dedicated Worker** (Worker dedicado), verificando o tipo de `self`.

## [isMobile](./isMobile.md)
```typescript
function isMobile(): boolean | undefined;
```
Verifica se o código está sendo executado em um dispositivo móvel, baseando-se no `userAgent` do navegador.

## [isNode](./isNode.md)
```typescript
function isNode(): boolean;
```
Determina se o código está sendo executado no ambiente Node.js, verificando a presença do objeto `global` e `process`.

## [isServer](./isServer.md)
```typescript
function isServer(): boolean;
```
Detecta se o código está sendo executado no servidor, verificando se o ambiente é Node.js, Deno ou Bun.

## [isServiceWorker](./isServiceWorker.md)
```typescript
function isServiceWorker(): boolean;
```
Verifica se o código está sendo executado dentro de um **Service Worker**, utilizando o tipo de `self`.

## [isSharedWorker](./isSharedWorker.md)
```typescript
function isSharedWorker(): boolean;
```
Determina se o código está sendo executado dentro de um **Shared Worker**, verificando o tipo de `self`.

## [isWebWorker](./isWebWorker.md)
```typescript
function isWebWorker(): boolean;
```
Verifica se o código está sendo executado dentro de qualquer tipo de **Web Worker**, incluindo **Dedicated**, **Shared** ou **Service Worker**.