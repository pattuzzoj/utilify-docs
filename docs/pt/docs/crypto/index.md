# Funções Utilitárias de Criptografia

As funções utilitárias de criptografia fornecem uma variedade de métodos para operações criptográficas. Essas funções ajudam a simplificar operações comuns, como hashing e geração de valores aleatórios, entre outras.

## [hash](./hash.md)
```typescript
function hash(data: string, algorithm: string): string
```
Retorna o hash dos dados fornecidos usando o algoritmo especificado.

## [randomUUID](./randomUUID.md)
```typescript
function randomUUID(): string | undefined
```
Gera um UUID aleatório usando a API Web Crypto.
