# maskString

```typescript
function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*'): string {
  const start = str.slice(0, maskStart);
  const end = str.slice(maskEnd, str.length);
  const maskLength = maskEnd - maskStart;
  const maskString = start + mask.repeat(maskLength) + end;

  return maskString;
}
```

A função `maskString` permite mascarar uma parte de uma string, substituindo uma seção dela com um caractere especificado, como asteriscos. É útil para mascarar informações sensíveis, como números de cartões de crédito.

## Assinatura

```typescript
function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*'): string;
```

### Parâmetros

- **`str`** (`string`): A string original que será mascarada.
- **`maskStart`** (`number`): O índice onde a máscara começará a ser aplicada.
- **`maskEnd`** (`number`): O índice onde a máscara terminará.
- **`mask`** (`string`, opcional): O caractere que será utilizado para mascarar a string. O padrão é o asterisco (`*`).

### Retorno

- **`string`**: A string original com a parte especificada mascarada.

## Exemplos

```typescript
console.log(maskString("1234567890", 3, 7)); // "123****890"
console.log(maskString("abcdefgh", 2, 5, "#")); // "ab###fgh"
```

## Notas

- A função utiliza o método `slice` para separar a string e aplicar a máscara apenas na parte especificada.
- O valor do parâmetro `mask` pode ser alterado para qualquer caractere desejado.

## Referências

- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.repeat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)