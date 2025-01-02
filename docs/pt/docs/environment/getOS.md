# getOS

```typescript
import { isServer } from '.';

export default function getOS(): string | undefined {
	if (!isServer()) return;

	if ('userAgentData' in navigator) {
		return navigator.userAgentData.platform;
	}

	const userAgent = navigator.userAgent;

	if (/Android/i.test(userAgent)) return 'Android';
	if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
	if (/Linux/i.test(userAgent)) return 'Linux';
	if (/Windows/i.test(userAgent)) return 'Windows';
	if (/Mac/i.test(userAgent)) return 'macOS';

	return 'Unknown';
}
```

Retorna o sistema operacional do usuário baseado no `userAgent` do navegador. Se a função for chamada no servidor, ela retornará `undefined`, uma vez que essa informação só está disponível no cliente.

## Assinatura

```typescript
function getOS(): string | undefined;
```

### Retorno

- **`string`**: O nome do sistema operacional do usuário. Pode ser um dos seguintes: `'Android'`, `'iOS'`, `'Linux'`, `'Windows'`, `'macOS'`, ou `'Unknown'` caso o sistema operacional não seja identificado.
- **`undefined`**: Se a função for executada no servidor, retornará `undefined`.

## Exemplos

```typescript
console.log(getOS()); // 'macOS' (ou outro sistema operacional dependendo do ambiente)
```

## Notas

- A função verifica se está sendo executada no servidor com a ajuda de uma variável `isServer`, garantindo que a detecção do sistema operacional só ocorra no ambiente de cliente.
- A detecção do sistema operacional é feita a partir da propriedade `userAgent` do navegador, ou `userAgentData` se disponível.

## Referências

- [Navigator.userAgent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)
- [Navigator.userAgentData - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData)