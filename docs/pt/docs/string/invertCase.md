# invertCase

```typescript
function invertCase(str: string): string {
  return str.split("").map((str) => {
    if(isLowerCase(str)) {
      return str.toUpperCase();
    } else if(isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}
```

A função `invertCase` recebe uma string e retorna uma nova string onde todas as letras maiúsculas são convertidas para minúsculas e todas as letras minúsculas são convertidas para maiúsculas. Caracteres não alfabéticos são mantidos inalterados.

## Assinatura

```typescript
function invertCase(str: string): string;
```

### Parâmetros

- **`str`** (`string`): A string cuja capitalização será invertida.

### Retorno

- **`string`**: A nova string com as letras maiúsculas e minúsculas invertidas.

## Exemplos

```typescript
console.log(invertCase("Hello World")); // "hELLO wORLD"
console.log(invertCase("JavaScript"));  // "jAVAsCRIPT"
console.log(invertCase("12345"));       // "12345" (caracteres não alfabéticos são inalterados)
```

## Notas

- Apenas caracteres alfabéticos (letras) têm sua capitalização invertida. Caracteres não alfabéticos, como números e símbolos, são deixados inalterados.

## Referências

- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)