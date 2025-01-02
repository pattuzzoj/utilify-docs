# round

```typescript
export default function round(value: number, precision: number) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}
```

A função `round` arredonda um número para o número de casas decimais especificado, sem realizar arredondamento para o valor mais próximo. Em vez disso, ela trunca os valores após o número de casas decimais desejado.

## Assinatura

```typescript
function round(value: number, precision: number): number;
```

### Parâmetros

- **`value`** (`number`): O número a ser arredondado.
- **`precision`** (`number`): O número de casas decimais para o qual o valor será arredondado.

### Retorno

- **`number`**: O valor arredondado para o número especificado de casas decimais.

## Exemplos

```typescript
console.log(round(123.4567, 2)); 
// Exemplo: 123.45 (arredondado para 2 casas decimais)

console.log(round(123.4567, 3)); 
// Exemplo: 123.456 (arredondado para 3 casas decimais)

console.log(round(123.4567, 0)); 
// Exemplo: 123 (arredondado para 0 casas decimais)
```

## Notas

- A função utiliza `Math.trunc()` para truncar o valor após o número especificado de casas decimais, em vez de arredondá-lo.
- Se `precision` for maior que o número de casas decimais do valor, o número será retornado sem alterações adicionais.

## Referências

- [Math.trunc() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)