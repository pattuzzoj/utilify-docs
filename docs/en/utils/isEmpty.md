# isEmpty

```typescript
import { isEmptyString } from "../regex";
import { getType } from "../types";

export default function isEmpty(value: unknown): boolean {
  const type = getType(value);

  switch (type) {
    case "undefined":
    case "null":
      return true;
    case "string":
      return isEmptyString(value as string);
    case "map":
    case "set":
      return (value as Set<any> | Map<any, any>).size === 0;
    case "object":
    case "array":
      return Object.keys(value as object | any[]).length === 0;
    default:
      return false;
  }
}
```

The `isEmpty` function checks if a value is empty.

## Signature

```typescript
function isEmpty(value: unknown): boolean;
```

### Parameters

- **`value`** (`unknown`): The value to be checked.

### Returns

- **`boolean`**: `true` if the value is empty, otherwise `false`.

## Examples

```typescript
console.log(isEmpty("")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty(null)); // true
console.log(isEmpty("Hello")); // false
```

## Notes

- The function checks for different types and determines if they are empty.

## References

- [isEmptyString - Documentation](../regex/isEmptyString.md)
- [getType - Documentation](../types/getType.md)
