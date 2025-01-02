# Funções Utilitárias de Array

As funções utilitárias de array fornecem uma variedade de métodos para manipulação e transformação de arrays. Essas funções ajudam a simplificar operações comuns, como dividir, achatar, embaralhar, e encontrar diferenças entre arrays, entre outras.

## [after](./after.md)
```typescript
function after(array: any[], n: number): any[]
```
Retorna os elementos do array após o índice `n`.

## [before](./before.md)
```typescript
function before(array: any[], n: number): any[]
```
Retorna os elementos do array antes do índice `n`.

## [chunk](./chunk.md)
```typescript
function chunk(array: any[], size: number): any[][]
```
Divide o array em pedaços menores de tamanho `size`.

## [difference](./difference.md)
```typescript
function difference(array: any[], values: any[]): any[]
```
Retorna os elementos do array que não estão presentes no segundo array.

## [first](./first.md)
```typescript
function first(array: any[], n?: number): any[]
```
Retorna os primeiros `n` elementos do array.

## [flattenArr](./flattenArr.md)
```typescript
function flattenArr(array: any[], depth?: number): any[]
```
Achata o array até a profundidade especificada.

## [getRandom](./getRandom.md)
```typescript
function getRandom(array: any[]): any
```
Retorna um elemento aleatório do array.

## [isIterable](./isIterable.md)
```typescript
function isIterable(obj: any): boolean
```
Verifica se o objeto é iterável.

## [last](./last.md)
```typescript
function last(array: any[], n?: number): any[]
```
Retorna os últimos `n` elementos do array.

## [rotate](./rotate.md)
```typescript
function rotate(array: any[], n: number): any[]
```
Rotaciona os elementos do array `n` posições.

## [sanitizeArr](./sanitizeArr.md)
```typescript
function sanitizeArr(array: any[], values: any[], replaceValue?: any): any[]
```
Remove ou substitui os valores especificados no array.

## [shuffle](./shuffle.md)
```typescript
function shuffle(array: any[]): any[]
```
Embaralha os elementos do array.

## [swap](./swap.md)
```typescript
function swap(array: any[], index1: number, index2: number): any[]
```
Troca os elementos nas posições `index1` e `index2`.

## [union](./union.md)
```typescript
function union(...arrays: any[][]): any[]
```
Retorna a união de múltiplos arrays.

## [unique](./unique.md)
```typescript
function unique(array: any[]): any[]
```
Retorna um array com elementos únicos.
