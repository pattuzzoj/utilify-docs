# isEqual

```typescript
export default function isEqual(value1: any, value2: any): boolean {
  return Object.is(value1, value2);
}
```

A função `isEqual` compara dois valores de maneira superficial, verificando se são estritamente iguais utilizando `Object.is`.

## Assinatura

```typescript
function isEqual(value1: any, value2: any): boolean;
```

## Parâmetros

- **`value1`** (`any`): O primeiro valor a ser comparado.
- **`value2`** (`any`): O segundo valor a ser comparado.

## Retorno

- **`boolean`**: Retorna `true` se os valores forem iguais, ou `false` caso contrário.

## Exemplos

```typescript
console.log(isEqual(1, 1)); // true
console.log(isEqual(1, '1')); // false
console.log(isEqual(NaN, NaN)); // true
console.log(isEqual(null, undefined)); // false
```

## Notas

- A função utiliza `Object.is` para realizar a comparação, o que significa que ela verifica igualdade de valor e tipo, incluindo comportamentos especiais como o tratamento de `NaN` (que é igual a si mesmo) e a distinção entre `null` e `undefined`.

## Referências

- [Object.is() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)