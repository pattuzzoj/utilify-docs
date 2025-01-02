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

La función `toggleFullscreen` alterna el modo de pantalla completa para un elemento dado.

## Firma

```typescript
function toggleFullscreen(elem: HTMLElement): void;
```

### Parámetros

- **`elem`** (`HTMLElement`): El elemento para alternar el modo de pantalla completa.

### Retorno

Ninguno.

## Ejemplos

```typescript
const elem = document.getElementById('myElement');
toggleFullscreen(elem);
```

## Notas

- La función verifica si el modo de pantalla completa está habilitado antes de alternar.

## Referencias

- [Element.requestFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)
