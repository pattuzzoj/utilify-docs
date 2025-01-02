# isTouchDevice

```typescript
import { isServer } from '../environment';

export default function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```

A função `isTouchDevice` verifica se o dispositivo suporta eventos de toque.

## Assinatura

```typescript
function isTouchDevice(): boolean | undefined;
```

### Parâmetros

Nenhum.

### Retorno

- **`boolean | undefined`**: `true` se o dispositivo suportar eventos de toque, `false` caso contrário, ou `undefined` se executado no servidor.

## Exemplos

```typescript
console.log(isTouchDevice()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Referências

- [Touch events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
