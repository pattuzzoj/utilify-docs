# hash

```typescript
import { isCryptoAvailable } from '../browser';

type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';
type HashOutput = 'hex' | 'base64' | 'buffer';

export default async function hash(
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

- **`data`** (`string | ArrayBuffer | DataView`): Os dados a serem hashados.
- **`algorithm`** (`Algorithm`): O algoritmo de hash a ser usado (`'SHA-1'`, `'SHA-256'`, `'SHA-384'`, `'SHA-512'`).
- **`output`** (`HashOutput`): O formato de saída (`'hex'`, `'base64'`, `'buffer'`). O valor padrão é `'buffer'`.

### Retorno

- **`Promise<string | ArrayBuffer | null>`**: O hash dos dados no formato especificado, ou `null` se a API Web Crypto não estiver disponível.

## Exemplos

```typescript
hash('hello', 'SHA-256', 'hex').then(console.log); // '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
```

## Notas

- Se a API Web Crypto não estiver disponível, a função registrará um erro e retornará `null`.

## Referências

- [SubtleCrypto.digest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
