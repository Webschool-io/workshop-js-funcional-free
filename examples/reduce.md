# Reduce

[Função reduce OFICIAL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Reduce - FUNCIONAL

```js
const reduce = (reducer, initial, [head, ...tail]) =>
  head // condition to go or stop
    ? reduce(reducer, reducer(initial, head), tail) // recursion
    : initial // stop
```