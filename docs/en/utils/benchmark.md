# benchmark

```typescript
import { average } from "../math";

export default function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number> {
  return new Promise(async (resolve) => {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }
    
    resolve(average(times));
  });
}
```

The `benchmark` function measures the average execution time of a callback function over a specified number of iterations.

## Signature

```typescript
function benchmark(callback: () => void | Promise<void>, iterations?: number): Promise<number>;
```

### Parameters

- **`callback`** (`() => void | Promise<void>`): The function to be benchmarked.
- **`iterations`** (`number`, optional): The number of times to execute the callback. Default is 1.

### Returns

- **`Promise<number>`**: The average execution time in milliseconds.

## Examples

```typescript
async function example() {
  const time = await benchmark(() => {
    // some code to benchmark
  }, 10);
  console.log(`Average execution time: ${time}ms`);
}
example();
```

## Notes

- The function uses `performance.now()` to measure execution time.
- The average execution time is calculated using the `average` function.

## References

- [performance.now() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [average - Documentation](../math/average.md)
