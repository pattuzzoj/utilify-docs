# truncate

```typescript
function truncate(text: string, size: number): string {
  return text.slice(0, size).concat("...");
}
```

A função `truncate` corta uma string para o comprimento especificado e adiciona "..." no final, indicando que o texto foi truncado.

## Assinatura

```typescript
function truncate(text: string, size: number): string;
```

### Parâmetros

- **`text`** (`string`): O texto original que será truncado.
- **`size`** (`number`): O comprimento máximo da string após a truncagem.

### Retorno

- **`string`**: A string truncada com "..." no final, se o comprimento original for maior que o valor especificado.

## Exemplos

```typescript
console.log(truncate("Hello, world!", 5)); // "Hello..."
console.log(truncate("This is a test string.", 10)); // "This is a ..."
```

## Notas

- Se o comprimento da string for menor ou igual ao valor de `size`, a string original será retornada sem modificação.

## Referências

- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)