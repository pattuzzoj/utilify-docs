# flatten

```typescript
import { flattenArr } from "../array";
import { flattenObj } from "../object";
import { isArray, isObject } from "../types";

export default function flatten<T>(arr: T[], depth: number): FlatArray<T[], number>[];
export default function flatten(obj: Record<string, any>, separator: string): Record<string, any>;
export default function flatten(value: any, depthOrSeparator: any): any {
  if (isObject(value)) {
    return flattenObj(value, depthOrSeparator ?? ".");
  } else if (isArray(value)) {
    return flattenArr(value, depthOrSeparator ?? Infinity);
  }

  return value;
}
```

The `flatten` function flattens an array or object to a specified depth or with a specified separator.

## Signature

```typescript
function flatten<T>(arr: T[], depth: number): FlatArray<T[], number>[];
function flatten(obj: Record<string, any>, separator: string): Record<string, any>;
function flatten(value: any, depthOrSeparator: any): any;
```

### Parameters

- **`value`** (`any`): The value to be flattened.
- **`depthOrSeparator`** (`any`): The depth for arrays or the separator for objects.

### Returns

- **`any`**: The flattened value.

## Examples

```typescript
console.log(flatten([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flatten({ a: { b: { c: 1 } } }, ".")); // { "a.b.c": 1 }
```

## Notes

- The function determines if the value is an array or object and applies the appropriate flattening method.

## References

- [flattenArr - Documentation](../array/flattenArr.md)
- [flattenObj - Documentation](../object/flattenObj.md)
