# Utilitários Crypto <Badge type="tip" text="1.0.0" />

As **funções utilitárias de criptografia** fornecem uma variedade de métodos para operações criptográficas. Essas funções ajudam a simplificar operações comuns, como hashing e geração de valores aleatórios, entre outras.

## Instalação

Para instalar as funções utilitárias de criptografia, use um dos seguintes comandos, dependendo do seu gerenciador de pacotes:

::: code-group

```bash [npm]
npm install @utilify/crypto
```

```bash [yarn]
yarn add @utilify/crypto
```

```bash [pnpm]
pnpm add @utilify/crypto
```

:::

Após a instalação, você pode importar as funções no seu projeto, utilizando ESM ou CJS.

## Uso

Esta biblioteca suporta tanto o sistema de módulos ESM quanto CJS.

::: code-group

```typescript [esm]
import { hash, randomUUID } from '@utilify/crypto';
```

```javascript [cjs]
const { hash, randomUUID } = require('@utilify/crypto');
```

:::

## Visão Geral

Aqui está uma visão geral das funções disponíveis no pacote de utilitários de criptografia:

### [hash](./hash.md)
```typescript
function hash(data: string, algorithm: string): string
```
Retorna o hash dos dados fornecidos usando o algoritmo especificado.

### [randomUUID](./randomUUID.md)
```typescript
function randomUUID(): string | undefined
```
Gera um UUID aleatório usando a API Web Crypto.