# hexToHsl

```typescript
function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```

The `hexToHsl` function converts a hexadecimal color string to its HSL representation.

## Signature

```typescript
function hexToHsl(hex: string): string | null;
```

### Parameters

- **`hex`** (`string`): The hexadecimal color string to be converted.

### Return

- **`string | null`**: Returns the HSL color string if the input is valid, otherwise `null`.

## Examples

```typescript
console.log(hexToHsl("ff0000")); // "0, 100%, 50%"
console.log(hexToHsl("00ff007f")); // "120, 100%, 50%, 0.5"
console.log(hexToHsl("invalid")); // null
```

## Notes

- The function supports hexadecimal strings with or without an alpha channel.
- The HSL values are rounded to two decimal places.
- Conversion to RGB is necessary because the hexadecimal representation is based on the RGB color model.

## References

- [HSL and HSV - Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)
