Segue a documentação revisada com o código fonte incluído:

---

# isWeekend

```typescript
import { isValidDate } from ".";

export default function isWeekend(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
}
```

A função `isWeekend` verifica se uma data fornecida cai em um fim de semana (sábado ou domingo).

## Assinatura

```typescript
function isWeekend(date: Date): boolean | undefined;
```

### Parâmetros

- **`date`** (`Date`): O objeto `Date` a ser verificado. Deve representar uma data válida.

### Retorno

- **`boolean | undefined`**:
  - Retorna `true` se a data cair em um sábado ou domingo.
  - Retorna `false` se a data não cair em um fim de semana.
  - Retorna `undefined` se o argumento fornecido não for uma data válida.

## Exemplos

```typescript
console.log(isWeekend(new Date("2024-12-30"))); // false (segunda-feira)
console.log(isWeekend(new Date("2024-12-29"))); // true (domingo)
console.log(isWeekend(new Date("invalid-date"))); // undefined (e registra "Invalid date" no console)
```

## Notas

- A função utiliza `isValidDate` para garantir que o objeto `Date` fornecido seja válido antes de verificar o dia da semana.
- Um erro será registrado no console caso o argumento fornecido seja inválido.
- A validação evita erros ao acessar métodos em objetos `Date` inválidos.

## Referências

- [Date.getDay() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
- [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)