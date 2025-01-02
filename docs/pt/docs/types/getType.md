# getType

```typescript
function getType(value: any): string {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}
```

Determina o tipo de um valor em JavaScript/TypeScript, retornando uma string minúscula que representa o tipo. A função getType é mais robusta do que o operador typeof, pois diferencia tipos como NaN, Infinity, arrays e objetos de forma mais precisa.

## Assinatura
```typescript
function getType(value: any): string
```

## Parâmetros
- `value` (any): O valor cujo tipo será determinado

## Retorno
- `string`: Uma string minúscula representando o tipo do valor

## Exemplos
```typescript
getType(42);          // "number"
getType("texto");     // "string"
getType(NaN);         // "nan"
getType(Infinity);    // "infinity"
getType([]);          // "array"
getType({});          // "object"
getType(null);        // "null"
getType(undefined);   // "undefined"
```

## Notas
- Diferencia NaN e Infinity de outros números
- Usa Object.prototype.toString para determinação precisa do tipo
- Retorna tipos em letras minúsculas