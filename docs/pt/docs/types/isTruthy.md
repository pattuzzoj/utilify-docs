# isTruthy

```typescript
function isTruthy(value: unknown): boolean
```

A função `isTruthy` verifica se o valor fornecido é considerado "verdadeiro" em um contexto booleano. Ela usa a função `isFalsy` para determinar se o valor é "falso" e inverte o resultado.

## Assinatura

```typescript
function isTruthy(value: unknown): boolean;
```

### Parâmetros

- **`value`** (`unknown`): O valor a ser verificado.

### Valor de Retorno

- **`boolean`**: Retorna `true` se o valor for considerado verdadeiro (não falsy), ou `false` caso contrário.

## Exemplos

```typescript
console.log(isTruthy(1)); // true
console.log(isTruthy("hello")); // true
console.log(isTruthy([])); // true
console.log(isTruthy(0)); // false
console.log(isTruthy(false)); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
console.log(isTruthy("")); // false
```

## Notas

- A função `isTruthy` utiliza a função `isFalsy` para verificar se o valor é "falsy" (valores como `0`, `false`, `null`, `undefined`, `NaN`, e strings vazias), e inverte o resultado para determinar se o valor é "truthy".
- Um valor é considerado "truthy" se ele não for um valor "falsy".

## Referências

- [Falsy values - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Falsy_values)