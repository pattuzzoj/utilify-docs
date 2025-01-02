# wordCount

```typescript
function wordCount(str: string): number {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}
```

A função `wordCount` conta o número de palavras em uma string, considerando que palavras são separadas por espaços.

## Assinatura

```typescript
function wordCount(str: string): number;
```

### Parâmetros

- **`str`** (`string`): A string na qual as palavras serão contadas.

### Retorno

- **`number`**: O número de palavras presentes na string fornecida.

## Exemplos

```typescript
console.log(wordCount("Hello world!")); // 2
console.log(wordCount("  This is    a test string.  ")); // 5
```

## Notas

- A função remove espaços extras antes de contar as palavras, tratando múltiplos espaços consecutivos como um único separador.
  
## Referências

- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
