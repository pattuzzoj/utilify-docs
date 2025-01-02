# isURL

```typescript
function isURL(str: string): boolean
```
Verifica se a string fornecida é uma URL válida, considerando esquemas HTTP, HTTPS, e domínios comuns.

## Assinatura

```typescript
function isURL(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada como uma URL.

### Retorno

- **`boolean`**: Retorna `true` se a string for uma URL válida, caso contrário retorna `false`.

## Exemplos

```typescript
console.log(isURL("https://www.example.com")); // true
console.log(isURL("http://example.com")); // true
console.log(isURL("example.com")); // false
console.log(isURL("https://example")); // false
console.log(isURL("www.example.com")); // true
```

## Notas

- A função verifica se a URL pode incluir um protocolo (`http` ou `https`), um domínio e um caminho opcional.
- A URL pode conter ou não o prefixo `www`.
- O padrão não verifica se a URL está totalmente acessível ou se o domínio é válido, apenas a estrutura da URL.

## Referências

- [URL - MDN](https://developer.mozilla.org/en-US/docs/Glossary/URL)
- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)