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

La función `hash` genera un hash criptográfico de los datos proporcionados utilizando el algoritmo especificado.

## Firma

```typescript
function hash(
	data: string | ArrayBuffer | DataView,
	algorithm: Algorithm,
	output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | null>;
```

### Parámetros

- **`data`** (`string | ArrayBuffer | DataView`): Los datos a hashear.
- **`algorithm`** (`Algorithm`): El algoritmo de hash a utilizar (`'SHA-1'`, `'SHA-256'`, `'SHA-384'`, `'SHA-512'`).
- **`output`** (`HashOutput`): El formato de salida (`'hex'`, `'base64'`, `'buffer'`). El valor predeterminado es `'buffer'`.

### Retorno

- **`Promise<string | ArrayBuffer | null>`**: El hash de los datos en el formato especificado, o `null` si la API Web Crypto no está disponible.

## Ejemplos

```typescript
hash('hello', 'SHA-256', 'hex').then(console.log); // '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
```

## Notas

- Si la API Web Crypto no está disponible, la función registrará un error y devolverá `null`.

## Referencias

- [SubtleCrypto.digest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
