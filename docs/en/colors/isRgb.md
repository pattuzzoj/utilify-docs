# isRgb

```typescript
function isRgb(rgb: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    rgb
  );
}
```

The `isRgb` function checks if a given string is a valid RGB or RGBA color.

## Signature

```typescript
function isRgb(rgb: string): boolean;
```

### Parameters

- **`rgb`** (`string`): The string to be checked.

### Return

- **`boolean`**: Returns `true` if the string is a valid RGB or RGBA color, otherwise `false`.

## Examples

```typescript
console.log(isRgb("255, 0, 0")); // true
console.log(isRgb("255, 0, 0, 0.5")); // true
console.log(isRgb("255, 0, 0, 1.5")); // false
```

## Notes

- The function supports both RGB and RGBA formats.

## References

- [Regular Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)