# hexToRgb

```typescript
function hexToRgb(hex: string): string | null {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels: string[] = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```

The `hexToRgb` function converts a hexadecimal color string to its RGB representation.

## Signature

```typescript
function hexToRgb(hex: string): string | null;
```

### Parameters

- **`hex`** (`string`): The hexadecimal color string to be converted.

### Return

- **`string | null`**: Returns the RGB color string if the input is valid, otherwise `null`.

## Examples

```typescript
console.log(hexToRgb("ff0000")); // "255, 0, 0"
console.log(hexToRgb("00ff007f")); // "0, 255, 0, 0.5"
console.log(hexToRgb("invalid")); // null
```

## Notes

- The function supports hexadecimal strings with or without an alpha channel.
- The alpha channel, if present, is converted to a decimal value between 0 and 1.

## References

- [RGB color model - Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)
