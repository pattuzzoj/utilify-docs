# Funções Utilitárias

Esta seção contém funções utilitárias para facilitar diversas tarefas comuns de programação.

## benchmark

```typescript
function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number>;
```

Mede o tempo de execução de uma função ao longo de várias iterações e retorna a média.

## djb2

```typescript
function djb2(str: string): string;
```

Calcula o hash DJB2 de uma string.

## flatten

```typescript
function flatten<T>(arr: T[], depth: number): FlatArray<T[], number>[];
function flatten(obj: Record<string, any>, separator: string): Record<string, any>;
```

Achata arrays ou objetos, combinando elementos ou propriedades em um único nível.

## isEmpty

```typescript
function isEmpty(value: unknown): boolean;
```

Verifica se o valor fornecido é vazio (incluindo `null`, `undefined`, strings vazias, objetos e arrays vazios).

## sanitize

```typescript
function sanitize(str: string, values: string[], replace?: string): string;
function sanitize<T>(arr: T[], values: T[], replace?: T): T[];
function sanitize(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```

Sanitiza valores de strings, arrays ou objetos, substituindo ou removendo elementos indesejados.
```