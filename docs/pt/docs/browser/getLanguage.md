# getLanguage

```typescript
import { isServer } from '../environment';

export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}
```

A função `getLanguage` retorna o código de idioma do navegador.

## Assinatura

```typescript
function getLanguage(): string | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`string | undefined`**: O código de idioma do navegador, ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(getLanguage()); // 'en' (se o idioma do navegador for inglês)
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Navigator.language - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)
