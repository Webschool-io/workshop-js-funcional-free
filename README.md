#JS Funcional
![Logo da Webschool e do Curso JS Funcional](https://cldup.com/bn_CJFPZce-2000x2000.png)

# Aulas
Canal com os vídeos [https://www.youtube.com/c/webschool-io](https://www.youtube.com/c/webschool-io)

# Ementa
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
+ [Recursion](#recursion)
+ [For/list comprehensions](#forlist-comprehensions)
+ [Immutability](#immutability)
+ [Pure functions](#pure-functions)
+ [No side effects](#No-side-effects)
* [Memoization](#memoization)
* [Teoria das Categorias](#teoria-das-ctegorias)
  + [Functor](#Functor)
    + [Array Functor](#array-Functor)
* [Monads](#monads)
  * [Leis da *Monad*](#Leis-da-monad)
* [Pattern matching](#pattern-matching)
* [Tail call](#tail-call)


____

**[COMEÇO AULA 1]**
# JS Funcional

Possuimos 2 grandes paradigmas de programação:

- Funcional
- Imperativo.

A Funcional é a mais antiga, sua primeira linguagem foi criada em 1955 (IPL) e posteriomente a mais popular LISP foi criada em 1958. Fortran e COBOL foram criadas respectivamentes em 1956 e 1959, são imperativas.

O paradigma imperativo é baseada na arquitetura de Von Neumann, enquanto que o funcional é baseado no cálculo lambda.

## O Curso

Esse curso será dividido em módulos, cada um com 4 aulas, 1 por semana de duração máxima de 1 hora e mínima de meia hora.

Não haverá um dia **FIXO** pois como sou nômade não posso sempre garantir tal data por diversos motivos, logo eu enviarei um email toda semana até Quarta-feira para avisar qual dia a aula ocorrerá sendo entre Quinta e Sábado.

O turno será o noturno, ainda farei uma pesquisa para ver se preferem as 21 ou 23 horas e as dúvidas deverão ser feitas em um canal, avisarei posteriormente qual, para que eu possa respondê-las e quiçá fazer uma aula avulsa para responder algumas perguntas.

### Custo

> Gratuitamente de graça

### Doação

Caso você seja uma pessoa muito legal e deseja contribuir para esse e outros projetos gratuitos que faço, por exemplo o [JS4Girls](https://github.com/Webschool-io/js4girls), e pela continuidade de mais módulos mensais como: ES6, Node.js, AngularJs, React e outros.

[Para doar basta clickar no botão do PagSeguro ou do Paypal no site oficial desse curso E GANHE UMA CAMISETA LINDONA!.](http://webschool.io/jsfuncional/camisetas/) Ou mandar email diretamente para webschool.cursos[at]gmail[dot]com pedindo a conta para depósito ou transfêrencia.
### Local

**ONLINE** via [https://www.youtube.com/c/webschool-io](https://www.youtube.com/c/webschool-io).

### Data e Hora

Entre Quinta e Sábado sendo ou as 21 ou as 23 horas(se a maioria dos alunos for estudante de faculdade provavelmente preferirá esse), Sábado podendo ser a tarde.

Cada aula terá uma média de 1 hora, sendo 4 aulas por mês.

Data e hora podem ser modificados mediante divulgação 12 horas antes.

Ele acontecerá **AO VIVO** semanalmente, mas caso você não consiga ver ao vivo ele ficará gravado [no nosso canal no Youtube.](https://www.youtube.com/channel/UCKdo1RaF8gzfhvkOdZv_ojg/videos)


## O que é programação funcional?

Programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e evita estados ou dados mutáveis. Utiliza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa.

Uma função pode ter ou não ter parâmetros e um simples valor de retorno. Os parâmetros são os valores de entrada da função, e o valor de retorno é o resultado da função. A definição de uma função descreve como a função será avaliada em termos de outras funções.

Assim como na orientação a objetos a menor parte de um sistema é um objeto, você pode atribuir objetos a variáveis, pode passá-los por parâmetro e ter métodos retornando objetos, na programação funcional, a menor parte do seu sistema é uma função.

Por exemplo, a função f(x) = x^2 + 5 é definida utilizando funções de potência e adição. Do mesmo modo, a linguagem deve oferecer funções básicas que não requerem definições adicionais.

Vamos conhecer alguns fundamentos:

- não existe conceito de variáveis ou atribuição
- iterações devem ser construídas com recursão


[ESCREVER MAIS SOBRE]

### Por que usar programação funcional?

Temos 4 grandes motivos para usar programação funcional, são eles:

- Concorrência: não temos deadlocks ou race conditions simplesmente porque não precisamos de locks - o dado é imutável;
- Testes: criar testes unitários sem se preocupar com o estado simplesmente porque não existe estado. Devemos preocupar apenas com os argumentos das funções que nós testamos;
- Debugging: rastrear algum valor no stack trace é bem simples;
- Base teórica: linguagens funcionais são baseados no cálculo lambda, que é um sistema formal. Esta fundamentação teórica faz a prova para correção dos programas seja muito simples (por exemplo, usando indução).

#### Concorrência

Os processadores multicore estão presentes em praticamente todos os computadores modernos, inclusive em dispositivos móveis como telefones celular e tablets. Porém, pouco desse poder de processamento, provido pelos múltiplos núcleos, é aproveitado de maneira efetiva pelas aplicações devido à dificuldade de se escrever sistemas concorrentes.

Com o objetivo de tornar o desenvolvimento desse tipo de sistema mais palpável, alguns novos mecanismos de sincronização e paralelismo vem sendo propostos em linguagens de programação funcional. Esse tipo de linguagem prega um estilo de programação baseado em funções puras e dados imutáveis que facilita o desenvolvimento de programas concorrentes.

A concorrência nas linguagens imperativas tradicionais é relativamente complexa, o programador é o responsável pela sincronização de todas as tarefas.

Entretanto, as linguagens funcionais nos oferece oportunidades para a concorrência:

- A partir do momento em que uma função tem mais de um parâmetro, estes parâmetros devem em princípio ser avaliados simultaneamente (note que os parâmetros seriam as funções correspondentes às tarefas a serem executadas);
- A partir deste ponto, a responsabilidade pela sincronização das tarefas passa do programador para o compilador.

Se você pensar que um dos pilares da programação funcional é compor várias funç~oes de uma só vez, nesse caso fazendo-as serem processadas em paralelo.

Todavia, as linguagens funcionais orientadas a multitarefa permitem ao programador trabalhar em um nível muito mais elevado do que as linguagens imperativas destinadas a este mesmo fim.

[Confirmar dados sobre WebWorker em JS p/ concorrência]

#### Testes

Com funções puras os testes ficam muito mais fáceis, não precisamos *mockar* um meio de pagamento ou testes de estado em cada teste. Nós simplesmente passamos uma entrada e validamos uma saída.

#### Debugging
#### Base teórica

#### Onde usar?

BI, Sistemas concorrentes.

![Diagrama de Map e REduce do Hadoop](https://cldup.com/GxuJ2yHNnS-1200x1200.png)

#### Quem está usando?

Spark, Netflix, Google, Facebook, [Amazon (Amazon Lambda)](http://www.infoworld.com/article/2847466/amazon-web-services/amazon-lambda-bridges-functional-programming-and-cloud.html), sistemas de avião como da família Airbus A340.

### Linguagens funcionais

Hoje em dia com o aumento na necessidade de sistemas concorrentes as linguagens funcionais estão voltando para o mercado comercial. Vemos muito grandes empresas usarem: Erlang, Haskell, Scala, etc.

Linguagens mais conhecidas:

- Erlang;
- F#;
- Haskell;
- Lisp;
- OCaml;
- R;
- Scala;
- Scheme.

LISP introduziu a maioria das características hoje encontradas nas modernas linguagens de programação funcional. Scheme foi uma tentativa posterior de simplificar e melhorar LISP. Haskell foi lançada no fim dos anos 1980 numa tentativa de juntar muitas ideias na pesquisa de programação funcional.


##### Erlang

Além da Ericsson, é lógico, há algumas outras grandes empresas e projetos usando Erlang, como por exemplo:

- Facebook, no backend de seu sistema de chat, lidando com 100 milhões de usuários ativos;
- Delicious, que tem mais de 5 milhões de usuários e mais de 150 milhões de bookmarks;
- Amazon SimpleDB, o serviço de dados do poderoso Amazon EC2;
- GitHub, no seu sistema de backend, lidando com milhares de transações concorrentes;
- Whatsapp, utiliza a linguagem no backend de seus aplicativos;
- Motorola;
- CouchDB;
- RabbitMQ.
Dados retirados daqui: <http://www.infoq.com/br/news/2010/02/erlang-proximo-grande-projeto>, <http://blog.whatsapp.com/196/1-million-is-so-2011?
>

##### Elixir

Como a sintaxe de Erlang pode não ser convidativa para desenvolvedores "modernos", por isso José Valim desenvolveu o Elixir, linguagem com sintaxe moderna que roda dentro da madura VM do Erlang.

Atualmente na versão 1.0, com sua framework web(Phoenix) dando os primeiros passos.

Saiba mais em:
Elixir: <http://elixir-lang.org/>
Phoenix: <http://www.phoenixframework.org/>

### Lambda
O cálculo lambda pode ser considerado a primeira linguagem de programação funcional, embora nunca tenha sido projetada para ser realmente executada em um computador. É um modelo de computação projetado por [Alonzo Church](https://pt.wikipedia.org/wiki/Alonzo_Church) nos anos 1930 que oferece um modo muito formal de descrever um cálculo de uma função.

A ideia de Church era usar a noção de “processo” ou “transformação” (função) como essencial para fundamentar a matemática, ao invés da noção de [conjunto de Cantor](https://pt.wikipedia.org/wiki/Conjunto_de_Cantor). O cálculo lambda  não deu muito certo para isso na época, mas acabou sendo importante em outra questão do tempo: a busca pela definição formal do que vem a ser um procedimento efetivo. Em termos atuais, diríamos que essa busca tentava definir formalmente o que é “computação”.

(A ideia de usar o conceito de transformação como central na matemática retornou na segunda metade do século XX através da Teoria das Categorias, mas isso é outra história.)

#### Notação

Essa notação pode parecer um pouco confusa no início, mas veremos que não é nenhum bicho de sete cabeças.

![bicho de sete cabeças](https://cldup.com/gov3Q0J67O-1200x1200.jpeg)

*Queria ter colocado o Tiamat,  mas ele tem 5 cabeças apenas :(*

Normalmente em uma linguagem tipada e imperativa nós faríamos isso:

```c
int x;

int f(int x) {
  return x;
}
```

Porém quando começamos a trabalhar com linguagens funcionais acabamos vendo uma outra forma de se escrever a mesma coisa.

```
x: int
f: int -> int
_______________
x: a
f: a -> a
```

Ai você se pergunta:

- *Mas por que assim?*

Lembra que falei que toda a base é matemática? Então.

O tipo de uma variável é o conjunto de valores em que ele está limitado, na matemática falamos que:

```
x E Z
```

> x pertence ao conjunto dos inteiros
> função f recebe um inteiro e retorna um inteiro.

ps: se fosse apenas os inteiros positivos falaríamos que pertence aos naturais.

Logo dessa forma fica bem mais "matemático" de se ler. No exemplo em que usamos o `a`, ele significa **qualquer** tipo.

Vamos ver como fica a notação de composição.

```
x: a
f: a -> a
g: a -> a
```

Para começar vamos chamar essas duas funções juntas:

```js
f(g(a))
```

Nesse caso estamos dizendo que quero executar a função `g` com o argumento `a` e sua resposta será passada para a chamada da função `f`.

Agora usando a notação de composição ficará:

```
(f . g) = h
```

Agora `h` é uma nova função, que tem qual tipo? O tipo que definimos em `g` que é `a`.

```
(f . g) = h : a -> a
```

Logo a função `h` precisa receber um valor do tipo `a` e retornar um valor do tipo `a`.

#### Expressão Lambda

Agora vamos ver como é uma expressão lambda:

```haskell
(λx.x)
```

Convertendo isso em Javascript para entendermos melhor fica:

```js
function(x) {
  return x;
}
```

Porém isso aqui não é uma expressão lambda:


```haskell
(λy.x)
```

Porque o `x` é uma variável livre, ele não está ligado à função `λy`, ficando assim em JavaScript:

```js
function(y) {
  return x;
}
```

Para usarmos o `y` corretamente faremos o seguinte:

```haskell
(λx.(λy.x))
```

O sparentêsis não são necessários, coloquei apenas para demonstrar que o `x` é livre na expressão interior `(λy.x)` e ligada na expressão externa, ficando assim:


```haskell
λx.λy.x

```

Fica em JavaScript:

```js
function(x) {
  return function(y) {
    return x;
  }
}
```

Vamos ver agora como fica uma expressão lambda, onde teremos agora qual o valor que será passado para a expressão.

```haskell
(λx.x) y
```
Basicamente `(λx.x)` tem como resultado a expressão avaliada passando o `y` como valor.

Também podemos ver uma expressão lambda dessa maneira:


```haskell
(λx.E) F
```

Onde `(E = x e F = y)`, guardem bem essa informação `E` é o resultado onde `x` é substituído pela expressão `F`.


#### Aplicação Lambda

```haskell
λx.x UNICORNIO -> UNICORNIO
```


```js
function(x) {
  return x;
}(UNICORN);
```


```haskell
λx.λy.x UNICORNIO -> λy.UNICORNIO
```

Essa função recebe um arguento e retorna uma função que retorna o mesmo valor.

**EXERCICIO**

Escrever essa função `λx.λy.x UNICORNIO -> λy.UNICORNIO` em JavaScript.


**Não está nos slides**
##### Self-application
```haskell
λs.(s s) -> UNICORNIO
```

```js
function(f) {
  return f(f);
}
```

A sintaxe das expressões-lambda é determinada por duas operações: abstração e aplicação (sendo que a aplicação envolve uma operação de substituição chamada conversão-β). Uma expressão-lambda pode ser uma variável, uma abstração de uma expressão, ou uma aplicação de duas expressões:

- Variáveis: x, y, z, um conjunto qualquer de nomes de variáveis;
- Abstrações: dada uma expressão-lambda E, podemos formar uma abstração de E usando `λ + variável + ‘.’ + E`. Por exemplo: `λx.x`;
- Aplicações: dadas duas expressões-lambda `E` e `F`, a expressão da aplicação é formada pela justaposição de uma ao lado da outra: E F.

**[MELHORAR COM EXEMPLOS SIMPLES]**

A conversão-β é a regra de substituição que diz como a aplicação deve funcionar.

Analisemos essa expressão `(λ x. + x 1) 4` a conversão-β é:

```
+ 4 1
```

**Fácil não?**

![meme jackie chan](https://cldup.com/EZEjcYdurI-1200x1200.jpeg)

Zuerinha vou explicar é claro, vamos lá:

```haskell
(λ x. + x 1) 4 → + 4 1
// (λ"variável"."E") "F"
// variável = x
// E = + x 1
// F = 4
```

Nesse caso a conversão-β resulta na expressão `+ 4 1` onde substituímos a variável `x` da expressão `E` pelo valor de `F`, agora ficou fácil né?

![meme meme-yeah-we-will-sse-about-that](https://cldup.com/9dhGMxmsQW-1200x1200.jpeg)


[Falar mais]

Nós usaremos esse tipo de notação apenas para exemplos, pois o Javascript não possui essa sintaxe.


### Por que JavaScript é funcional?

## Funções

No JavaScript uma função nada mais é que um objeto que possui atributos como:

- arguments
- name
- length

E funções importantes como:

- apply
- bind
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
  return idade >= 18;
}
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
repeat(2);
// 4
```

Aí encontramos o problema!

Nesse caso ele não está mais repetindo a *String* como desejado inicialmente, agora ela está multiplicando o valor por 2 caso seja um *Number*. Isso porque não temos um contrato com uma função que retorne apenas *Strings*. Para resolver esse problema é fácil, criamos essa função abaixo:

```js
var str = function(s) {
  if(typeof s !== 'string') {
    throw new TypeError('Expected a string');
  }
  return s;
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


#### Função anônima

Como vimos na parte de lambda a função anônima é apenas a chamada do `function` sem nomeá-la, sendo o lambda uma função anônima que aceita apenas um parâmetro.

```js
function(nome) {
  return "Ola " + nome;
};
```

Mas ai você deve se perguntar:

**\-Tá mas como eu faço para rodar essa função?**

Então uma função anônima serve para que você passe uma função como parâmetro sem precisar guardar ela em uma variável, como nesse exemplo abaixo:

```js
$.ajax('http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray')
.done(function(data) {console.log(data)});
```
**É LARGAMENTE UTILIZADO NO JAVASCRIPT!**

#### IIFE - Immediately-Invoked Function Expression

No JavaScript cada vez que você executa uma função você cria um escopo fechado para ela de onde as variáveis não podem "sair", tendo assim um mecanismo simples de privacidade.

```js
function makeCounter() {
  var i = 0;

  return function() {
    console.log( ++i );
  };
}

// Note que `counter` e `counter2` cada uma tem um escopo separado para `i`.

var counter = makeCounter();
counter(); // 1
counter(); // 2

var counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

i; // ReferenceError: i is not defined (só existe dentro de makeCounter)
```

Bom se para executarmos uma função basta colocar `()` após o nome da função, podemos então substituir o noe da função pela própria declaração dela.

Hein?

Bom fica mais fácil olhando o código a seguir:

```js
function(){ /* code */ }(); // SyntaxError: Unexpected token (
```

O problema aqui é que quando o interpretador do javaScript encontra a palavra `function` ele trata como uma declaração de função, para resolver esse problemas nós só precisamos encapsular ela entre `()`.


```js
(function(){ /* code */ }());
(function(){ /* code */ })();

```

Uma outra forma de ver isso é assim:

```js
function foo() { foo(); }
```

Já para eu executar uma função anônima eu faço:

```js
var foo = function() { arguments.callee(); };
```

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

Vamos entender melhor como isso funciona, vamos analisar o exemplo com a soma por ser mais simples, porém desta vez vendo os valores dos parâmetros.

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

Uma situação bem interessante do porquê é interessante usarmos funções de primeira classe é para não ficarmos nos preocupando com os parâmetros passados, caso usemos uma função anônima.

Vamos ver o exemplo abaixo:

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

Dessa forma não precisamos nos preocupar mais com os argumentos, pois isso sempre será trabalho única e exclusivamente da função `renderPost`.

Além disso, no JavaScript, uma função também pode ser um objeto:

```js
var plus1 = new Function( 'a', ' return a + 1;');

```

Podemos passar mais parâmetros dessa forma:

```js
var sum = new Function( 'a', 'b', ' return a + b;');

```

#### Exercício

Sabendo disso vamos ao nosso exercício:

```js
var numbers = [1,2,3,4,5,6,7,8,9,10];

// Crie uma função chamada apenasPares
// a qual você passará por parâmetro para filter
// Assim: var resposta = numbers.filter(apenasPares)

```

### High-order function

Uma função é chamada de *high-order* quando ela faz duas coisas:

- recebe uma ou mais funções como parâmetro
- retorna uma função

Basicamente é uma função que recebe outra função como parâmetro ou devolve uma função como resultado. Quando você usa callbacks no JavaScript e no jQuery, você está fazendo uso de high order functions.

```js
$("#alert-this-shit").on('click', function() {
  alert("Hello World");
});

```

Vamos ver um exemplo bem simples que ainda re-usaremos muito nesse curso:

```js
function somar(x, y) {
  return x + y;
};

function subtrair(x, y) {
  return x - y;
};

function multiplicar(x, y) {
  return x * y;
};

function dividir(x, y) {
  return x / y;
};

function calcular(op, x, y) {
  return op(x, y);
};

calcular(somar, 400, 20); // 420
calcular(subtrair, 700, 34); // 666
calcular(multiplicar, 333, 2); // 666
calcular(dividir, 840, 2); // 420
```

Nesse caso criamos apenas as operações básicas da aritmética e apenas utilizamos elas como argumento da função `calcular`, falei que usaremos muito esse exemplo no curso, pois são de fácil assimilação quando chegarmos em composição para criarmos funções mais complexas.

Perceba que a função `calcular` retorna a chamada da função `op` que é passada via parâmetro, por isso ela é uma *High-order function*.

#### Exercício

Crie uma função que multiplique recebendo 3 parâmetros:

```js
function _multiplicar(op, valor, vezes){};
```

Onde `op` será a operação de `somar` do nosso exemplo passado.

Depois de fazer isso para `multiplicar` faça também para `dividir`.


### Closures

É importantíssimo que você entenda como funciona o escopo no JavaScript para que não fique confuso ao ver closures e currying, existem até livros apenas sobre esse tema como: [You Don't Know JS: Scope & Closures](http://shop.oreilly.com/product/0636920026327.do) e [Closure: The Definitive Guide](http://shop.oreilly.com/product/0636920001416.do).

Como na maioria das linguagens do mercado, uma variável declarada em um escopo maior é visível em um escopo menor, enquanto o contrário não é verdadeiro. Basicamente isso:

```js
var name = 'Suissa';
function foo() {
  console.log(name);
}

foo();
// Saída:   Suissa
```

Significa também que uma variável local só é vista dentro do escopo em que foi criada, mesmo que tenha o mesmo nome de uma variável global:

```js
var x = 1;

function bar() {
  var x = 420;
  var y = 666

  console.log(x, y);
}

bar();
// 420 666

console.log(x);
// 1
console.log(y);
// ReferenceError: y is not defined
```

Agora vamos ver como podemos alterar uma variável global dentro da nossa função:


```js
var x = 1;

function bar() {
  x = 420;
  console.log(x);
}

bar();
// 420

console.log(x);
// 420
```

Perceba que agora dentro da função `bar` eu não uso a palavra mágica `var`, então nesse caso ele irá buscar a referência da nossa variável e depois atualizar seu valor, sem criar nenhuma instância local.

Quando uma função altera o valor de uma variável global, isso afeta toda a aplicação. Por isso o uso de variável global não é considerado uma boa prática. Porém, uma variável global passada por parâmetro para uma função não tem o seu valor alterado:

```js
var x = 1;
var y = 11;

function meh(x) {
  console.log("Dentro: ", x, y);
  x++;

  y++;
  console.log("Dentro: ", x, y);
}

meh(x);
// Dentro:  1 11
// Dentro:  2 12

console.log("Fora: ", x, y);
// Fora:  1 12
```

Vamos analisar o porquê isso ocorre:


```js
var x = 1;
var y = 11;
```

Primeiramente definimos nossas variáveis globais fora da função, depois passamos ela por parâmetro para a função `meh`, vimos isso na aula passada, então vamos relembrar:

```js
function meh(x) {
  console.log("Dentro: ", x, y);
  x++;
  y++;
  console.log("Dentro: ", x, y);
}
```

Esse código acima é interpretado dessa forma:

```js
function meh(x) {
  var x = x;
  console.log("Dentro: ", x, y);
  x++;
  y++;
  console.log("Dentro: ", x, y);
}
```

Então perceba que é criada uma variável local que recebe aquele parâmetro, por isso as mudanças só fazem efeito localmente.

```js
function meh(x) {
  console.log("Dentro: ", x, y);
  x++;
  y++;
  console.log("Dentro: ", x, y);
}

meh(x);
// Dentro:  1 11
// Dentro:  2 12

console.log("Fora: ", x, y);
// Fora:  1 12
```

### ArrayAPI
O Array do javascript tem um API extensa, com varios métodos úteis, dentro da programação funcional usamos constantemente essas funções para suprir *for's* desnecessarios e mais variaveis! Para facilitar vou dividir meu exemplo em : **teoria**, **implementação** e como faço em **es6**(não que exista muita diferença!).

####MAP
O MAP é um método que gera um **callback** para cada valor de um **array** modificando os mesmos, isso faz com que o **map** crie um novo **array** com os novos valores obtidos. Exemplo:

```javascript
var x = [1,2,3].map(function (value) {
  return value * 2
});

console.log(x) //[2,4,6]
```

Em ES6:

```javascript
var x = [1,2,3].map(v => x*2);
console.log(x) //[2,4,6]
```

####Filter
Essa já é um pouco mais simples de entender, ela vai criar um **teste lógico** dentro de um **callback**, e a partir disso devolver um **array** com os valores do **outro array** que passaram no teste! Exemplo:

```javascript
var x = [1,2,3].filter(function (val) {
  return val % 2 == 0
});

console.log(x); //[2]
```
Em ES6:

```javascript
var x = [1,2,3].filter(v => v % 2 == 0);
console.log(x); //[2]
```

####Reduce / ReduceRight
Reduce é uma função incrível! Esse método realiza um **callback**! Sua função? **Reduzir um array à um único valor!** Como faz isso? Aplica um **callback** para um acumulador a partir de cada valor em um array. O **Reduce** faz isso da **Esquerda > Direita**, o **ReduceRight** faz a mesma coisa porem da **Direita > Esquerda**. Ja que esse é um pouco mais complicado, vamos dar uma olhada na estrutura alem do exemplo:

```javascript
//array.reduce(function(acumulador, valor , index, array ) {...}

//Em ação!
var x = [1,2,3].reduce(function(a, v, i ,arr) {
   return a + v;
});
console.log(x) //6
```

Em ES6:
```javascript
var x = [1,2,3].reduce((a, v, i ,arr) => a + v);
console.log(x) //6
```

####Every/Some
Esses métodos como alguns outros são esquecido por muitos, porem, podem ser **muito úteis**! Tanto o **every** quanto o **some** são **testes de array**.

O **every** age como o fator **AND**, ou seja, se **TODOS** os elementos passarem no teste, ele retornara **true**, porem, basta apenas **um** não cumprir  a regra para restornar um false.

O **some** age como o fator **OR**, em outras palavras, se apenas **UM** elemento cumprir a regra ele retornara **true**.  Em exemplo:

```javascript
var x = [1,2,3].every(function(v){
   return v+v >= 2
})
console.log(x) //true

//VENDO A DIFERENÇA
var y = [1,2,3].every(function(v){
   return v*v >= 9
})
console.log(y) //false

var y = [1,2,3].some(function(v){
   return v*v >= 9
})
console.log(y) //true
```

Em ES6:
```javascript
var x = [1,2,3].every(v => v+v >= 2)
console.log(x) //true
```

#### Agora na prática!

Imaginemos que tenho que pegar a **média** dos **maiores de idade** que frequentam um **clube**.

**Simulando um retorno de Banco**
```javascript
var pessoas = [
   {name : "Guilherme", age: 21},
   {name : "Mario", age: 16},
   {name : "Luiza", age: 17},
   {name : "Carlos", age: 19},
   {name : "André", age: 26},
   {name : "Bianca", age: 18},
   {name : "Maria", age: 14}
]
```

**Como fariamos isso sem ArrayAPI**
```javascript
var maioresDe18 = [];
for (var i = 0; i < pessoas.length; i++) {
   if (pessoas[i].age >= 18) maioresDe18.push(pessoas[i])
}

var mediaIdade = 0;
for (i = 0; i < maioresDe18.length; i++){
  mediaIdade += maioresDe18[i].age
}

mediaIdade = mediaIdade/maioresDe18.length;
console.log(mediaIdade)
```

**Com Array API**
```javascript
var mediaIdade = pessoas.filter(function (p) {
  return p.age >= 18
}).map(function(p) {
  return p.age
}).reduce(function(a, v, i, arr) {
  return i + 1 == arr.length ? (a + v) / arr.length : a + v
})
```

**Com uma firulas e ES6**
```javascript
var media = (a, v, i, arr) => i + 1 == arr.length ? (a + v) / arr.length : a + v,
    maioridade = p => p.age >= 18,
    mediaIdade = pessoas
                     .filter(maioridade) //Retorna maiores de 18
                     .map(p => p.age) //Transforma objetos apenas em idades
                     .reduce(media); // Faz media

console.log(mediaIdade); //21
```

#### Menção Honrosa (.forEach)
As vezes não queremos um retorno! Só queremos um **for** facilitado! Por mais que não goste, existe o **.forEach** no ArrayAPI que permite que você emule o famoso **for (int x : list)** do java e outras linguagens!
```javascript
[1,2,3].forEach(function(n) {
   console.log("Estamos vendo o numero: "+n);
})
```

### Hoisting

Em uma tradução mais literal *hoisting* significa: içar, levantar. É uma característica do JavaScript que nao temos como fugir, mas no ES6 isso ja muda com `let`.

Aí você deve se perguntar:

**-Mas o que que ele vai içar?**

Pois eu lhe respondo:

**-As declarações de variáveis.**

![](http://m.memegen.com/l81732.jpg)

> Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

```js
bla = 2
var bla;

// implicitamente é interpretado como:

var bla;
bla = 2;
```

fonte: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

Todos os artigos e vídeos sobre *Hoisting* **QUASE SEMPRE** começam com esse exemplo:

```js
// Exemplo 1
var a = 1

function foo() {
  console.log(a)
  var a = 2
  console.log(a)
}

foo()

console.log(a)
```

Então eu não fazer isso, já que é muito fácil você achar a explicação desse código simples acima, vou até indicar esse vídeo maravilhoso que vi dia desses [Dicas Javascript - Ep01: Hoisting](https://www.youtube.com/watch?v=JGpekHQ_9kY)

Vou explicar do mais básico ainda!

![](http://www.quickmeme.com/img/8b/8b176b52163a66ce75d1b6423b6b510b0830653bb028ccf09f78fb15d25dfe93.jpg)

Vamos analisar o seguinte código:

```js
var idade = 30;

if(idade === 666){
    var paiinho = "Belzebu";
}

console.log(idade); // 30
console.log(paiinho); // undefined
console.log(maiinha); // Uncaught ReferenceError: maiinha is not defined(…)
```

Por que você acha que o valor de `idade` é `30`, do `paainho` é `undefined` e `maiinha` é um **erro**?

Bom o primeiro é facil né? O valor de `idade` é `30` pois definimos esse valor na primeira linha e nao o modificamos mais. Porém o valor de `paainho` é `undefined` e nao `Belzebu` como "deveria" ser e é aqui que esta acontecendo o *hoisting*, veja nesse código abaixo como fica o código explícito:

```js
var idade = 30;
var paiinho = undefined;

if(idade === 666){
    paiinho = "Belzebu";
}

console.log(idade); // 30
console.log(paiinho); // undefined
console.log(maiinha); // Uncaught ReferenceError: maiinha is not defined(…)
```

Percebeu o porquê `paiinho` nao teve seu valor alterdo para `Belzebu`?

Porque o código nunca entrou no `if`, por isso ele permaneceu com seu valor inicial que era `undefined`.



Malandro pra caraleo esse esquea né? Pois é tome muito cuidado com suas variaveis elas podem estar com valores diferentes do que você imagina.

Porém assim ainda esta simples de perceber, a coisa começa a piorar quando colocamos funções na jogada, vamos analisar o seguinte código:

```js
var idade = 30;

function setPaiinho() {
  var paiinho = "Belzebu";
}

console.log(idade); // 30
console.log(paiinho); // undefined
```



# Explicar mais sobre hoisting!!!!





### Currying

### Teoria das Categorias

A teoria das categorias é uma teoria matemática que trata de forma abstrata das estruturas matemáticas e dos relacionamentos entre elas. Ela pode ser entendida como um "jogo de setas", em que se abstrai o significado das construções.

As aplicações da teoria das categorias estendem-se por áreas como álgebra, teoria da recursividade, semântica formal, etc.

Uma única operação exigida em uma categoria é a **composição**. Ouviremos falar muito disso ainda.

- Uma classe de objetos `a`, `b`, `c`, ...;
- Para cada par de objetos a,b, uma classe de morfismos ou setas de a para b, denotados por `f:a -> b` (e neste caso se diz que a é o objeto origem e b é o objeto destino da seta);
- Para cada objeto a, um morfismo chamado identidade em a, `id_a:a -> a` que tem origem e destino em `a`;
- Uma operação de composição que associa a cada par de morfismos.

![imagem de uma função gigante de matemática apenas porque a zuera não tem limites](https://cldup.com/DgAjKvXx7W-1200x1200.png)

#### Functor

> A Functor is a function, given a value and a function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns the new structure.

Vamos entender parte por parte:

- *Functor* é uma função que irá receber um valor e uma função;
- Desencapsula[?] os valores para chegar a seu(s) valor(es) interno(s);
- Chama a função repassada com o(s) valor(es) interno(s);
- Encapsula os valores devolvidos em uma nova estrutura;
- e retorna a nova estrutura.

![meme realy?](https://cldup.com/ERM06kh3ki-2000x2000.jpeg)

Sim eu sei que é basicamente a tradução do texto acima, bom então vamos ao que interessa, *códigoooooooooooo*:

```js
function plus1(value) {
  return value + 1
};

function plus2(value) {
  return value + 2
};
```

Criamos duas funções simples, `plus1` adiciona 1 ao `value` e `plus2` adiciona 2, agora vamos escrever uma função para que possamos usar qualquer uma dessas funções como e quando necessário:

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

Nós queremos que F faça o trabalho "do jeito certo" e o "jeito certo" é manter a estrutura durante a operação. Mas o que significa **"manter a estrutura"**?

Significa que **nossa função precisa "desencapsular"** o *Array* passado **e pegar seus elementos**. Depois precisa **chamar a função passada para cada elemento**. Então **encapsula os valores retornados em um novo *Array* e retorná-lo**.

Isso não te lembra nenhuma funçãozinha não?

![meme pensando](https://cldup.com/bYyOR0OQpS-1200x1200.png)

**SIM!** A função `map` é um *Functor*!

```js
[1, 2, 3].map(plus1); // [2, 3, 4]
```

No caso do JasvaScript, `filter` é um *Functor* porque retorna um *Array*, entretando o `forEach` não é pois retorna `undefined`, ou seja, ele não mantém a estrutura.

```js
[1, 2, 3].map(plus1);
[2, 3, 4]
[1, 2, 3].filter(plus1)
[1, 2, 3]
[1, 2, 3].forEach(plus1);
undefined
```

*Functors* são definidos como **"[homomorfismos](https://pt.wikipedia.org/wiki/Homomorfismo) entre categorias"**, vamos entender melhor esse significado:

- Homo = mesmo, igual
- Morfismos = funções que mantém estrutura
- Categoria = tipo

De acordo com a teoria, a função `F` é um *Functor* quando as duas funções comuns combináveis `f` e `g`, como no exemplo abaixo:

```
F(x . y) = F(x) . F(y)
```

Onde `.` indicam composição, ou seja, *Functors* precisam preservar a composição.

Veremos mais sobre composição adiante.

##### Array Functor

Como disse que o `map` é um *Functor* então vamos provar isso.

```js
function compose(f, g) {
  return function(x) {return f(g(x))}
}
```

Fazer composição de funções é criar uma chamada de um conjunto de funções, chamando a função seguinte, com resultados da função anterior. Note que a nossa função de composição acima funciona da direita para a esquerda. `g` é chamado pela primeira vez, em seguida, `f`.

```js
function plus2(value) {
  console.log('plus2 value enter:', value);
  return value + 2;
};

function plus1(value) {
  console.log('plus1 value enter:', value);
  return value + 1;
};

[1, 2, 3].map(compose(plus1, plus2)); // [ 4, 5, 6 ]

plus2 value enter: 1
plus1 value enter: 3
plus2 value enter: 2
plus1 value enter: 4
plus2 value enter: 3
plus1 value enter: 5
[ 4, 5, 6 ]


```

Percebeu o que aconteceu? Não? Vou separar melhor então:

```
[ plus2 value enter: 1 (+ 2 = 3) & plus1 value enter: 3 (+ 1 = 4), // 4
  plus2 value enter: 2 (+ 2 = 4) & plus1 value enter: 4 (+ 1 = 5), // 5
  plus2 value enter: 3 (+ 2 = 5) & plus1 value enter: 5 (+ 1 = 6)  // 6
]
[ 4, 5, 6 ]
```

Agora sim né?

É o mesmo que compor usando 2 funções `map`:

```js
[1, 2, 3].map(plus2).map(plus1); // [ 4, 5, 6 ]
```

### Loops

Antes de entrarmos nas propriedades funcionais propriamente ditas, vamos ver o porquê usar loops não é tão interessante quando possuímos o paradigma funcional em nossa linguagem.

Vamos ver um clássico exemplo de um `for`:

```js
var animals = ["horse", "pig", "cow"];
for(var i = 0, l = animals.length; i < l; i++) {
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

Nesse último caso o programa está explicitamente iterando **em cima** do *Array* utilizado sem precisar gerenciar nenhum contador. E principalmente quando passamos variáveis como parametros.

```js
var Webschool = [
  {name: 'Suissa', course: 'JS Funcional', price: 0},
  {name: 'Suissa', course: 'Be MEAN', price: 600},
  {name: 'Caio Cutrim', course: 'Node.js', price: 0}
];

function presentation(obj) {
  return console.log( 'O professor ' + obj.name + ' dá o curso ' + obj.course + '.' );
}

function getPresentations(obj) {
  for(var i = 0, l = obj.length; i < l; i++) {
    presentation(obj[i]);
  };
};

getPresentations(Webschool);
// O professor Suissa dá o curso JS Funcional.
// O professor Suissa dá o curso Be MEAN.
// O professor Caio Cutrim dá o curso Node.js.
```

Bom mas até ai sem problemas né? Porém e se agora eu queira adicionar um parametro novo nessa função `presentation` para que ela me mostre o valor do curso também, nesse caso passarei um `Boolean`.

```js
function presentation(obj, showPrice) {
  var msg = 'O professor ' + obj.name + ' dá o curso ' + obj.course + '.';
  if(showPrice){
    msg = 'O professor ' + obj.name + ' dá o curso ' + obj.course + ' que custa R$' + obj.price + '.';
  }
  return console.log(msg);
};

function getPresentations(obj, showPrice) {
  for(var i = 0, l = obj.length; i < l; i++) {
    presentation(obj[i], showPrice);
  };
};

getPresentations(Webschool, true);
```

[ESCREVER EXEMPLO COM FOREACH]


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




### Pure functions

Funções puras são funções que se receberem um argumento retornarão o mesmo valor sem modificações, dado uma entrada ela sempre retornará o mesmo valor. Ela não pode modificar nenhum argumento passado nem gravar nenhum estado.

Outra coisa muito boa de se trabalhar com *pure functions* é a transparência referecial. Um código será transparente referencialmente quando ele pode ser substituído pelo valor avaliado, sem alterar o comportamento do programa.

Vamos ver um exemplo ([retirado daqui](https://github.com/Webschool-io/mostly-adequate-guide/blob/master/ch3.md)):

```js
var decrementHP = function(player) {
  return player.set("hp", player.hp-1);
};

var isSameTeam = function(player1, player2) {
  return player1.team === player2.team;
};

var punch = function(player, target) {
  if(isSameTeam(player, target)) {
    return target;
  } else {
    return decrementHP(target);
  }
};

var jobe = Immutable.Map({name:"Jobe", hp:20, team: "red"});
var michael = Immutable.Map({name:"Michael", hp:20, team: "green"});

punch(jobe, michael);
  //=> Immutable.Map({name:"Michael", hp:19, team: "green"})
```

`decrementHP`, `isSameTeam` e `punch` são todos puros e, portanto, referencialmente transparente. Podemos usar uma técnica chamada de raciocínio equacional em que um substitutos "é igual para igual" raciocinar sobre o código. É um pouco como avaliar manualmente o código sem ter em conta as peculiaridades de avaliação programática. Usando transparência referencial, vamos jogar com este código um pouco.

Primeiro vamos trocar a função isSameTeam:

```js
var punch = function(player, target) {
  if(player.team === target.team) {
    return target;
  } else {
    return decrementHP(target);
  }
};
```

Desde os nossos dados sãp imutáveis, podemos simplesmente substituir as equipes com o seu valor real:

```js
var punch = function(player, target) {
  if("red" === "green") {
    return target;
  } else {
    return decrementHP(target);
  }
};
```

Nós vemos que ela é falsa, neste caso, para que possamos remover o todo o código que não será executado:

```js
var punch = function(player, target) {
  return decrementHP(target);
};
```

E se nós sequenciarmos `decrementHP`, vemos que, neste caso, torna-se uma chamada de `punch` para diminuir o `hp` por um.

```js
var punch = function(player, target) {
  return target.set("hp", target.hp-1);
};
```

### No side effects

>A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

Vamos ilustrar essa afirmação utilizando como exemplo nossos conhecidos: `slice` e `splice`:

```js
var xs = [1,2,3,4,5];

// pure
xs.slice(0,3);
//=> [1,2,3]

xs.slice(0,3);
//=> [1,2,3]

xs.slice(0,3);
//=> [1,2,3]


// impure
xs.splice(0,3);
//=> [1,2,3]

xs.splice(0,3);
//=> [4,5]

xs.splice(0,3);
//=> []
```

Vamos ver outro exemplo:

```js
// impure
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
};

// pure
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};

```

[EXPLICAR]

```js
var immutableState = Object.freeze({
  minimum: 21
});
```

[EXPLICAR]

Mas o que é um efeito colateral (*side effect*)? Um pedaço de código segundo o qual uma variável é criada e está disponível ao longo de uma extensão quando ele não precisa de ser. Deixe-me mostrar-lhe alguns exemplos e como evitar esses efeitos colaterais indesejados:

>Array.prototype.forEach() instead of for(var x = ...)

Loop através de um *array* em JavaScript é tradicionalmente feito através de um *loop* `for`:

```js
var myArray = [1, 2, 3];

for(var x=0, length = myArray.length; x < length; x++) {
  // ...
}

// "x" and "length" são efeitos colaterais
```

O efeito colateral deste padrão é, no mínimo, o índice incremental `x`, se não o `length`, elas estão disponíveis em todo o escopo. Métodos do *prototype* do *Array* como map, foreach, e outros nos evitam esses efeitos colaterais:

```js
[1, 2, 3].forEach(function(item, index, array) {
  // No side effects! :)
});
```

[LER mais aqui  http://davidwalsh.name/preventing-sideeffects-javascript]


>A *side effect* is a change of system state or *observable interaction* with the outside world that occurs during the calculation of a result.

Efeitos colaterais podem incluir:

+ changing the file system
+ inserting a record into a database
+ making an http call
+ mutations
+ printing to the screen / logging
+ obtaining user input
+ querying the DOM
+ accessing system state

Efeitos colaterais desqualificam uma função de ser pura e isso faz sentido: funções puras, por definição, precisa sempre retornar a mesma saída dada a mesma entrada, o que não é posível garantir quando lidamos com *coisas* fora da nossa função. Vamos analisar porque devemos ter sempre a mesma saída com a mesma entrada, vamos ver um pouco de Matemática <3 básica.


### Memoization

### Monoid

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


## Alunos

Quem utilizar esse material para estudo, peço que mande um pull request adicionado o seu nome na lista abaixo:
