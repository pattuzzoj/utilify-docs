# Funções Utilitárias de Datas

As funções utilitárias de datas ajudam a simplificar operações comuns relacionadas à manipulação, formatação e validação de objetos `Date` no JavaScript. Abaixo está uma visão geral das funções disponíveis nesta categoria.

## [adjustDate](./adjustDate.md)
```typescript
function adjustDate(date: Date, amount: number, unit: TimeUnit): Date
```
Ajusta uma data adicionando ou subtraindo uma quantidade de tempo especificada.

---

## [adjustTimezone](./adjustTimezone.md)
```typescript
function adjustTimezone(date: Date, timezoneOffset: number): Date
```
Ajusta uma data para o fuso horário especificado.

---

## [convertTime](./convertTime.md)
```typescript
function convertTime(time: number, from: TimeUnit, to: TimeUnit): number
```
Converte um valor de tempo entre diferentes unidades (milissegundos, segundos, minutos, horas, dias).

---

## [convertDate](./convertDate.md)
```typescript
function convertDate(date: Date, format: DateFormat): string | undefined
```
Converte uma data para diferentes formatos, como UTC ou ISO.

---

## [formatDate](./formatDate.md)
```typescript
function formatDate(date: Date, format: DateFormat, separator?: string): string | undefined
```
Formata uma data em diferentes padrões, como `DD/MM/YYYY`, `MM/DD/YYYY`, ou `YYYY/MM/DD`.

---

## [formatDuration](./formatDuration.md)
```typescript
function formatDuration(time: number, format?: string): string
```
Formata uma duração de tempo (em milissegundos) em um padrão especificado, como `hh:mm:ss`.

---

## [formatTime](./formatTime.md)
```typescript
function formatTime(date: Date, format: string): string | undefined
```
Formata o horário de uma data em um padrão personalizado, com suporte a 12h ou 24h.

---

## [isLeapYear](./isLeapYear.md)
```typescript
function isLeapYear(year: number): boolean
```
Determina se um ano é bissexto.

---

## [isValidDate](./isValidDate.md)
```typescript
function isValidDate(date: Date): boolean
```
Verifica se um objeto `Date` é válido.

---

## [isValidDateString](./isValidDateString.md)
```typescript
function isValidDateString(date: string): boolean
```
Verifica se uma string pode ser convertida em uma data válida.

---

## [isWeekday](./isWeekday.md)
```typescript
function isWeekday(date: Date): boolean | undefined
```
Verifica se a data fornecida é um dia útil (de segunda a sexta-feira).

---

## [isWeekend](./isWeekend.md)
```typescript
function isWeekend(date: Date): boolean | undefined
```
Verifica se a data fornecida é um final de semana (sábado ou domingo).

---

## [parseDate](./parseDate.md)
```typescript
function parseDate(input: string): Date | undefined
```
Converte uma string em um objeto `Date`, se possível. Retorna `undefined` para entradas inválidas.