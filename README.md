![Logo da Webschool](https://cldup.com/e4fv0p2YcZ-1200x1200.png)

![Logo do curso JS Funcional](https://cldup.com/O-RtLiGYcX.gif)
#JS Funcional

Possuímos 3 grandes paradigmas de programação: 

- Funcional
- Orientação a objetos
- Imperativo

A Funcional é a mais antiga, sua primeira linguagem foi criada em 1955 (IPL) e posteriomente a mais popular LISP foi criada em 1958. Fortran e COBOL foram criadas respectivamentes em 1956 e 1959, são imperativas.


##O que é programação funcional?

Programação funcional é um paradigma que trata a computação como uma avaliação de funções matemáticas e evita estados ou dados mutáveis. Utiliza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa.

Uma função pode ter ou não ter parâmetros e um simples valor de retorno. Os parâmetros são os valores de entrada da função, e o valor de retorno é o resultado da função. A definição de uma função descreve como a função será avaliada em termos de outras funções.

Assim como na orientação a objetos a menor parte de um sistema é um objeto, você pode atribuir objetos a variáveis, pode passá-los por parâmetro e ter métodos retornando objetos, na programação funcional, a menor parte do seu sistema é uma função.

Por exemplo, a função f(x) = x^2 + 5 é definida utilizando funções de exponenciação e adição. Do mesmo modo, a linguagem deve oferecer funções básicas que não requerem definições adicionais.

###Linguagens funcionais

Hoje em dia com o aumento na necessidade de sistemas concorrentes as linguagens funcionais estão voltando para o mercado comercial. Vemos muitas grandes empresas usarem: Erlang, Haskell, Scala, etc.

Linguagens mais conhecidas:

- Clojure
- Erlang
- F#
- Haskell
- Lisp
- OCaml
- R
- Scala
- Scheme

LISP introduziu a maioria das características hoje encontradas nas modernas linguagens de programação funcional. Scheme foi uma tentativa posterior de simplificar e melhorar LISP. Haskell foi lançada no fim dos anos 1980 numa tentativa de juntar muitas ideias na pesquisa de programação funcional.

###Lambda
O cálculo lambda(λ) pode ser considerado a primeira linguagem de programação funcional, embora nunca tenha sido projetada para ser realmente executada em um computador. É um modelo de computação projetado por [Alonzo Church](https://pt.wikipedia.org/wiki/Alonzo_Church) nos anos 1930 que oferece um modo muito formal de descrever um cálculo de uma função.

###Por que JavaScript é funcional?

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

![Hein!?](https://cldup.com/Oul_G5l7FB.gif)

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

add(400, 20); // 420
```

```js
// retornada de uma função
function adder(a) {
  return function(b) {
    return a + b;
  }
}

var add20 =  adder(20);
add20(400) // 420
add20(646) // 666
// ou
adder(20)(400);
```

Podemos melhorar esse exemplo e criarmos a função de multiplicar.

```js
// retornada de uma função
function multiply(a) {
  var sum = 0;
  return function(b) {
    sum = b;
    for(var i=1; i<a; i++){
      sum += b;
    }
    return sum;
  };
}

multiply(2)(333); //666
```

Você deve ter percebido que podemos utilizar 2 formas de passagem de parâmetros, correto?

###High-order function

- recebe uma ou mais funções como parâmetro
- retorna uma função

###Closures

###Currying

