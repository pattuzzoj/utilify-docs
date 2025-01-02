# sanitizeStr

```typescript
function sanitizeStr(str: string, values: string[], replace?: string): string {
  const regex = new RegExp(`${values.join("|")}`, "g");
  return str.trim().replace(regex, replace ?? "");
}
```

A função `sanitizeStr` remove ou substitui valores especificados em uma string. É útil para limpar entradas de texto, como remover palavras indesejadas ou substituir caracteres específicos.

## Assinatura

```typescript
function sanitizeStr(str: string, values: string[], replace?: string): string;
```

### Parâmetros

- **`str`** (`string`): A string a ser sanitizada.
- **`values`** (`string[]`): Um array de valores que serão substituídos ou removidos na string.
- **`replace`** (`string`, opcional): O valor que substituirá os valores encontrados. Se não fornecido, os valores serão removidos.

### Retorno

- **`string`**: A string sanitizada, com os valores substituídos ou removidos.

## Exemplos

```typescript
console.log(sanitizeStr("Hello world!", ["world"], "*")); // "Hello *!"
console.log(sanitizeStr("This is a test.", ["test", "is"], "-")); // "Th- - a -."
```

## Notas

- A função utiliza uma expressão regular construída a partir dos valores fornecidos para procurar todas as ocorrências e substituí-las.
- Caso o parâmetro `replace` não seja fornecido, as ocorrências serão removidas.

## Referências

- [RegExp constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [String.prototype.replace() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)