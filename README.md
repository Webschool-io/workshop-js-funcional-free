#JS Funcional

##O que é programação funcional?



##Funções

No JavaScript uma função nada mais é que um objeto que possui atributos como:

- arguments
- name
- length

E funções importantes como:

- apply
- call

Para criarmos uma funçõa no JavaScript é muito simples, precisamos apenas utilizar a palavra ´function´:

![Homer fazendo Doh](https://cldup.com/CVvUx6Uswo.gif)

```js
function add(a, b) {
  return a + b;
}
```

Agora veremos o porquê falamos que as funções em JavaScript são *first-class citizens* .

###First-class citizens

No JavaScript a função é first-class citizen, assim como objeto, entidade ou valor, porque ela suporta todas as operações comuns às outras entidades.

Essas operações incluem:

- assinada a uma variável
- retornada de uma função
- ser passada por parâmetro

Vamos mostrar cada uma dessas operações com o exemplo anterior:

```js
// assinada a uma variável
var add = function (a, b) {
  return a + b;
}
```

```js
// retornada de uma função
function multiply(a) {
  var sum = 0;
  return function(b) {
    sum = b;
    for(i=1; i<a; i++){
      sum += b;
    }
    return sum;
  };
}
```

```js
// ser passada por parâmetro
function add(a, b) {
  return a + b;
}
```

###High-order function

- recebe uma ou mais funções como parâmetro
- retorna uma função



###Closures

###Currying

