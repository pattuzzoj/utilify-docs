# hslToHex

```typescript
function hslToHex(hsl: string): string | null {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```

The `hslToHex` function converts an HSL color string to its hexadecimal representation.

## Signature

```typescript
function hslToHex(hsl: string): string | null;
```

### Parameters

- **`hsl`** (`string`): The HSL color string to be converted.

### Return

- **`string | null`**: Returns the hexadecimal color string if the input is valid, otherwise `null`.

## Examples

```typescript
console.log(hslToHex("0, 100%, 50%")); // "ff0000"
console.log(hslToHex("120, 100%, 50%, 0.5")); // "00ff007f"
console.log(hslToHex("invalid")); // null
```

## Notes

- The function supports HSL strings with or without an alpha channel.
- The hexadecimal values are converted from the RGB representation.
- Conversion to RGB is necessary because the hexadecimal representation is based on the RGB color model.

## References

- [RGB color model - Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)
