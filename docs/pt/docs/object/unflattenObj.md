# unflattenObj

```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any> {
  let unflatObj = {} as any;
  const regex = new RegExp(`${separator}`);

  for (const key in obj) {
    if (regex.test(key)) {
      const paths = key.split(separator);
      let reference = unflatObj;

      paths.slice(0, -1).forEach((path) => {
        if (!(path in reference)) {
          reference[path] = {};
        }
        
        reference = reference[path];
      });

      reference[paths[paths.length - 1]] = obj[key];
    } else {
      unflatObj[key] = obj[key];
    }
  }

  return unflatObj;
}
```

A função `unflattenObj` converte um objeto achatado de volta para sua estrutura aninhada original. Ela usa um separador para identificar as chaves que devem ser descompactadas, criando objetos aninhados onde necessário.

## Assinatura

```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```

## Parâmetros

- **`obj`** (`Record<string, any>`): O objeto achatado que será transformado de volta para sua estrutura aninhada.
- **`separator`** (`string`): O separador usado para identificar as hierarquias nas chaves (por padrão, é um ponto `"."`).

## Retorno

- **`Record<string, any>`**: Retorna um novo objeto com a estrutura aninhada reconstruída.

## Exemplos

```typescript
const flattenedObj = {
  "a.b": 1,
  "a.c.d": 2,
  "e": 3
};

const result = unflattenObj(flattenedObj, ".");
console.log(result);
// Output: { a: { b: 1, c: { d: 2 } }, e: 3 }

const flattenedObj2 = {
  "name.first": "John",
  "name.last": "Doe",
  "address.city": "New York"
};

const result2 = unflattenObj(flattenedObj2, ".");
console.log(result2);
// Output: { name: { first: "John", last: "Doe" }, address: { city: "New York" } }
```

## Notas

- O separador usado nas chaves achatadas deve ser consistente em todas as chaves do objeto.
- Se uma chave não contiver o separador, ela será mantida como está no objeto resultante.

## Referências

- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)