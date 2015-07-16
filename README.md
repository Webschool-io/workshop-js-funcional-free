![Logo da Webschool e do Curso JS Funcional](https://cldup.com/bn_CJFPZce-2000x2000.png)

#Ementa
* [O Curso](#o-curso)
  * [Custo](#custo)
  * [Data e Hora](#data-e-hora)
* [O que é programação funcional?](#o-que-é-programação-funcional)
  * [Por que usar programação funcional?](#custo)
    * [Concorrência](#concorrência)
    * [Testes](#testes)
    * [Debugging](#debugging)
    * [Base teórica](#base-teórica)
    * [Onde usar?](#onde-usar)
    * [Quem está usando?](#quem-está-usando)
  * [Linguagens funcionais](#linguagens-funcionais)
  * [Lambda](#lambda)
  * [Teoria das Categorias](#teoria-das-ctegorias)
    * [Functor](#functor)
      * [Array Functor](#array-functor)
  * [Recursion](#recursion)
  * [For/list comprehensions](#forlist-comprehensions)
  * [Immutability](#immutability)
  * [Pure functions](#pure-functions)
  * [No side effects](#No-side-effects)
  * [Por que JavaScript é funcional?](#por-que-JavaScript-é-funcional)
* [Funções](#funções)
  * [Função anônima](#função-anônima)
  * [IIFE](#IIFE)
* [Loops](#loops)
* [First-class Function](#first-class-function)
* [High-order Function](#high-order-function)
* [Closures](#closures)
  * [Hoisting](#hoisting)
* [Currying](#currying)
* [Monads](#monads)
  * [Leis da *monad*](#Leis-da-monad)
* [Pattern matching](#pattern-matching)
* [Tail call](#tail-call)


____


# JS Funcional

Possuimos 2 grandes paradigmas de programação: 

- funcional
- imperativo.

A Funcional é a mais antiga, sua primeira linguagem foi criada em 1955 (IPL) e posteriomente a mais popular LISP foi criada em 1958. Fortran e COBOL foram criadas respectivamentes em 1956 e 1959, são imperativas.

O paradigma imperativo é baseada na arquitetura de Von Neumann, enquanto que o funcional é baseado no cálculo lambda.

## O Curso

Esse curso será dividido em módulos, cada um com 4 aulas, 1 por semana de duração média de 1 hora.

Não haverá um dia **FIXO** pois como sou nômade não posso sempre garantir tal data por diversos motivos, logo eu enviarei um email toda semana até Quarta-feira para avisar qual dia a aula ocorrerá sendo entre Quinta e Sábado.

O turno será o noturno, ainda farei uma pesquisa para ver se preferem as 21 ou 23 horas e as dúvidas deverão ser feitas em um canal, avisarei posteriormente qual, para que eu possa respondê-las e quiçá fazer uma aula avulsa para responder algumas perguntas.

### Custo

> Gratuitamente de graça

### Local

**ONLINE** via Hangout on Air

### Data e Hora

Entre Quinta e Sábado sendo ou as 21 ou as 23 horas(se a maioria dos alunos for estudante de faculdade provavelmente preferirá esse), Sábado podendo ser a tarde.

Cada aula terá uma média de 1 hora, sendo 4 aulas por mês.

Data e hora podem ser modificados mediante divulgação 12 horas antes.

Ele acontecerá **AO VIVO** semanalmente, mas caso você não consiga ver ao vivo ele ficará gravado [no nosso canal no Youtube.](https://www.youtube.com/channel/UCKdo1RaF8gzfhvkOdZv_ojg/videos)


## O que é programação funcional?

Programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e evita estados ou dados mutáveis. Utiliza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa.

Uma função pode ter ou não ter parâmetros e um simples valor de retorno. Os parâmetros são os valores de entrada da função, e o valor de retorno é o resultado da função. A definição de uma função descreve como a função será avaliada em termos de outras funções.

Assim como na orientação a objetos a menor parte de um sistema é um objeto, você pode atribuir objetos a variáveis, pode passá-los por parâmetro e ter métodos retornando objetos, na programação funcional, a menor parte do seu sistema é uma função.

Por exemplo, a função f(x) = x^2 + 5 é definida utilizando funções de exponenciação e adição. Do mesmo modo, a linguagem deve oferecer funções básicas que não requerem definições adicionais.

Vamos conhecer alguns fundamentos:

- não existe conceito de variáveis ou atribuição
- iterações devem ser construídas com recursão


[ESCREVER MAIS SOBRE]

### Por que usar programação funcional?

Temos 4 grandes motivos para usar programação funcional, são eles:

- concorrência: não temos deadlocks ou race conditions simplesmente porque não precisamos de locks - o dado é imutável;
- testes: criar testes unitários sem se preocupar com o estado simplesmente porque não existe estado. Devemos preocupar apenas com os argumentos das funções que nós testamos;
- debugging: rastrear algum valor no stack trace é bem simples;
- base teórica: linguagens funcionais são baseados no cálculo lambda, que é um sistema formal. Esta fundamentação teórica faz a prova para correção dos programas seja muito simples (por exemplo, usando indução).

#### Concorrência

Os processadores multicore estão presentes em praticamente todos os computadores modernos, inclusive em dispositivos móveis como telefones celular e tablets. Porém, pouco desse poder de processamento, provido pelos múltiplos núcleos, é aproveitado de maneira efetiva pelas aplicações devido à dificuldade de se escrever sistemas concorrentes.

Com o objetivo de tornar o desenvolvimento desse tipo de sistema mais palpável, alguns novos mecanismos de sincronização e paralelismo vem sendo propostos em linguagens de programação funcional. Esse tipo de linguagem prega um estilo de programação baseado em funções puras e dados imutáveis que facilita o desenvolvimento de programas concorrentes.

A concorrência nas linguagens imperativas tradicionais é relativamente complexa, o programador é o responsável pela sincronização de todas as tarefas.

Entretanto, as linguagens funcionais nos oferece oportunidades para a concorrência:

- A partir do momento em que uma função tem mais de um parâmetro, estes parâmetros devem em princípio ser avaliados simultaneamente (note que os parâmetros seriam as funções correspondentes às tarefas a serem executadas);
- A partir deste ponto, a responsabilidade pela sincronização das tarefas passa do programador para o compilador.

Todavia, as linguagens funcionais orientadas a multitarefa permitem ao programador trabalhar em um nível muito mais elevado do que as linguagens imperativas destinadas a este mesmo fim.

#### Testes
#### Debugging
#### Base teórica

#### Onde usar?

BI, Sistemas concorrentes

#### Quem está usando?

Spark, Netflix, Google, Facebook, [Amazon (Amazon Lambda)](http://www.infoworld.com/article/2847466/amazon-web-services/amazon-lambda-bridges-functional-programming-and-cloud.html), sistemas de avião como da família Airbus A340.

##### Erlang

Além da Ericsson, é lógico, há algumas outras grandes empresas e projetos usando Erlang, como por exemplo:

- Facebook, no backend de seu sistema de chat, lidando com 100 milhões de usuários ativos;
- Delicious, que tem mais de 5 milhões de usuários e mais de 150 milhões de bookmarks;
- Amazon SimpleDB, o serviço de dados do poderoso Amazon EC2;
- GitHub, no seu sistema de backend, lidando com milhares de transações concorrentes;
- Motorola;
- CouchDB;
- RabbitMQ.

Dados retirados daqui: <http://www.infoq.com/br/news/2010/02/erlang-proximo-grande-projeto>

##### Elixir

Como a sintaxe de Erlang pode não ser convidativa para desenvolvedores "modernos", por isso José Valim desenvolveu o Elixir, linguágem com sintaxe moderna que roda dentro da madura VM do Erlang.

Atualmente na versão 1.0, com sua framework web(Phoenix) dando os primeiros passos.

Saiba mais em:
Elixir: <http://elixir-lang.org/>
Phoenix: <http://www.phoenixframework.org/>

### Linguagens funcionais

Hoje em dia com o aumento na necessidade de sistemas concorrentes as linguagens funcionais estão voltando para o mercado comercial. Vemos muito grandes empresas usarem: Erlang, Haskell, Scala, etc.

Linguagens mais conhecidas:

- Erlang
- F#
- Haskell
- Lisp
- OCaml
- R
- Scala
- Scheme.

LISP introduziu a maioria das características hoje encontradas nas modernas linguagens de programação funcional. Scheme foi uma tentativa posterior de simplificar e melhorar LISP. Haskell foi lançada no fim dos anos 1980 numa tentativa de juntar muitas ideias na pesquisa de programação funcional.

### Lambda
O cálculo lambda pode ser considerado a primeira linguagem de programação funcional, embora nunca tenha sido projetada para ser realmente executada em um computador. É um modelo de computação projetado por [Alonzo Church](https://pt.wikipedia.org/wiki/Alonzo_Church) nos anos 1930 que oferece um modo muito formal de descrever um cálculo de uma função.

A ideia de Church era usar a noção de “processo” ou “transformação” (função) como essencial para fundamentar a matemática, ao invés da noção de conjunto de Cantor. O lambda cálculo não deu muito certo para isso na época, mas acabou sendo importante em outra questão do tempo: a busca pela definição formal do que vem a ser um procedimento efetivo. Em termos atuais, diríamos que essa busca tentava definir formalmente o que é “computação”.

(A ideia de usar o conceito de transformação como central na matemática retornou na segunda metade do século XX através da Teoria das Categorias, mas isso é outra história.)

#### Notação

Essa notação pode parecer um pouco confusa no início, mas veremos que não é nenhum bicho de sete cabeças.

![](https://cldup.com/gov3Q0J67O-1200x1200.jpeg)

*Queria ter colocado o Tiamat,  mas ele tem 5 cabeças apenas :(*

```
(λx.x) y
```

Basicamente `(λx.x)` tem como resultado a expressão `y`.

Onde `(E = x, F = y)`, guardem bem essa informação `E` é o resultado onde `x` é substituído pela expressão[função?] `F`.

Agora se `F(λx.x)(λx.y)` tem como resultado `(λx.y)`, então `(E = x, F = (λx.y))`. E é só isso, substituição textual.

A sintaxe das expressões-lambda é determinada por duas operações: abstração e aplicação (sendo que a aplicação envolve uma operação de substituição chamada conversão-β). Uma expressão-lambda pode ser uma variável, uma abstração de uma expressão, ou uma aplicação de duas expressões:

- Variáveis: x, y, z, um conjunto qualquer de nomes de variáveis.
- Abstrações: dada uma expressão-lambda E, podemos formar uma abstração de E usando `λ + variável + ‘.’ + E`. Por exemplo: `λx.x`
- Aplicações: dadas duas expressões-lambda `E` e `F`, a expressão da aplicação é formada pela justaposição de uma ao lado da outra: E F

A conversão-β é a regra de substituição que diz como a aplicação deve funcionar.

Analisemos essa expressão `(λ x. + x 1) 4` a conversão-β é:

```
+ 4 1
```

**Fácil não?**

![meme jackie chan](https://cldup.com/EZEjcYdurI-1200x1200.jpeg)

Zuerinha vou explicar é claro, vamos lá:

```
(λ x. + x 1) 4 → + 4 1
// (λ"variável"."E") "F"
// variável = x
// E = + x 1
// F = 4
```

Nesse caso a conversão-β resulta na expressão[?] `+ 4 1` onde substituímos a variável `x` da função[?] `E` pelo valor de `F`, agora ficou fácil né?

![meme meme-yeah-we-will-sse-about-that](https://cldup.com/9dhGMxmsQW-1200x1200.jpeg)


[Falar mais]

### Teoria das Categorias

A teoria das categorias é uma teoria matemática que trata de forma abstrata das estruturas matemáticas e dos relacionamentos entre elas. Ela pode ser entendida como um "jogo de setas", em que se abstrai o significado das construções.

As aplicações da teoria das categorias estendem-se por áreas como álgebra, teoria da recursividade, semântica formal, etc.

Uma única operação exigida em uma categoria é a **composição**. Ouviremos falar muito disso ainda.

- uma classe de objetos `a`, `b`, `c`, ...;
- para cada par de objetos a,b, uma classe de morfismos ou setas de a para b, denotados por `f:a -> b` (e neste caso se diz que a é o objeto origem e b é o objeto destino da seta);
- para cada objeto a, um morfismo chamado identidade em a, `id_a:a -> a` que tem origem e destino em `a`;
- uma operação de composição que associa a cada par de morfismos.

![imagem de uma função gigante de matemática apenas porque a zuera não tem limites](https://cldup.com/DgAjKvXx7W-1200x1200.png)

#### Functor

> A functor is a function, given a value and a function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns the new structure.

Vamos entender parte por parte:

- *functor* é uma função que irá receber um valor e uma função;
- desembrulha? os valores para chegar a seu(s) valor(es) interno(s);
- chama a função dada com o(s) valor(es) interno(s);
- envolve os valores devolvidos em uma nova estrutura;
- e retorna a nova estrutura.

![meme realy?](https://cldup.com/ERM06kh3ki-2000x2000.jpeg)

Sim eu sei que é basicamente a tradução do texto acima, bom então vamos aqo que interessa, *códigoooooooooooo*:

```js
function plus1(value) {
    return value + 1
};

function plus2(value) {
    return value + 2
};
```

Criamos duas funções simples, `plus1` adiciona 1 ao `value` e `plus2` adiciona 2, agora vamos escrever uma função ara que possamos usar qualquer uma dessas funções como e quando necessário:

```js
function F(value, fn) {
    return fn(value)
};

F(1, plus1); // 2
```

Essa função irá funcionar enquanto passarmos um inteiro, vamos tentar passar um *Array*:

```js
F([1, 2, 3], plus1); // '1,2,31'
```

![meme shit happens](https://cldup.com/g-9ZGuT22B-1200x1200.jpeg)

E que bela **merda** aconteceu hein, passamos um *Array*, somamos com um inteiro e recebos uma *String*!!!

![meme pode isso Arnaldo?](https://cldup.com/5sahDi-dC0-1200x1200.jpeg)

Nós queremos que F faça o trabalho "do jeito certo" e o "jeito certo" é manter a estrutura durante a operação. Mas o que significa "manter a estrutura"?

Significa que nossa função precisa "desembrulhar?" o *Array* passado e pegar seus elementos. Depois precisa chamar a função passada para cada elemento. Então encapsula os valores retornados em um novo *Array* e retorná-lo.

Isso não te lembra nenhuma funçãozinha não?

![meme pensando](https://cldup.com/bYyOR0OQpS-1200x1200.png)

SIM! A função `map` é um *functor*!

```js
[1, 2, 3].map(plus1); // [2, 3, 4]
```

No caso do Jasvascript, `filter` é um *functor* porque retorna um *Array*, entretando o `forEach` não é pois retorna `undefined`, ou seja, ele não mantém a estrutura.

*Functors* são definidos como "[homomorfismos](https://pt.wikipedia.org/wiki/Homomorfismo) entre categorias", vamos entender melhor esse significado:

- homo = mesmo, igual
- morfismos = funções que mantém estrutura
- categoria = tipo

De acordo com a teoria, a função `F` é um *functor* quando as duas funções comuns combináveis `f` e `g`, como no exemplo abaixo:

```
F(x . y) = F(x) . F(y)
```

Onde `.` indicam composição, ou seja, *functors* precisam preservar a composição.

Veremos mais sobre composição adiante.

##### Array Functor

Como disse que o `map` é um *functor* então vamos provar isso.

```js
function compose(f, g) {
    return function(x) {return f(g(x))}
}
```

Fazer composição de funções é criar uma chamada de um conjunto de funções, chamando a função seguinte, com resultados da função anterior. Note que a nossa função de composição acima funciona da direita para a esquerda. `g` é chamado pela primeira vez, em seguida, `f`.

```js
[1, 2, 3].map(compose(plus1, plus2)) // [ 4, 5, 6 ]

```

É o mesmo que compor usando 2 funções `map`:

```js
[1, 2, 3].map(plus2).map(plus1) // [ 4, 5, 6 ]
```

[Quando mostrar a composição]



Isso lembra alguma coisa pra você? Bom logo logo verá um exemplo mais conhecido.

[ESCREVER MAIS SOBRE]

### Loops

Antes de entrarmos nas propriedades funcionais propriamente ditas, vamos ver o porquê usar loops não é tão interessante quando possuímos o paradigma funcional em nossa linguagem.

Vamos ver um clássico exemplo de um `for`:

```js
var animals = ["horse", "pig", "cow"];
for(var i = 0, lenght = animals.length; i < length; i++) {
  console.log("Animal: ", animals[i]);
};
```

Vamos refatorar usando um `while` reverso:

```js
var i = animals.length;
while(i--) {
  console.log("Animal: ", animals[i]);
};
```

Agora vamos usar a forma funcional de loop:

```js
animals.forEach(function(animal) {
  console.log("Animal: ", animal);
}) ;
```

Perceba que agora em vez de iterarmos um número "fixo" incrementando ou decrementando um contador para que ao chegar no final ele saia do loop, mas isso pode esconder efeitos colaterais.

Nesse último caso o programa está explicitamente iterando **em cima** do *Array* utilizado sem precisar gerenciar nenhum contador.

[FALAR MAIS SOBRE OS EFEITOS COLATERAIS]


### Recursion

[Mostrar recursão em vez de loops]

###For/list comprehensions

Material interessante em http://stackoverflow.com/questions/4964456/make-javascript-do-list-comprehension

[Pegar ideias daqui]
```

A list comprehension has a few parts to it.

Selecting a set of something
From a set of Something
Filtered by Something
In JavaScript, as of ES5 (so I think that's supported in IE9+, Chrome and FF) you can use the map and filter functions on an array.

You can do this with map and filter:

var list = [1,2,3,4,5].filter(function(x){ return x < 4; })
               .map(function(x) { return 'foo ' + x; });

console.log(list); //["foo 1", "foo 2", "foo 3"]
That's about as good as it's going to get without setting up additional methods or using another framework.

As for the specific question...

With jQuery:

$('input').map(function(i, x) { return x.name; });
Without jQuery:

var inputs = [].slice.call(document.getElementsByTagName('input'), 0),
    names = inputs.map(function(x) { return x.name; });
[].slice.call() is just to convert the NodeList to an Array.
```

### Immutability

http://www.sitepoint.com/immutability-javascript/
https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd

[Falar do immutable.js http://www.infoq.com/news/2014/11/immutable-javascript-functional]

[Falar do conts em ES6]

### Pure functions

http://nicoespeon.com/en/2015/01/pure-functions-javascript/
http://stackoverflow.com/questions/14353978/how-to-parse-pure-functions

Para leitura posterior abaixo, do link: http://programmers.stackexchange.com/questions/176761/compute-if-a-function-is-pure
```
In JavaScript, you can tell if a function is pure by the following criteria:

It only reads parameters and locals;

It only writes locals;

On non-locals, it calls only pure functions;

All functions it calls implicitly are pure, e.g., toString; and

It only writes properties of locals if they do not alias non-locals.

Aliasing is not possible to determine in JavaScript in the general case, because you can always look up properties of an object dynamically (object["property"]). Provided you never do that, and you have the source of the whole program, then I think the problem is tractable. You would also need information about which native functions have side-effects, such as console.log or most anything involving the DOM.

The term “pure” could also use some clarification. Even in a strongly, statically typed, purely functional programming language, where all functions are referentially transparent, a function can still fail to terminate. So when we talk about id :: a -> a, what we’re really saying is not:

Given some value of type a, the function id produces a value of type a.
But rather:

Given some value of type a, the function id does not produce a value which is not of type a.
Because a valid implementation of id is error "Not implemented!". As Peteris points out, this nontotality could be seen as a kind of impurity. Koka is a functional programming language—with syntax modelled on JavaScript—which can infer possible effects such as divergence (nontermination), referential transparency, throwing of exceptions, and I/O actions.
```

### No side effects

http://davidwalsh.name/preventing-sideeffects-javascript

### Por que JavaScript é funcional?

## Funções

No JavaScript uma função nada mais é que um objeto que possui atributos como:

- arguments
- name
- length

E funções importantes como:

- apply
- call

Para criarmos uma função no JavaScript é muito simples, como já vimos anteriormente, precisamos apenas utilizar a palavra `function`.

![Homer fazendo Doh](https://cldup.com/CVvUx6Uswo.gif)

Estava vendo [essa palestra](http://www.infoq.com/br/presentations/programacao-funcional-por-que-importa) aqui hoje e percebi que o jeito mais fácil de entender programação funcional é algo que sempre falei e sempre tentei seguir:

>TODA FUNÇÃO PRECISA RETORNAR UM VALOR!

Sabendo dessa premissa como faríamos um simples atribuição de valor como:

```js
var idade = 30;

```
Simples, assim:

```js
function setIdade(idade) { return idade; }

```
Nesse caso isso é uma função identidade.

Logo eu posso testar se é maior de idade assim:

```js
function maioridade(idade) {
  if(idade >= 18)
    return true;
  else
    return false; }

```

E chamamos ela da seguinte forma:

```js
maioridade(setIdade(30));
```

Bem fácil né???

Dessa forma podemos pensar que ele se assemelha muito ao *Atomic Design* onde criamos pequenos átomos independentes, nesse caso as funções e com elas vamos compondo funções maiores, **exatamente** como visto [aqui no artigo do Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/).

Agora vamos usar um exemplo mais simples ainda, uma função que duplica *Strings*:

```js
var repeat = function(s) {
  return s + s;
};

repeat('Na');
// NaNa
```

Então se chamamos apenas a função `repeat` dessa forma, passando *String* então estará correta, porém se não fizermos isso teremos um resultado indesejado.

![Meme WAT](https://cldup.com/BOagKEB49C.gif)

Sim meu caro aluno, prete atenção no exemplo abaixo:

```js
repeat(10);
// 4
```

Aí encontramos o problema!

Nesse caso ele não está mais repetindo a *String* como desejado inicialmente, agora ela está multiplicando o valor por 2 caso seja um *Number*. Isso porque não temos um contrato com uma função que retorne apenas *Strings*. Para resolver esse problema é fácil, criamos essa função abaixo:

```js
var str = function(s) {
  if(typeof s !== 'string') {
    throw new TypeError('Expected a string');
  }
  else {
    return s;
  }
}
```

Agora você passa uma *String* para a função, como valor de entrada, e espera-se que seu retorno também seja uma *String*, como valor de saída.

Refatorando nossa função `repeat`:

```js
var repeat = function(s) {
  var s = str(s)
  return s + s;
};

repeat('Na');
// NaNa
repeat(1)
// TypeError: Expected a string
```


[EXPLICAR MAIS]

#### Função anônima
#### IIFE

### First-class Functions

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

var _add =  adder(20);
_add(400) // 420
_add(646) // 666
```

Podemos melhorar esse exemplo e criarmos a função de multiplicar.

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

multiply(2)(333); //666
```

Você deve ter percebido que podemos utilizar 2 formas de passagem de parâmetros, correto?

Vamos entender melhor como isso funciona, vamos analisar o exemplo coma soma por sem mais simples, porém desta vez vendo os valores dos parâmetros.

```js
// retornada de uma função
function adder(a) {
  console.log('a', a);
  return function(b) {
    console.log('b', b);
    return a + b;
  }
}

var _add =  adder(20);
_add(400) // 420
_add(646) // 666
```

Na linha:

```js
var _add =  adder(20);
// a 20
```

Basicamente a função está apenas instanciando o valor de `a` e retornando a função com a soma já usando o `a`, falaremos mais disso posteriormente, logo `_add` não recebe o valor de `a`, mas sim a funçao da soma:

```js
function adder(a) {
  var a = a; // 20
  return function(b) {
    return a + b;
  }
}
```

Depois quando chamamos a função `_add` passando `400` como parâmetro 
```js
_add(400)
// b 420
// 440
```

Estamos passando o `400` para a função que recebe `b` desse jeito retornando o valor da nossa soma:

```js
function(b) { //400
  return a + b; //420
}
```

Para entender melhor como isso acontece falarei mais adiante sobre *closures*.

Uma situação bem interessante do porquê é interessante usarmos funções de primeira classe é para não ficarmos nos perocupando com os parâmetros passados, caso usemos uma função anônima.

Vamos ver o exemlo abaixo:

```js
httpPost('/beer', function(json){
  return renderPost(json);
});
```

Se o `httpPost` precisa enviar um possível **erro**, nós teríamos que ir lá na função anônima e mudá-la:

```js
httpPost('/beer', function(json, err){
  return renderPost(json, err);
});
```

Agora se re-escrevermos como função de primeira classe ficará assim:

```js
httpPost('/beer', renderPost);
```

Dessa forma não precisamos nos preocupar mais com os argumentos, pois isso sempre será trabalho unica e exclusivamente da função `renderPost`.

### High-order function

- recebe uma ou mais funções como parâmetro
- retorna uma função

### Closures
#### Hoisting

### Currying

### Monads

> "As monads vieram para resolver um problema que não tínhamos antes." - Douglas Crockford

![](https://cldup.com/S5tC18Ab_x-2000x2000.jpeg)

Normalmente esse assunto *Monads* é tratado com certa "obscuridade" para quem não está familiarizado com Teoria das Categorias, mas bem na verdade ela só parece complexa na matemática.

Na verdade *Monad* é um padrão de design usado para descrever computações como um série de passos. Elas são extensivamente usadas em linguagens de programação puramente funcional para gerenciar efeitos colaterais, mas também são usadas em linguagens multiparadigmas para controlar complexidade.

*Monad* encapsulam tipos dando-les um comportamento adicional. Entenderemos isso melhor com código na sequência, porém antes precisamos conhecer quais são os componentes de uma *monad*:

- unit: função que encpapsula um valor em um tipo aceitado pelas funções compostas
- bind: função que transforma qualquer função para que aceite o mesmo tipo que ela retorna, deixando-a pronta para composição

> Nota: A função bind function não é a mesma que a função Function.prototype.bind  Essa última é nativa do ES5 e é usada para criar uma série de funções ou funções parcialmente aplicadas com esse valor vinculado.

#### Leis da *Monad*

Uma *monad* deve obedecer as seguintes leis para ser válida:

1. bind(unit(x), f) === f(x)
2. bind(monad, unit) === monad
3. bind(bind(monad, f), g) === bind(monad, function(x) { return bind(f(x), g); })

Vamos começar com um [exemplo de *monad* do Douglas Crockford](https://gist.github.com/JackNova/4339141):
[COLOCAR LINK OFICIAL DO ARTIGO]

```js
function MONAD() {
  return function unit(value) {
    var monad = Object.create(null);
    monad.bind = function (func) {
      return func(value);
    };
    return monad;
  };
}
```

Vamos entender como esse código funciona.

1. a função `MONAD` retorna a função `unit` passando `value` como parâmetro
2. cria uma `monad` que não herda nada
3. adiciona o método `bind` na *monad* que recebe uma função `func` como parâmetro 
4. e retorna a chamada dessa função `func` 
5. passando `value` para ela que foi passada na função construtora `unit`
6. retorna a *monad*

A *monad* mais simples é a identidade, a qual não adiciona nenhuma informação ao valor, o valor é passado para a função `unit` que passará para as funções ligadas.

```js
var identity = MONAD();
var monad = identity("JS FTW!");
monad.bind(alert);
```

[MOSTRAR AS LEIS DAS MONADS UAM A UMA]

[MOSTRAR OUTROS EXEMPLOS DE MONADS]

### Pattern matching

### Tail call

## ES6
### Array Comprehension
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
http://ariya.ofilabs.com/2013/01/es6-and-array-comprehension.html
