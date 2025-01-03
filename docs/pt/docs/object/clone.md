# clone

```typescript
function clone<T extends Record<string, any>>(value: T): T;
function clone<T extends unknown[]>(value: T): T;
function clone<T>(value: T): T {
	const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
```

A função `clone` cria uma cópia superficial (shallow copy) do valor fornecido, preservando o tipo original, seja um objeto ou um array. Isso é útil quando se deseja duplicar uma estrutura de dados sem alterar o valor original.

## Assinatura

```typescript
function clone<T extends Record<string, any>>(value: T): T;
function clone<T extends unknown[]>(value: T): T;
function clone<T>(value: T): T;
```

## Parâmetros

- **`value`** (`T`): O valor que será clonado. Pode ser um objeto ou um array.

## Retorno

- **`T`**: Uma nova instância de `value`, mas com os mesmos dados. Se `value` for um objeto, ele será clonado superficialmente; se for um array, será clonado também superficialmente.

## Exemplos

```typescript
const obj = { a: 1, b: { c: 2 } };
const clonedObj = clone(obj);

console.log(clonedObj); // { a: 1, b: { c: 2 } }
console.log(clonedObj !== obj); // true (o objeto é uma nova instância)
console.log(clonedObj.b !== obj.b); // false (a referência interna foi copiada)

const arr = [1, 2, [3, 4]];
const clonedArr = clone(arr);

console.log(clonedArr); // [1, 2, [3, 4]]
console.log(clonedArr !== arr); // true (o array é uma nova instância)
console.log(clonedArr[2] !== arr[2]); // false (a referência interna foi copiada)
```

## Notas

- **Clonagem superficial**: A clonagem é superficial, o que significa que, se o valor fornecido contiver objetos ou arrays aninhados, esses serão compartilhados entre o original e o clonado.
- **Limitações**: A clonagem não trata de propriedades não enumeráveis ou símbolos, e também não lida com tipos complexos como `Map`, `Set` ou instâncias de classes personalizadas de forma profunda.
  
## Referências

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)