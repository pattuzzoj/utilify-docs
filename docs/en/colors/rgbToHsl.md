# rgbToHsl

```typescript
function rgbToHsl(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  let [r, g, b, a] = rgb.split(",") as unknown[] as number[];
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360 * 100) / 100;
  s = Math.round(s * 100 * 100) / 100 + "%";
  l = Math.round(l * 100 * 100) / 100 + "%";

  const hsl = [h, s, l];

  if (a) {
    hsl.push(a);
  }

  return hsl.join(", ");
}
```

The `rgbToHsl` function converts an RGB color string to its HSL representation.

## Signature

```typescript
function rgbToHsl(rgb: string): string | null;
```

### Parameters

- **`rgb`** (`string`): The RGB color string to be converted.

### Return

- **`string | null`**: Returns the HSL color string if the input is valid, otherwise `null`.

## Examples

```typescript
console.log(rgbToHsl("255,0,0")); // "0, 100%, 50%"
console.log(rgbToHsl("0,255,0,0.5")); // "120, 100%, 50%, 0.5"
console.log(rgbToHsl("invalid")); // null
```

## Notes

- The function supports RGB strings with or without an alpha channel.
- The HSL values are rounded to two decimal places.

## References

- [HSL and HSV - Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)
