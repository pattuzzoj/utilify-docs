# toggleFullscreen

```typescript
import isFullscreenEnabled from './isFullscreenEnabled';

export default function toggleFullscreen(elem: HTMLElement): void {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}
```

A função `toggleFullscreen` alterna o modo de tela cheia para um elemento dado.

## Assinatura

```typescript
function toggleFullscreen(elem: HTMLElement): void;
```

### Parâmetros

- **`elem`** (`HTMLElement`): O elemento para alternar o modo de tela cheia.

### Retorno

Nenhum.

## Exemplos

```typescript
const elem = document.getElementById('myElement');
toggleFullscreen(elem);
```

## Notas

- A função verifica se o modo de tela cheia está habilitado antes de alternar.

## Referências

- [Element.requestFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)
