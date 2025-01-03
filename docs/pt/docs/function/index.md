# Utilitários Function

As funções utilitárias de funções fornecem diversas ferramentas para manipulação e controle de funções, como controle de execução, cache de resultados e composição de funções. Abaixo está uma visão geral das funções disponíveis nesta categoria, incluindo suas assinaturas e descrições.

## [compose](./compose.md)

```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

Componente para compor funções, aplicando-as da direita para a esquerda em um valor.

## [debounce](./debounce.md)

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void;
```

Adia a execução de uma função até que um período de inatividade tenha ocorrido após a última invocação.

## [defer](./defer.md)

```typescript
function defer(callback: () => void): void;
```

Enfileira a execução de uma função para ser executada após o ciclo de eventos atual.

## [fallback](./fallback.md)

```typescript
function fallback<T>(callback: () => T, fallback: () => T): T;
```

Executa a função `callback` e, em caso de erro, executa a função `fallback`.

## [guard](./guard.md)

```typescript
function guard<T, U = T>(validator: (value: T) => boolean, callback: (value: T) => U, fallback: (value: T) => U): (value: T) => U;
```

Executa uma função de callback se um valor passar por uma validação, caso contrário, executa uma função de fallback.

## [identity](./identity.md)

```typescript
function identity<T>(value: T): T;
```

Retorna o valor fornecido, útil como função de identidade.

## [lock](./lock.md)

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void;
```

Impedir a execução simultânea de uma função, garantindo que uma execução termine antes de permitir outra.

## [memo](./memo.md)

```typescript
function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any;
```

Armazena em cache os resultados de uma função com base em seus argumentos e os retorna imediatamente se a função for chamada novamente com os mesmos argumentos.

## [noop](./noop.md)

```typescript
function noop(): void;
```

Uma função que não faz nada, usada como um placeholder.

## [once](./once.md)

```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T;
```

Executa uma função apenas uma vez, independentemente de quantas vezes for chamada.

## [parallel](./parallel.md)

```typescript
function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]>;
```

Executa várias funções assíncronas em paralelo e aguarda todas as promessas serem resolvidas.

## [partialLeft](./partialLeft.md)

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

Cria uma versão da função fornecida com os argumentos iniciais pré-definidos.

## [partialRight](./partialRight.md)

```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

Cria uma versão da função fornecida com os argumentos finais pré-definidos.

## [pipe](./pipe.md)

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

Componente para compor funções, aplicando-as da esquerda para a direita em um valor.

## [rate](./rate.md)

```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean;
```

Limita a quantidade de vezes que uma função pode ser executada em um intervalo de tempo.

## [sleep](./sleep.md)

```typescript
function sleep(timeout: number): Promise<void>;
```

Pausa a execução de uma função por um tempo específico, útil em funções assíncronas.

## [throttle](./throttle.md)

```typescript
function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void;
```

Limita a frequência com que uma função pode ser chamada, permitindo que seja executada no máximo uma vez a cada `wait` milissegundos.