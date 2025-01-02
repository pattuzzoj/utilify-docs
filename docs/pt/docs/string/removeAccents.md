# removeAccents

```typescript
function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
```

A função `removeAccents` remove os acentos de uma string, normalizando a string para a forma de decomposição (NFD) e removendo os caracteres de acento. Isso pode ser útil para comparação de strings sem considerar os acentos.

## Assinatura

```typescript
function removeAccents(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string da qual os acentos serão removidos.

### Retorno

- **`string`**: A string sem os acentos.

## Exemplos

```typescript
console.log(removeAccents("Olá, mundo!")); // "Ola, mundo!"
console.log(removeAccents("café")); // "cafe"
```

## Notas

- A função utiliza a normalização Unicode (`NFD`) para decompor caracteres acentuados e, em seguida, remove os diacríticos (acentos).
- A função não afeta os caracteres não acentuados.

## Referências

- [String.prototype.normalize() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [Regular expressions for Unicode character ranges - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#unicode)