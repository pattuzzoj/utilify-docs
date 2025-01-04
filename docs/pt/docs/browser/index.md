# Utilitários do Navegador <Badge type="tip" text="1.1.0" />

As **funções utilitárias do navegador** fornecem diversos métodos para interagir com o ambiente do navegador. Essas funções ajudam a simplificar operações comuns, como verificar o estado da conexão, detectar dispositivos de toque, gerar hashes seguros e muito mais.

## Instalação

Para instalar as funções utilitárias do navegador, use um dos seguintes comandos, dependendo do seu gerenciador de pacotes:

::: code-group

```bash [npm]
npm install @utilify/browser
```

```bash [yarn]
yarn add @utilify/browser
```

```bash [pnpm]
pnpm add @utilify/browser
```

:::

Após a instalação, você pode importar as funções no seu projeto, utilizando ESM ou CJS.

## Uso

Esta biblioteca suporta tanto o sistema de módulos ESM quanto CJS.

::: code-group

```typescript [esm]
import { getLanguage, getTheme, isOnline, hash } from '@utilify/browser';
```

```javascript [cjs]
const { getLanguage, getTheme, isOnline, hash } = require('@utilify/browser');
```

:::

## Visão Geral

Aqui está uma visão geral das funções disponíveis no pacote de utilitários do navegador:

### [getLanguage](./getLanguage.md)  
```typescript  
function getLanguage(): string | undefined  
```  
Retorna o código de idioma do navegador.

### [getTheme](./getTheme.md)  
```typescript  
function getTheme(): string | undefined  
```  
Retorna a preferência de tema atual do usuário.

### [hash](./hash.md)  
```typescript  
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>
```  
Gera um hash criptográfico dos dados fornecidos usando o algoritmo e formato de saída especificados.

### [isCookieEnabled](./isCookieEnabled.md)  
```typescript  
function isCookieEnabled(): boolean | undefined  
```  
Verifica se os cookies estão habilitados no navegador.

### [isFullscreenEnabled](./isFullscreenEnabled.md)  
```typescript  
function isFullscreenEnabled(): boolean | undefined  
```  
Verifica se o modo de tela cheia está habilitado.

### [isOnline](./isOnline.md)  
```typescript  
function isOnline(): boolean | undefined  
```  
Verifica se o navegador está online.

### [isTouchDevice](./isTouchDevice.md)  
```typescript  
function isTouchDevice(): boolean | undefined  
```  
Verifica se o dispositivo suporta eventos de toque.

### [randomUUID](./randomUUID.md)  
```typescript  
function randomUUID(): string | undefined  
```  
Gera um UUID seguro usando a API Web Crypto do navegador. Retorna `undefined` se a API não estiver disponível.

### [toggleFullscreen](./toggleFullscreen.md)  
```typescript  
function toggleFullscreen(elem: HTMLElement): void  
```  
Alterna o modo de tela cheia para o elemento fornecido.