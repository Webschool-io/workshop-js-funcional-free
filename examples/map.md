# Map

Lembrando do [nosso material do workshop](https://github.com/Webschool-io/workshop-js-funcional-free#map) sobre `map`:

> O `map` é um método que executa um **`callback`** para cada valor de um **`array`** modificando os mesmos, isso faz com que o **`map`** crie um novo **`array`** com os novos valores obtidos. Exemplo:


```javascript
var x = [1,2,3].map(function (value) {
  return value * 2
});

console.log(x) //[2,4,6]
```

Em ES6:

```javascript
const x = [1,2,3].map(v => v * 2);
console.log(x) //[2,4,6]
```

[Documentação oficial do map em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Antes de entendermos como implementar o `map`, precisamos [lembrar que ele é um Functor](https://github.com/Webschool-io/workshop-js-funcional-free#functor):


> A Functor is a function, given a value and a function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns the new structure.

Vamos entender parte por parte:

- *Functor* é uma função que irá receber um valor e uma função;
- Desencapsula[?] os valores para chegar a seu(s) valor(es) interno(s);
- Chama a função repassada com o(s) valor(es) interno(s);
- Encapsula os valores devolvidos em uma nova estrutura;
- e retorna a nova estrutura.

Sabendo disso podemos começar a montar nosso `map`, criando a função `functor` que receberá o valor e a função a ser executada:

```js
function functor(value, fn) {
  return fn(value)
};

```

Colocando ela como um módulo para ser mais facilmente testada:

```js
const map = (value, fn) => fn(value)

module.exports = map
```

Podemos testar ela fazendo o seguinte:

```js
function plus10(value) {
  return value + 10
};

let p10 = functor(10, plus10)

console.log(p10)
```

Com isso já criamos a base para o nosso `map`, agora obviamente precisamos fazer a mesma funcionar com *Array*, porém antes iremos escrever o **TESTE** para ela: 

```js
const expect = require('chai').expect

const map = require('./../actions/map')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {

  describe('Number',  () => {

    const resultadoRecebido = map(value, times10)
    const resultadoEsperado = 20

    it('deve retornar um Number', () => {
      expect(resultadoRecebido).to.be.a('number')
    })

    it('deve retornar o valor antigo ${value} multiplicado por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
  
  describe('Array',  () => {

    const resultadoRecebido = map(values, times10)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})
```

Depois basta executarmos `mocha examples/test/map.spec.js`:

```
➜ mocha examples/test/map.spec.js


  Map
    Number
      ✓ deve retornar um Number
      ✓ deve retornar o valor antigo ${value} multiplicado por 10
    Array
      1) deve retornar um Array
      2) deve retornar os valor antigos multiplicados por 10


  2 passing (21ms)
  2 failing

  1) Map Array deve retornar um Array:
     AssertionError: expected NaN to be an array
      at Context.it (examples/test/map.spec.js:30:39)

  2) Map Array deve retornar os valor antigos multiplicados por 10:
     AssertionError: expected NaN to deeply equal [ 10, 20, 30, 40, 50 ]
      at Context.it (examples/test/map.spec.js:34:36)


```

Criei o teste com o *Number* apenas para vermos como a função funciona com 1 valor porém quebra com 1 *Array* e o `map` na verdade só deveria funcionar com *Arrays*, **então bora refatorar!** 

Inicialmente irei apenas retornar um *Array* para passarmos no teste do tipo de retorno, aliás também **comentei o teste do *Number* para nos focarmos apenas no *Array*:

```js
const map = (values, fn) => {
  let arr = []

  return arr
}
```

Para depois executarmos o teste novamente:

```
  Map
    Array
      ✓ deve retornar um Array
      1) deve retornar os valor antigos multiplicados por 10


  1 passing (21ms)
  1 failing

  1) Map Array deve retornar os valor antigos multiplicados por 10:

      AssertionError: expected [] to deeply equal [ 10, 20, 30, 40, 50 ]
      + expected - actual

      -[]
      +[
      +  10
      +  20
      +  30
      +  40
      +  50
      +]
      
      at Context.it (examples/test/map.spec.js:34:36)
```

Agora só falta passarmos pelo segundo teste, esse sim é nossa verdadeira prova, então vamos pensar:

> Preciso fazer a função executar a função `fn` passada para cada elemento do *Array*, porém se estamos fazendo o `map` logicamente não podemos utilizar o `forEach` logo usaremos o `for`!


Sabendo disso nosso código ficará assim:

```js
const map = (values, fn) => {
  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}
```

Para garantir vamos executar nosso teste:

```

  Map
    Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  2 passing (15ms)

```

> **SHOW DE BOLA!!!** Agora só precisamos implementar um teste para verificar se a entrada é realmente um *Array*.

Basta adicionarmos esse teste no nosso `describe`:


```js
it('deve retornar um ERRO caso não seja Array', () => {
  expect(() => map(2, times10)).to.throw(TypeError)
})

```

Agora devemos executar o teste e vê-lo falhar para depois refatorarmos nossa função `map`:


```

  Map
    Array
      1) deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  2 passing (22ms)
  1 failing

  1) Map Array deve retornar um ERRO caso não seja Array:
     AssertionError: expected [Function] to throw TypeError
      at Context.it (examples/test/map.spec.js:31:45)


```

E para fazeros essa validação, se é um *Array*, existem diversas formas, contudo utilizaremos a mais fácil: `Array.isArray(value)`.

Deixando nosso código assim:

```js
const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const map = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}

module.exports = map
```

> Percebeu uma coisa diferente na função `isArrayLike`?
>
> **SIM! As duas `!`(exclamações).**
>
> Por que você acha que fiz isso?
> 
> **Bem simples, fiz isso para forçar o retorno de um BOOLEANO.** Pois quando utilizamos o primeiro `!` ele irá **NEGAR** o valor e usando o segundo `!` ele irá **NEGAR O VALOR DA NEGAÇÃO ANTERIOR** logo transformando esse valor para o que desejamos.
> 
> **Falei que era simples!**


## Map FUNCIONAL

Agora que já temos nossa implementação precisamos analisar esse exemplo puramente funcional e entender como refatorar nosso código até chegar nele:

```js
// map.funcional.js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
```

Como você deve ter percebido a ordem dos parâmetros é invertida, por isso iremos criar um outro teste para essa função nova apenas invertendo os parâmetros na chamada da função:

```js
const expect = require('chai').expect

const map = require('./../actions/map.funcional')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {
  describe('Array',  () => {

    const resultadoRecebido = map(times10, values)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => map(times10, value)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})
```

E depois rodamos com `mocha examples/test/map.funcional.spec.js`:

```

  Map
    Array
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  3 passing (16ms)
```

> **PERFEITO!** Nosso teste está passando, agora vamos para a análise pesada do bagulho.


```js
// map.funcional.js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
```

Analisamos seus parâmetros vimos que o primeiro é a função a ser executada em cada posição do *Array* mas e esse segundo parâmetro `[head, ...tail]`?

Vamos criar um tipo de teste de mesa para que possamos entender os valores de entrada, para isso modifiquei a função para:

```js
const map = (mapper, [head, ...tail]) =>{
  console.log('mapper', mapper)
  console.log('head', head)
  console.log('tail', tail)
  console.log('[head, ...tail]', [head, ...tail])

  return head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
}
```

Executado o nosso teste podemos verificar o seguinte (peguei apenas a parte do console.log):

```
mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]

mapper (value) => value * 10
head 2
tail [ 3, 4, 5 ]
[head, ...tail] [ 2, 3, 4, 5 ]

mapper (value) => value * 10
head 3
tail [ 4, 5 ]
[head, ...tail] [ 3, 4, 5 ]

mapper (value) => value * 10
head 4
tail [ 5 ]
[head, ...tail] [ 4, 5 ]

mapper (value) => value * 10
head 5
tail []
[head, ...tail] [ 5 ]

mapper (value) => value * 10
head undefined
tail []
[head, ...tail] [ undefined ]
```

Analisando apenas a primeira parte:

```js
mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]
```

Podemos notar que `[head, ...tail]` nada mais é do que o *Array* completo que entra no `map`, onde o `head` é a primeira posição e o `tail` é o resto. 

Note que passamos apenas 1 *Array* pra função `map`, porém ela separa em 2 valores: `head` e `tail`. 

Isso acontece graças a [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao) que é a atribuição via desestruturação, ou seja, como o próprio nome diz: ela desestrutura um Objeto ou *Array* para variáveis definidas. 

**Nesse caso a primeira posição do *Array* vai para `head` e o resto para `tail`!** Mas como ela sabe que o resto vai para o `tail?`

> Graças a essa chamada `...tail` e sabe o porquê foi utilizado esses `...`? 
>
> Essa funcionalidade chama-se [Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) e sua descrição é:
> 
> "O  operador spread permite uma expressão ser expandida em locais onde múltiplo argumentos (por chamadas de função) ou múltiplos elementos (por array literais) são esperados."


Deixando isso mais claro ainda com esse exemplo executado no *Terminal* (precisa executar `node` antes!):

```js
> let tail = [ 2, 3, 4, 5 ]
> [666, ...tail]
[666, 2, 3, 4, 5 ]
> const f = ([a, b, resto]) => console.log(a, b, resto)
undefined
> f([1, 2, 3, 4, 5])
1 2 3
undefined
> const g = ([a, b, ...resto]) => console.log(a, b, resto)
undefined
> g([1, 2, 3, 4, 5])
1 2 [ 3, 4, 5 ]
```

Logo ele irá definindo cada valor na sequência do *Array* e para pegarmos "todos" os que sobraram basta usar o *Spread Operator*!

Depois de entendermos com quais valores estamos trabalhando precisamos entender a estrutura da nossa função:

```js
head // condition to go or stop
  ? [ mapper(head), ...map(mapper, tail) ] //recursion
  : [] // stop
```  

Nesse caso ela está usando um `if` ternário, traduzindo para um `if` normal fica assim:

```js
if (head) {
  return [ mapper(head), ...map(mapper, tail) ]
} else {
  return []
}
```

> Perceba que ele não precisou usar o `return`, isso se deve pela forma da criação da função `map` que utilizou [Arrow Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `() =>`, quando ela possuir apenas 1 linha a qual já faz o retorno da função não é necessário utilizar `{ }` muito menos o `return`.


Porém além disso ela também está usando recursividade como visto aqui: `[ mapper(head), ...map(mapper, tail) ]`.

Agora que eu lhe pergunto:

> O que está acontecendo nessa linha?
> 
> Vamos novamente analisar, uma parte do, nosso teste de mesa.


```
mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]

mapper (value) => value * 10
head 2
tail [ 3, 4, 5 ]
[head, ...tail] [ 2, 3, 4, 5 ]

mapper (value) => value * 10
head 3
tail [ 4, 5 ]
[head, ...tail] [ 3, 4, 5 ]
```

Sabemos então que na primeira parte essa linha `[ mapper(head), ...map(mapper, tail) ]` irá executar/retornar:

```js
[ 1 * 10,  // mapper(head)
  ...map((n) => n * 10, [ 2, 3, 4, 5 ])// ...map(mapper, tail)
]
```

Vamos nos atentar ao segundo valor desse *Array* que acredito ser o mais "complexo" de toda essa função. Quando chamarmos `map(mapper, tail)` ele irá chamar a mesma função onde estamos, `map`, passando agora apenas o *Array* `tail` que já não possui o primeiro valor, `head`, e retornar um *Array*. **Porém como precisamos pegar cada valor desse *Array* e "juntar" com o primeiro valor já passado anteriormente necessitamos usar `...map(mapper, tail)` pois será dessa forma que iremos criar o `[ mapper(head), ...map(mapper, tail) ]`.**

Então para criar a primeira iteração dessa função ela se chama para poder criar o resto do *Array*, entretando você deve se perguntar:

> E como é que ela sabe que deve parar de se chamar?
>
> **ÓTIMA PERGUNTA!** Analise aqui comigo as duas últimas iterações do nosso teste de mesa:

```js
head 5
tail []
[head, ...tail] [ 5 ]

head undefined
tail []
[head, ...tail] [ undefined ]
```

Sabemos através da "tradução" do `if` ternário para o comum que o teste lógico é em cima do `head`, ou seja, enquanto existir valor pro `head` ela irá continuar executando. Logo se esse valor for `undefined` ela irá parar de se chamar e irá retornar `[]`.

Então perceba que o *Array* de retorno da função `map` é gerado dinamicamente em cima do mesmo *Array*, note que o valor passado para cada iteração dessa recursividade é o `[head, ...tail]`. Então vamos ver como ele se comporta no nosso teste de mesa:


```js
[head, ...tail] [ 1, 2, 3, 4, 5 ]

[head, ...tail] [ 2, 3, 4, 5 ]

[head, ...tail] [ 3, 4, 5 ]

[head, ...tail] [ 4, 5 ]

[head, ...tail] [ 5 ]

[head, ...tail] [ undefined ]
```

> Sabe o porquê esse *Array* vai diminuindo?
> 
> 
> 
> 
> **EXATAMENTE!** 
> 
> Porque a cada iteração nós retiramos a primeira posição que é o `head` e aplicamos a função `mapper` apenas nesse valor, isso vai acontecendo até que não exista mais elementos a serem processados.


## Map - COMPARAÇÃO

Agora iremos aprender como sair do código imperativo:

```js
const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const map = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}
```

Para o código funcional:

```js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
```

Primeira coisa que devemos fazer é refatorar nossos parâmetros de entrada e **uma coisa impotantíssima: a condição de parada da função recursiva**

```js
const map = ([head, ...tail], fn) => {
  
  let arr = []
  
  if (!head) return arr

}
```

Depois precisamos fazer a chamada recursiva passando os valores corretamente:

```js
const map = ([head, ...tail], fn) => {
  
  if (!head) return []

  return [fn(head), map(tail, fn)]
}
```

Com isso estamos quase lá, porém eu não usei `...map(tail, fn)` apenas para vermos como ficaria essa saída errada:

```js

      -  [
      -    20
      -    [
      -      30
      -      [
      -        40
      -        [
      -          50
      -          []
      -        ]
      -      ]
      -    ]
      -  ]
```

> **Percebeu como o `...` é importantíssimo?**

Então refatorando deixaremos nossa função assim:


```js
const map = ([head, ...tail], fn) => {
  
  if (!head) return []

  return [fn(head), ...map(tail, fn)]
}
```

Agora basta refatorarmos esse `if` normal para um ternário:

```js
const map = ([head, ...tail], fn) => (!head) 
                                        ? [] 
                                        : [fn(head), ...map(tail, fn)]

module.exports = map
```

Executando, `mocha examples/test/map.nosso.spec.js`, nosso teste para essa função teremos o seguinte resultado:

```

  Map
    Array
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  3 passing (17ms)
``` 

## Map - Conclusão

Para criarmos aprendermos essa função foi necessário utilizarmos/conhecermos:

- arrow function
- destructuring assignment
- spread operator
- if ternário
- recursão

