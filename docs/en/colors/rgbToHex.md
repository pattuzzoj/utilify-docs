# rgbToHex

```typescript
function rgbToHex(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}
```

The `rgbToHex` function converts an RGB color string to its hexadecimal representation.

## Signature

```typescript
function rgbToHex(rgb: string): string | null;
```

### Parameters

- **`rgb`** (`string`): The RGB color string to be converted.

### Return

- **`string | null`**: Returns the hexadecimal color string if the input is valid, otherwise `null`.

## Examples

```typescript
console.log(rgbToHex("255,0,0")); // "ff0000"
console.log(rgbToHex("0,255,0,0.5")); // "00ff007f"
console.log(rgbToHex("invalid")); // null
```

## Notes

- The function supports RGB strings with or without an alpha channel.
- The alpha channel, if present, is converted to a two-digit hexadecimal value.

## References

- [RGB color model - Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)
