# sum

```typescript
function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
```

A função `sum` retorna a soma de todos os elementos em um array de números. Ela utiliza o método `reduce()` para acumular o total somando cada valor presente no array.

## Assinatura

```typescript
function sum(values: number[]): number;
```

### Parâmetros

- **`values`** (`number[]`): Um array de números a serem somados.

### Retorno

- **`number`**: A soma de todos os valores no array.

## Exemplos

```typescript
console.log(sum([1, 2, 3, 4, 5])); 
// Exemplo: 15 (a soma de 1 + 2 + 3 + 4 + 5)

console.log(sum([10, 20, 30])); 
// Exemplo: 60 (a soma de 10 + 20 + 30)

console.log(sum([0, 0, 0])); 
// Exemplo: 0 (a soma de 0 + 0 + 0)
```

## Notas

- Se o array estiver vazio, a função retornará 0, já que esse é o valor inicial da soma no `reduce()`.
- O `reduce()` é utilizado para iterar sobre os elementos e acumular o resultado da soma.

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)