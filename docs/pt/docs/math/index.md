# Utilitários Math

As funções utilitárias de matemática fornecem métodos para realizar operações comuns e complexas de matemática. Abaixo estão as funções disponíveis nesta categoria, incluindo suas assinaturas e descrições.

## [average](./average.md)
```typescript
function average(values: number[]): number;
```
Retorna a média aritmética dos valores fornecidos.

## [clamp](./clamp.md)
```typescript
function clamp(value: number, min: number, max: number): number;
```
Restringe o valor fornecido ao intervalo entre um valor mínimo e máximo.

## [divisors](./divisors.md)
```typescript
function divisors(num: number): number[];
```
Retorna um array com todos os divisores de um número.

## [factorial](./factorial.md)
```typescript
function factorial(value: number): number;
```
Calcula o fatorial de um número.

## [fibonacci](./fibonacci.md)
```typescript
function fibonacci(num: number): number;
```
Retorna o número de Fibonacci na posição fornecida.

## [frequency](./frequency.md)
```typescript
function frequency<T>(arr: T[]): Record<string, number>;
```
Retorna um objeto com a frequência de cada valor em um array.

## [isBetween](./isBetween.md)
```typescript
function isBetween(value: number, min: number, max: number): boolean;
```
Verifica se um valor está dentro de um intervalo específico.

## [isEven](./isEven.md)
```typescript
function isEven(value: number): boolean;
```
Verifica se o número fornecido é par.

## [isInteger](./isInteger.md)
```typescript
function isInteger(value: number): boolean;
```
Verifica se o valor fornecido é um número inteiro.

## [isOdd](./isOdd.md)
```typescript
function isOdd(value: number): boolean;
```
Verifica se o número fornecido é ímpar.

## [isPrime](./isPrime.md)
```typescript
function isPrime(num: number): boolean;
```
Verifica se o número fornecido é primo.

## [random](./random.md)
```typescript
function random(min: number = 0, max: number = 10): number;
```
Retorna um número aleatório entre o valor mínimo e máximo fornecido.

## [round](./round.md)
```typescript
function round(value: number, precision: number): number;
```
Arredonda um número para o número de casas decimais especificado.

## [sum](./sum.md)
```typescript
function sum(values: number[]): number;
```
Retorna a soma de todos os valores de um array.

## [sumOfDigits](./sumOfDigits.md)
```typescript
function sumOfDigits(num: number): number;
```
Retorna a soma dos dígitos de um número.