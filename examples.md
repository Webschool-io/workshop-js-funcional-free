# Exemplos de funçoes conhecidas

[Códigos de exemplo](https://gist.github.com/halan/c3c0ec1142b8d1bbf242939c238fbcab) do mestre [Halan Pinheiro](https://github.com/halan)!

Como estou aprendendo bastante no grupo [Programacao Funcional Brasil](https://telegram.me/ProgramacaoFuncionalBrasil) com o [Halan Pinheiro](https://github.com/halan) então nada mais justo que eu ensine vocês também.


```js
const reduce = (reducer, initial, [head, ...tail]) =>
  head // condition to go or stop
    ? reduce(reducer, reducer(initial, head), tail) // recursion
    : initial // stop

const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop

const filter = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop

const zip = ([head, ...tail], [head2, ...tail2]) =>
  head // condition to go or stop
    ? [ [head, head2], ...zip(tail, tail2)] // recursion
    : [] // stop

const find = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? predicate(head) ? head : find(predicate, tail) // recursion
    : undefined // stop

const sort = ([head, ...tail]) => // quick sort (https://pt.wikipedia.org/wiki/Quicksort)
  head // condition to go or stop
    ? [...sort(filter(n => n <= head, tail)), head, ...sort(filter(n => n > head, tail))] // recursion (depends of filter)
    : [] // stop
```
