# Funções Utilitárias para Objetos

A categoria de **funções utilitárias para objetos** inclui uma série de funções práticas para manipulação, comparação e transformação de objetos. Essas funções são essenciais para lidar com estruturas de dados em JavaScript/TypeScript e podem simplificar muitas operações comuns no desenvolvimento de software.

## [clone](./clone.md)
```typescript
export default function clone<T extends Record<string, any>>(value: T): T;
export default function clone<T extends unknown[]>(value: T): T;
```
Cria uma cópia rasa de um objeto ou array, copiando suas propriedades diretamente.

## [deepClone](./deepClone.md)
```typescript
export default function deepClone<T extends Record<string, any>>(value: T): T;
export default function deepClone<T extends unknown[]>(value: T): T;
```
Cria uma cópia profunda de um objeto ou array, incluindo todas as suas propriedades aninhadas.

## [deepFreeze](./deepFreeze.md)
```typescript
export default function deepFreeze(obj: Record<string, any>): Record<string, any>;
```
Congela profundamente um objeto, tornando suas propriedades e suas propriedades aninhadas imutáveis.


## [deepMerge](./deepMerge.md)
```typescript
function deepMerge(...values: Record<string, any>[]): Record<string, any>;
```
Realiza uma mesclagem profunda de múltiplos objetos, combinando suas propriedades e subpropriedades recursivamente.

## [flattenObj](./flattenObj.md)
```typescript
function flattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```
Achata um objeto aninhado em um formato de chave única, onde as chaves representam os caminhos das propriedades.

## [freeze](./freeze.md)
```typescript
function freeze<T>(obj: T): T;
```
Congela um objeto, tornando suas propriedades imutáveis (mas não congela suas propriedades aninhadas).

## [interpolate](./interpolate.md)
```typescript
function interpolate(str: string, values: Record<string, any>): string;
```
Substitui placeholders em uma string por valores fornecidos em um objeto.

## [isDeepEqual](./isDeepEqual.md)
```typescript
function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
```
Compara dois objetos ou arrays profundamente, verificando se são estruturalmente e semânticamente iguais.

## [isEqual](./isEqual.md)
```typescript
function isEqual(value1: any, value2: any): boolean;
```
Compara dois valores primitivos ou referências para verificar se são exatamente iguais, usando `Object.is`.

## [isEqualLength](./isEqualLength.md)
```typescript
function isEqualLength(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isEqualLength(value1: unknown[], value2: unknown[]): boolean;
```
Compara a quantidade de propriedades de dois objetos ou o comprimento de dois arrays, retornando true se forem iguais, e false caso contrário.

## [merge](./merge.md)
```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: unknown[][]): unknown[];
```
Faz uma mesclagem profunda de múltiplos objetos ou arrays, combinando suas propriedades ou elementos em um novo objeto ou array.

## [omit](./omit.md)
```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
```
Cria um novo objeto a partir de um objeto fornecido, omitindo as chaves especificadas.

## [pick](./pick.md)
```typescript
function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
```
Cria um novo objeto contendo apenas as chaves selecionadas de um objeto original.

## [sanitizeObj](./sanitizeObj.md)
```typescript
function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```
Sanitiza um objeto, substituindo valores específicos por um valor de substituição opcional.

## [unflattenObj](./unflattenObj.md)
```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```
Transforma um objeto achatado de volta em sua estrutura aninhada original, utilizando um separador para identificar os níveis de hierarquia nas chaves.