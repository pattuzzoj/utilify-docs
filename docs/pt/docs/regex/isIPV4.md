# isIPV4

```typescript
function isIPV4(str: string): boolean {
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(str);
}
```

Verifica se a string é um endereço IP válido no formato IPv4.

## Assinatura

```typescript
function isIPV4(str: string): boolean;
```

### Parâmetros

- **`str`** (`string`): O endereço IP a ser verificado.

### Retorno

- **`boolean`**: Retorna `true` se a string for um endereço IPv4 válido, caso contrário, retorna `false`.

## Exemplos

```typescript
console.log(isIPV4("192.168.1.1")); // true
console.log(isIPV4("256.256.256.256")); // false
console.log(isIPV4("192.168.1.1:8080")); // true
console.log(isIPV4("192.168.1.1:70000")); // false
```

## Notas

- O endereço IPv4 deve ter quatro octetos (números de 0 a 255) separados por pontos.
- Se uma porta for especificada, ela também será validada (entre 0 e 65535).

## Referências

- [RegExp - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)