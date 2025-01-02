# Funções Utilitárias de Tipos

As funções utilitárias de tipos são úteis para verificar e validar o tipo de dados em JavaScript/TypeScript. Elas permitem identificar de forma eficiente se um valor pertence a um tipo específico, como números, strings, objetos, arrays, funções, entre outros.

## [getInstanceType](./getInstanceType.md)
```typescript
function getInstanceType(value: object): string | undefined
```
Retorna o tipo do construtor de uma instância.

## [getType](./getType.md)
```typescript
function getType(value: any): string
```
Retorna o tipo do valor, como uma string (por exemplo, `map`, `string`, etc.).

## [isAsync](./isAsync.md)
```typescript
function isAsync(value: any): boolean
```
Verifica se a função fornecida é assíncrona (`async`).

## [isBigint](./isBigint.md)
```typescript
function isBigint(value: unknown): boolean
```
Verifica se o valor é do tipo `bigint`.

## [isBoolean](./isBoolean.md)
```typescript
function isBoolean(value: unknown): boolean
```
Verifica se o valor é do tipo `boolean`.

## [isDate](./isDate.md)
```typescript
function isDate(value: Date): boolean
```
Verifica se o valor é uma instância de `Date`.

## [isEqualType](./isEqualType.md)
```typescript
function isEqualType(value1: unknown, value2: unknown): boolean
```
Verifica se dois valores possuem o mesmo tipo.

## [isFalsy](./isFalsy.md)
```typescript
function isFalsy(value: unknown): boolean
```
Verifica se o valor é considerado falso (falsy) em um contexto booleano.

## [isFunction](./isFunction.md)
```typescript
function isFunction(value: unknown): boolean
```
Verifica se o valor é do tipo `function`.

## [isJSON](./isJSON.md)
```typescript
function isJSON(value: string): boolean
```
Verifica se o valor é uma string JSON válida.

## [isMap](./isMap.md)
```typescript
function isMap(value: unknown): boolean
```
Verifica se o valor é uma instância de `Map`.

## [isNull](./isNull.md)
```typescript
function isNull(value: unknown): boolean
```
Verifica se o valor é `null`.

## [isObject](./isObject.md)
```typescript
function isObject(value: unknown): boolean
```
Verifica se o valor é um objeto.

## [isPrimitive](./isPrimitive.md)
```typescript
function isPrimitive(value: unknown): boolean
```
Verifica se o valor é um tipo primitivo (não é objeto nem função).

## [isPromise](./isPromise.md)
```typescript
function isPromise(value: object): boolean
```
Verifica se o valor é uma instância de `Promise`.

## [isRegExp](./isRegExp.md)
```typescript
function isRegExp(value: unknown): boolean
```
Verifica se o valor é uma instância de `RegExp`.

## [isSet](./isSet.md)
```typescript
function isSet(value: unknown): boolean
```
Verifica se o valor é uma instância de `Set`.

## [isString](./isString.md)
```typescript
function isString(value: unknown): boolean
```
Verifica se o valor é do tipo `string`.

## [isSymbol](./isSymbol.md)
```typescript
function isSymbol(value: unknown): boolean
```
Verifica se o valor é do tipo `symbol`.

## [isTruthy](./isTruthy.md)
```typescript
function isTruthy(value: unknown): boolean
```
Verifica se o valor é considerado verdadeiro (truthy) em um contexto booleano.

## [isUndefined](./isUndefined.md)
```typescript
function isUndefined(value: unknown): boolean
```
Verifica se o valor é `undefined`.