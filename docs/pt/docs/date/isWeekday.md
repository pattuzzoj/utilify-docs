Segue a documentação completa com o código fonte incluído:

---

# isWeekday

```typescript
import { isValidDate } from ".";

function isWeekday(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 < day && day < 6;
}
```

A função `isWeekday` verifica se uma data fornecida cai em um dia útil (de segunda a sexta-feira).

## Assinatura

```typescript
function isWeekday(date: Date): boolean | undefined;
```

### Parâmetros

- **`date`** (`Date`): O objeto `Date` a ser verificado. Deve representar uma data válida.

### Retorno

- **`boolean | undefined`**:
  - Retorna `true` se a data cair em um dia útil.
  - Retorna `false` se a data não cair em um dia útil.
  - Retorna `undefined` se o argumento fornecido não for uma data válida.

## Exemplos

```typescript
console.log(isWeekday(new Date("2024-12-30"))); // true (segunda-feira)
console.log(isWeekday(new Date("2024-12-29"))); // false (domingo)
console.log(isWeekday(new Date("invalid-date"))); // undefined (e registra "Invalid date" no console)
```

## Notas

- A função utiliza `isValidDate` para garantir que o objeto `Date` fornecido seja válido antes de verificar o dia da semana.
- Um erro será registrado no console caso o argumento fornecido seja inválido.
- Dias úteis são definidos como segunda-feira (1) até sexta-feira (5) no método `getDay`.

## Referências

- [Date.getDay() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
- [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)