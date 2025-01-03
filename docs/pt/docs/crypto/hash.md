Aqui está a documentação revisada com a seção de dependências separada, conforme solicitado:

# hash

A função `hash` gera um hash criptográfico dos dados fornecidos usando o algoritmo especificado.

## Assinatura

```typescript
function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: Algorithm,
  output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | null>;
```

### Parâmetros

| Nome      | Tipo                              | Descrição                                                                                         |
|-----------|-----------------------------------|---------------------------------------------------------------------------------------------------|
| `data`    | `string | ArrayBuffer | DataView`    | Os dados a serem hashados.                                                                       |
| `algorithm` | `Algorithm`                      | O algoritmo de hash a ser usado (`'SHA-1'`, `'SHA-256'`, `'SHA-384'`, `'SHA-512'`).               |
| `output`  | `HashOutput`                      | O formato de saída desejado (`'hex'`, `'base64'`, `'buffer'`). O valor padrão é `'buffer'`.        |

### Retorno

| Formato de Saída | Tipo                     | Descrição                                                   |
|------------------|--------------------------|-------------------------------------------------------------|
| `'hex'`          | `Promise<string>`         | O hash gerado em formato hexadecimal.                       |
| `'base64'`       | `Promise<string>`         | O hash gerado em formato Base64.                            |
| `'buffer'`       | `Promise<ArrayBuffer>`    | O hash gerado em formato de buffer.                         |
| `Não Disponível` | `Promise<null>`           | Se a API Web Crypto não estiver disponível, retorna `null`. |

## Exemplos

```typescript
hash('hello', 'SHA-256', 'hex').then(console.log); 
// '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'

hash('hello', 'SHA-256', 'base64').then(console.log); 
// 'Mjy0e+9/Iu7muXwPpc37kpxZcU2ElBd2ZHTfD5rS8R0='
```

## Notas

- A função depende da API Web Crypto do navegador. Se a API não estiver disponível, será retornado `null`.
- O valor de retorno será uma `Promise`. O tipo de dado retornado pela `Promise` pode ser:
  - `string` para formatos `'hex'` ou `'base64'`.
  - `ArrayBuffer` para o formato `'buffer'`.

## Dependências

- [`isCryptoAvailable`](../browser/isCryptoAvailable.md): A função `isCryptoAvailable` é usada para verificar se a API Web Crypto está disponível no ambiente, garantindo que a função `hash` funcione corretamente.

## Código Fonte

::: code-group
```typescript
import { isCryptoAvailable } from '@utilify/browser';

type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';
type HashOutput = 'hex' | 'base64' | 'buffer';

async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: Algorithm,
  output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | null> {
  if (!isCryptoAvailable()) {
    console.error('Crypto API is not Available');
    return null;
  }

  const buffer: Uint8Array | ArrayBuffer | DataView = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```

```javascript
function hash(data, algorithm, output = 'buffer') {
  if (!isCryptoAvailable()) {
    console.error('Crypto API is not Available');
    return null;
  }

  const buffer = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```
:::

## Referências

- [SubtleCrypto.digest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
- [isCryptoAvailable - GitHub](https://github.com/Utilify/utils/blob/main/packages/browser/src/isCryptoAvailable.ts)