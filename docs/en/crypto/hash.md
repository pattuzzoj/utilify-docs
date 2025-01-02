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

The `hash` function generates a cryptographic hash of the given data using the specified algorithm.

## Signature

```typescript
function hash(
	data: string | ArrayBuffer | DataView,
	algorithm: Algorithm,
	output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | null>;
```

### Parameters

- **`data`** (`string | ArrayBuffer | DataView`): The data to hash.
- **`algorithm`** (`Algorithm`): The hash algorithm to use (`'SHA-1'`, `'SHA-256'`, `'SHA-384'`, `'SHA-512'`).
- **`output`** (`HashOutput`): The output format (`'hex'`, `'base64'`, `'buffer'`). Default is `'buffer'`.

### Return

- **`Promise<string | ArrayBuffer | null>`**: The hash of the data in the specified format, or `null` if the Web Crypto API is not available.

## Examples

```typescript
hash('hello', 'SHA-256', 'hex').then(console.log); // '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
```

## Notes

- If the Web Crypto API is not available, the function will log an error and return `null`.

## References

- [SubtleCrypto.digest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
