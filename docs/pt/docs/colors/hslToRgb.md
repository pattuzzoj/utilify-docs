# hslToRgb

```typescript
function hslToRgb(hsl: string): string | null {
  if (!isHsl(hsl)) {
    console.error("Invalid HSL color", hsl);
    return null;
  }

  let [h, s, l, a] = hsl.split(",") as any[];
  h = h % 360;
  s = Number(s.replace("%", "")) / 100;
  l = Number(l.replace("%", "")) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    (r = c), (g = x);
  } else if (60 <= h && h < 120) {
    (r = x), (g = c);
  } else if (120 <= h && h < 180) {
    (g = c), (b = x);
  } else if (180 <= h && h < 240) {
    (g = x), (b = c);
  } else if (240 <= h && h < 300) {
    (r = x), (b = c);
  } else if (300 <= h && h < 360) {
    (r = c), (b = x);
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const rgb = [r, g, b];

  if (a) {
    rgb.push(a);
  }

  return rgb.join(", ");
}
```

A função `hslToRgb` converte uma string de cor HSL para sua representação RGB.

## Assinatura

```typescript
function hslToRgb(hsl: string): string | null;
```

### Parâmetros

- **`hsl`** (`string`): A string de cor HSL a ser convertida.

### Retorno

- **`string | null`**: Retorna a string de cor RGB se a entrada for válida, caso contrário `null`.

## Exemplos

```typescript
console.log(hslToRgb("0, 100%, 50%")); // "255, 0, 0"
console.log(hslToRgb("120, 100%, 50%, 0.5")); // "0, 255, 0, 0.5"
console.log(hslToRgb("invalid")); // null
```

## Notas

- A função suporta strings HSL com ou sem canal alfa.
- O canal alfa, se presente, é incluído na saída.

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)
