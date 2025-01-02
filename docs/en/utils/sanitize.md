# sanitize

```typescript
import { getType } from "../types";
import { sanitizeStr } from "../string";
import { sanitizeArr } from "../array";
import { sanitizeObj } from "../object";

export default function sanitize(str: string, values: string[], replace?: string): string;
export default function sanitize<T>(arr: T[], values: T[], replace?: T): T[];
export default function sanitize(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
export default function sanitize(value: any, values: any[], replace?: any): any {
  const type = getType(value);
  const sanitizeHandlers: Record<string, any> = {
    "string": sanitizeStr,
    "array": sanitizeArr,
    "object": sanitizeObj
  }

  return type in sanitizeHandlers ? sanitizeHandlers[type](value, values, replace) : value;
}
```

The `sanitize` function cleans a given value by removing or replacing specified values.

## Signature

```typescript
function sanitize(str: string, values: string[], replace?: string): string;
function sanitize<T>(arr: T[], values: T[], replace?: T): T[];
function sanitize(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
function sanitize(value: any, values: any[], replace?: any): any;
```

### Parameters

- **`value`** (`any`): The value to be sanitized.
- **`values`** (`any[]`): The values to be removed or replaced.
- **`replace`** (`any`, optional): The value to replace the specified values with.

### Returns

- **`any`**: The sanitized value.

## Examples

```typescript
console.log(sanitize("Hello World", ["World"], "Universe")); // "Hello Universe"
console.log(sanitize([1, 2, 3, 4], [2, 3])); // [1, 4]
console.log(sanitize({ a: 1, b: 2 }, [1], null)); // { a: null, b: 2 }
```

## Notes

- The function determines the type of the value and applies the appropriate sanitization method.

## References

- [getType - Documentation](../types/getType.md)
