# isUUID

```typescript
function isUUID(str: string): boolean
```
Verifica se a string fornecida corresponde ao formato de um UUID (Universally Unique Identifier) versão 4.

## Assinatura

```typescript
function isUUID(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): A string a ser verificada como um UUID.

### Retorno

- **`boolean`**: Retorna `true` se a string corresponder ao formato de um UUID válido, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isUUID("123e4567-e89b-12d3-a456-426614174000")); // true
console.log(isUUID("123e4567-e89b-12d3-a456-42661417400Z")); // false
console.log(isUUID("123e4567e89b12d3a4564266141740000")); // false
console.log(isUUID("abcd1234-ab12-34cd-56ef-7890ab123456")); // true
```

## Notas

- A função verifica se a string segue o formato padrão de UUID, que é `8-4-4-4-12` caracteres hexadecimais, separados por hífens.
- Essa verificação não garante que o UUID seja válido em termos de unicidade ou de estar presente em um banco de dados, apenas assegura que a string siga o formato de um UUID.

## Referências

- [UUID - MDN](https://developer.mozilla.org/en-US/docs/Glossary/UUID)
- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)