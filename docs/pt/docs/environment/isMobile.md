# isMobile

```typescript
import { isServer } from '.';

function isMobile(): boolean | undefined {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```

Detecta se o dispositivo do usuário é um **dispositivo móvel** com base no `userAgent` do navegador. Se a função for chamada no servidor, ela retorna `undefined`, pois a detecção só é possível no cliente.

## Assinatura

```typescript
function isMobile(): boolean | undefined;
```

### Retorno

- **`boolean`**: Retorna `true` se o dispositivo for um dispositivo móvel, baseado no `userAgent` do navegador.
- **`undefined`**: Se a função for executada no servidor, retornará `undefined`.

## Exemplos

```typescript
console.log(isMobile()); // true se o dispositivo for móvel, false caso contrário
```

## Notas

- A função utiliza a expressão regular para testar o `userAgent` do navegador em busca de termos comuns a dispositivos móveis.
- A função usa a função `isServer()` para garantir que a detecção do dispositivo só ocorra no ambiente do cliente, retornando `undefined` no servidor.

## Referências

- [Navigator.userAgent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)