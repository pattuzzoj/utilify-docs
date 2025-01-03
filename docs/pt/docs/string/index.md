# Utilitários String

As funções utilitárias de string fornecem uma variedade de métodos para manipulação de texto, como transformação, contagem de palavras, sanitização e formatação.

## [capitalize](./capitalize.md)

```typescript
function capitalize(str: string): string
```

Capitaliza a primeira letra de uma string.

## [invertCase](./invertCase.md)

```typescript
function invertCase(str: string): string
```

Inverte o caso de cada caractere em uma string.

## [maskString](./maskString.md)

```typescript
function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*'): string
```

Substitui uma parte da string por um caractere de máscara.

## [removeAccents](./removeAccents.md)

```typescript
function removeAccents(str: string): string
```

Remove os acentos de uma string.

## [sanitizeStr](./sanitizeStr.md)

```typescript
function sanitizeStr(str: string, values: string[], replace?: string): string
```

Sanitiza uma string removendo ou substituindo valores indesejados.

## [slugify](./slugify.md)

```typescript
function slugify(str: string): string
```

Transforma uma string em um formato de URL amigável (slug).

## [toCamelCase](./toCamelCase.md)

```typescript
function toCamelCase(str: string): string
```

Transforma uma string em formato camelCase.

## [toKebabCase](./toKebabCase.md)

```typescript
function toKebabCase(str: string): string
```

Transforma uma string em formato kebab-case.

## [toPascalCase](./toPascalCase.md)

```typescript
function toPascalCase(str: string): string
```

Transforma uma string em formato PascalCase.

## [toSnakeCase](./toSnakeCase.md)

```typescript
function toSnakeCase(str: string): string
```

Transforma uma string em formato snake_case.

## [truncate](./truncate.md)

```typescript
function truncate(text: string, size: number): string
```

Trunca uma string até um tamanho específico e adiciona "..." no final.

## [wordCount](./wordCount.md)

```typescript
function wordCount(str: string): number
```

Conta o número de palavras em uma string.