# isEmptyString

```typescript
function isEmptyString(str: string): boolean {
  return /^\s*$/.test(str);
}
```

Verifica se a string é vazia ou contém apenas espaços em branco.

## Assinatura

```typescript
function isEmptyString(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string que será verificada.

### Retorno

- **`boolean`**: Retorna `true` se a string estiver vazia ou contiver apenas espaços em branco, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isEmptyString("")); // true
console.log(isEmptyString("   ")); // true
console.log(isEmptyString("Hello")); // false
console.log(isEmptyString("  Hello ")); // false
```

## Notas

- A função considera espaços em branco (como espaços, tabulações e quebras de linha) como conteúdo "vazio".
  
## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)