# isHex

```typescript
function isHex(hex: string): boolean {
  return /^([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
}
```

The `isHex` function checks if a given string is a valid hexadecimal color, including the alpha channel.

## Signature

```typescript
function isHex(hex: string): boolean;
```

### Parameters

- **`hex`** (`string`): The string to be checked.

### Return

- **`boolean`**: Returns `true` if the string is a valid hexadecimal color, otherwise `false`.

## Examples

```typescript
console.log(isHex("fff")); // true
console.log(isHex("ffffff")); // true
console.log(isHex("ggg")); // false
```

## Notes

- The function supports 3, 4, 6, and 8 character hexadecimal formats.

## References

- [Regular Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
