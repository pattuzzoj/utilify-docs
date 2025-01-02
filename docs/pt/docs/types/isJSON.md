# isJSON

```typescript
function isJSON(value: string): boolean
```

A função `isJSON` verifica se uma string é um JSON válido.

## Assinatura

```typescript
function isJSON(value: string): boolean;
```

### Parâmetros

- **`value`** (`string`): A string a ser verificada.

### Valor de Retorno

- **`boolean`**: Retorna `true` se a string for um JSON válido, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isJSON('{"key":"value"}')); // true
console.log(isJSON('[1, 2, 3]')); // true
console.log(isJSON('Invalid JSON')); // false
console.log(isJSON('42')); // true (números são JSON válidos)
console.log(isJSON('')); // false
```

## Notas

- A função utiliza o método `JSON.parse` para validar o JSON.
- Qualquer erro gerado pelo método `JSON.parse` faz com que a função retorne `false`.
- Strings vazias ou com formatos inválidos não são consideradas JSON válidos.

## Referências

- [JSON.parse() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)