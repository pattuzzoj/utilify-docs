# isAsync

```typescript
function isAsync(callback: Function): boolean
```

A função `isAsync` verifica se uma função é assíncrona (async).

## Assinatura

```typescript
function isAsync(callback: Function): boolean;
```

### Parâmetros

- **`callback`** (`Function`): Função a ser verificada

### Retorno

- **`boolean`**: Retorna `true` se a função for assíncrona, `false` caso contrário

## Exemplos

```typescript
async function asyncFn() {}
function regularFn() {}

console.log(isAsync(asyncFn)); // true
console.log(isAsync(regularFn)); // false
console.log(isAsync(() => {})); // false
console.log(isAsync(async () => {})); // true
```

## Notas

- Retorna `false` se o valor de entrada não for uma função
- Verifica o nome do construtor para determinar se a função é assíncrona
