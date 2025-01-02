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

The `toggleFullscreen` function toggles the fullscreen mode for a given element.

## Signature

```typescript
function toggleFullscreen(elem: HTMLElement): void;
```

### Parameters

- **`elem`** (`HTMLElement`): The element to toggle fullscreen mode.

### Return

None.

## Examples

```typescript
const elem = document.getElementById('myElement');
toggleFullscreen(elem);
```

## Notes

- The function checks if fullscreen mode is enabled before toggling.

## References

- [Element.requestFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)
