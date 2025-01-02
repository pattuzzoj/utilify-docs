# Funciones Utilitarias de Criptografía

Las funciones utilitarias de criptografía proporcionan una variedad de métodos para operaciones criptográficas. Estas funciones ayudan a simplificar operaciones comunes como hashing y generación de valores aleatorios, entre otras. A continuación se muestra una descripción general de las funciones disponibles en esta categoría, incluidas sus firmas y descripciones.

## [hash](./hash.md)
```typescript
function hash(data: string, algorithm: string): string
```
Devuelve el hash de los datos proporcionados utilizando el algoritmo especificado.

## [randomUUID](./randomUUID.md)
```typescript
function randomUUID(): string | undefined
```
Genera un UUID aleatorio utilizando la API Web Crypto.
