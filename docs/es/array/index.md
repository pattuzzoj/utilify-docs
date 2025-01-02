# Funciones Utilitarias de Array

Las funciones utilitarias de array proporcionan una variedad de métodos para manipular y transformar arrays. Estas funciones ayudan a simplificar operaciones comunes como dividir, aplanar, barajar y encontrar diferencias entre arrays, entre otras. A continuación se muestra una descripción general de las funciones disponibles en esta categoría, incluidas sus firmas y descripciones.

## [after](./after.md)
```typescript
function after(array: any[], n: number): any[]
```
Devuelve los elementos del array después del índice `n`.

## [before](./before.md)
```typescript
function before(array: any[], n: number): any[]
```
Devuelve los elementos del array antes del índice `n`.

## [chunk](./chunk.md)
```typescript
function chunk(array: any[], size: number): any[][]
```
Divide el array en trozos más pequeños de tamaño `size`.

## [difference](./difference.md)
```typescript
function difference(array: any[], values: any[]): any[]
```
Devuelve los elementos del array que no están presentes en el segundo array.

## [first](./first.md)
```typescript
function first(array: any[], n?: number): any[]
```
Devuelve los primeros `n` elementos del array.

## [flattenArr](./flattenArr.md)
```typescript
function flattenArr(array: any[], depth?: number): any[]
```
Aplana el array hasta la profundidad especificada.

## [getRandom](./getRandom.md)
```typescript
function getRandom(array: any[]): any
```
Devuelve un elemento aleatorio del array.

## [isIterable](./isIterable.md)
```typescript
function isIterable(obj: any): boolean
```
Verifica si el objeto es iterable.

## [last](./last.md)
```typescript
function last(array: any[], n?: number): any[]
```
Devuelve los últimos `n` elementos del array.

## [rotate](./rotate.md)
```typescript
function rotate(array: any[], n: number): any[]
```
Rota los elementos del array `n` posiciones.

## [sanitizeArr](./sanitizeArr.md)
```typescript
function sanitizeArr(array: any[], values: any[], replaceValue?: any): any[]
```
Elimina o reemplaza los valores especificados en el array.

## [shuffle](./shuffle.md)
```typescript
function shuffle(array: any[]): any[]
```
Baraja los elementos del array.

## [swap](./swap.md)
```typescript
function swap(array: any[], index1: number, index2: number): any[]
```
Intercambia los elementos en las posiciones `index1` e `index2`.

## [union](./union.md)
```typescript
function union(...arrays: any[][]): any[]
```
Devuelve la unión de múltiples arrays.

## [unique](./unique.md)
```typescript
function unique(array: any[]): any[]
```
Devuelve un array con elementos únicos.
