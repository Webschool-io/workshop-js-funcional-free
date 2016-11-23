# Exemplos de funções conhecidas

[Códigos de exemplo](https://gist.github.com/halan/c3c0ec1142b8d1bbf242939c238fbcab) do mestre [Halan Pinheiro](https://github.com/halan)!

Como estou aprendendo bastante no grupo [Programacao Funcional Brasil](https://telegram.me/ProgramacaoFuncionalBrasil) com o [Halan Pinheiro](https://github.com/halan) então nada mais justo que eu ensine vocês também.


## Map

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

Inicialmente irei apenas retornar um *Array* para passarmos no teste do tipo de retorno, aliás também **comentei o teste do *Number* para nos focarmos apenas no *Array**:

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


### Map FUNCIONAL

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

> Com certeza você notou essa chamada `...tail` e sabe o porquê foi utilizado esses `...`? 
>
> Essa funcionalidade chama-se [Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) e sua descrição é:
> 
> "O  operador spread permite uma expressão ser expandida em locais onde múltiplo argumentos (por chamadas de função) ou múltiplos elementos (por array literais) são esperados."


Deixando isso mais claro ainda com esse exemplo executado no *Terminal* (precisa executar `node` antes!):

```js
> let tail = [ 2, 3, 4, 5 ]
> [...tail]
[ 2, 3, 4, 5 ]
```

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



## Reduce

[Função reduce OFICIAL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```js
const reduce = (reducer, initial, [head, ...tail]) =>
  head // condition to go or stop
    ? reduce(reducer, reducer(initial, head), tail) // recursion
    : initial // stop
```

## Filter

```js
const filter = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop
```

## Zip

```js
const zip = ([head, ...tail], [head2, ...tail2]) =>
  head // condition to go or stop
    ? [ [head, head2], ...zip(tail, tail2)] // recursion
    : [] // stop
```

## Find

```js
const find = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? predicate(head) ? head : find(predicate, tail) // recursion
    : undefined // stop
```

## Sort

```js
const sort = ([head, ...tail]) => // quick sort (https://pt.wikipedia.org/wiki/Quicksort)
  head // condition to go or stop
    ? [...sort(filter(n => n <= head, tail)), head, ...sort(filter(n => n > head, tail))] // recursion (depends of filter)
    : [] // stop
```


## Distribuição Eletrônica

Esses tempos atrás fiz [um scriptzinho](https://github.com/Webschool-io/Quimica-para-programadores/blob/master/distribui.js), antes de conhecer bem, para o fazer a [distribuição eletrônica dos elétrons]() e tinha percebido que ficou péssimo mas ainda não tinha a técnica suficiente em funcional para melhora-lo, olhem só:


```js

let positions = {
  linha: 0,
  coluna: 0
}
module.exports = (distribuicao) => {
  
  const pulaLinha = (linha, coluna) => [linha+1, coluna]
  const pulaLinhaIniciaColuna = (linha, coluna) => [linha+1, 0]
  const pulaLinhaColuna = (linha, coluna) => [linha+1, coluna+1]
  const pulaLinhaDiminuiColuna = (linha, coluna) => [linha+1, coluna-1]
  const voltaLinhaContinuaColuna = (linha, coluna) => [linha-1, coluna]
  const voltaLinhaVoltaColuna = (linha, coluna) => [linha-1, coluna-1]
  const volta2LinhasUltimaColuna = (linha, coluna) => [linha-2, coluna]
  const continuaLinhaAndaColuna = (linha, coluna) => [linha, coluna+1]
  const isFinal = (linha, coluna) => {
    const ultimaLinha = (linha === distribuicao.length-1)
    const ultimaColuna = (coluna === distribuicao[linha].length-1)
    return (ultimaLinha && ultimaColuna)
  }

  const getNextElement = (parOrdenado) => {
    let linha = parOrdenado[0]
    let coluna = parOrdenado[1]

    if(!Array.isArray(parOrdenado) || isFinal(linha, coluna)) return false
    if(!linha) { // === 0
      if(!coluna) return pulaLinha(linha, coluna) // === 0
      else return pulaLinhaColuna(linha, coluna)
    }
    if(linha === 1 || linha === 2) {
      if(!coluna) return continuaLinhaAndaColuna(linha, coluna)
      if(coluna === 1 ) return pulaLinhaIniciaColuna(linha, coluna)
      // Se coluna é a ultima posição da linha
      let ultima = distribuicao[linha].length-1
      if(coluna === ultima) {
        return pulaLinhaDiminuiColuna(positions.linha, positions.coluna)
      }
    }
    if(linha > 2 && linha < 5) {
      // Pego a última posição da linha anterior
      let tam = distribuicao[linha-1].length-1
      if(!coluna){
        if(tam < 3) {
          positions.linha = linha-1
          positions.coluna = tam 
          return voltaLinhaContinuaColuna(linha, tam)
        }
        else {
          positions.linha = linha-1
          positions.coluna = tam-1
          return voltaLinhaContinuaColuna(linha-1, tam-1)
        }
      }
      else return pulaLinhaDiminuiColuna(linha, coluna)
    }
    if(linha >= 5){
      let ultimaPosicao = distribuicao[linha-2].length-1
      if(!coluna && ultimaPosicao > 2) return volta2LinhasUltimaColuna(linha, ultimaPosicao)
      if(coluna) return pulaLinhaDiminuiColuna(linha, coluna)
    }
  }

  const start = [0,0]
  console.log(distribuicao[start[0]][start[1]])
  let next = getNextElement(start)
  if(next) console.log(distribuicao[next[0]][next[1]])
  while(next) {
    next = getNextElement(next)
    if(next) console.log(distribuicao[next[0]][next[1]])
  }
}
```

**Claro que dá para perceber que rola melhorar e muito isso e a primeira dica que ele me deu é que poderia limpar alguns `if`s usando um `switch`. 


### Distribuição Eletrônica - Primeira refatorada


[Primeira refatoração dele](https://gist.github.com/halan/dd2091d5e3723c1ba68ce886ecca8eed) ficou assim:


```js
module.exports = (distribuicao) => {
  
  const pulaLinha = (linha, coluna) => [linha+1, coluna]

  const pulaLinhaIniciaColuna = (linha, coluna) => [linha+1, 0]

  const pulaLinhaColuna = (linha, coluna) => [linha+1, coluna+1]

  const pulaLinhaDiminuiColuna = (linha, coluna) => [linha+1, coluna-1]

  const voltaLinhaContinuaColuna = (linha, coluna) => [linha-1, coluna]

  const voltaLinhaVoltaColuna = (linha, coluna) => [linha-1, coluna-1]

  const volta2LinhasUltimaColuna = (linha, coluna) => [linha-2, coluna]

  const continuaLinhaAndaColuna = (linha, coluna) => [linha, coluna+1]


// Aqui no meio são funções puras, podem ser refatoradas com composição

//  const isFinal = (linha, coluna) => {
//    const ultimaLinha = (linha === distribuicao.length-1)
//    const ultimaColuna = (coluna === distribuicao[linha].length-1)
//    return (ultimaLinha && ultimaColuna)
//  }
    
  const atualizaPosition = (linha, tam) =>
    ({linha: linha-1, coluna: tam < 3 ? tam : tam-1})

  const quandoEntreDuaseCincoLinhas = (linha, coluna, position) => (
    coluna ?
    [pulaLinhaDiminuiColuna(linha, coluna), position] :
    quandoEntreDuaseCincoLinhasComColuna(linha, distribuicao[linha-1].length-1)
  )

  const quandoEntreDuaseCincoLinhasComColuna = (linha, tam) => (
    tam < 3 ? // esse condicional pode ir pra dentro de uma função pra chamar o voltaLinhaContinuaColuna
    [voltaLinhaContinuaColuna(linha, tam), atualizaPosition(linha, tam)] :
    [voltaLinhaContinuaColuna(linha-1, tam-1), atualizaPosition(linha, tam)]
  )
    
  const quandoMaiorQueCinco = (linha, coluna) => (
    coluna ?
    pulaLinhaDiminuiColuna(linha, coluna) :
    volta2LinhasUltimaColuna(linha, distribuicao[linha-2].length-1)
  )
    
  const pulaLinhaOuColuna = (linha, coluna) =>
    !coluna ? pulaLinha(linha, coluna) : pulaLinhaColuna(linha, coluna)
  
  const pulaLinhaVaiParaColuna = (linha, tam) =>
    voltaLinhaContinuaColuna(linha-1, tam)
  

  const quandoUmaOuDuasLinhas = (linha, coluna, positions) => {
    switch(coluna) {
      case 0:
        return continuaLinhaAndaColuna(linha, coluna)
      case 1:
        return pulaLinhaIniciaColuna(linha, coluna)
      default:
    //if(coluna === distribuicao[linha].length-1) { // Ou coloca um else nesse cara, ou não precisa dele.
        return pulaLinhaDiminuiColuna(positions.linha, positions.coluna)
    //}
    }
  }

//-----------------------------------------------
//

  const getNextElement = ([[linha, coluna], positions]) => {
    switch(true) {
      //case isFinal(linha, coluna): // em tese podemos apagar essa condição, o default do switch vai dar conta
      //  return [false, positions]

      case !linha:
        return [pulaLinhaOuColuna(linha, coluna), positions]

      case linha === 1 || linha === 2:
        return [quandoUmaOuDuasLinhas(linha, coluna, positions), positions]

      case linha > 2 && linha < 5:
        return quandoEntreDuaseCincoLinhas(linha, coluna, positions) // <-- essa é a única que atualiza positions!

      case linha >= 5:
        return [quandoMaiorQueCinco(linha, coluna), positions]

      default:
        return [false, positions]
    }
  }

  const flatten = arr =>
    arr.reduce( (result, subarr) =>
        [...result, ...subarr], [])

  const print = arr => arr.forEach( v => console.log(v) )

  const getValue = ([x, y]) => distribuicao[x][y]


  const start = [0,0]
  const posicaoInicial = { linha: 0, coluna: 0 }
  const initialState = { result: [], params: [start, posicaoInicial] }


  const step = ({
    result,
    params: [next, position]
  })=> ({ // dá pra fazer melhor, mandando o segundo parâmetro e utilizando ele dentro do cálculo, imagino que isso pode simplificar algumas funções
    result: [...result, getValue(next)],
    params: getNextElement([next, position])
  })

  const solved = flatten(distribuicao)
    .reduce(step, initialState).result

  print(solved)
}
```

O tal do `switch` ficou aqui:

```js

const getNextElement = ([[linha, coluna], positions]) => {
  switch(true) {
    //case isFinal(linha, coluna): // em tese podemos apagar essa condição, o default do switch vai dar conta
    //  return [false, positions]

    case !linha:
      return [pulaLinhaOuColuna(linha, coluna), positions]

    case linha === 1 || linha === 2:
      return [quandoUmaOuDuasLinhas(linha, coluna, positions), positions]

    case linha > 2 && linha < 5:
      return quandoEntreDuaseCincoLinhas(linha, coluna, positions) // <-- essa é a única que atualiza positions!

    case linha >= 5:
      return [quandoMaiorQueCinco(linha, coluna), positions]

    default:
      return [false, positions]
  }
}
```

**Veja que louco esse `switch(true)`, que o caso eu nunca tinha usado assim, deixando a escolha de qual função executar nos `case`s**:

```js

case !linha:
  return [pulaLinhaOuColuna(linha, coluna), positions]

case linha === 1 || linha === 2:
  return [quandoUmaOuDuasLinhas(linha, coluna, positions), positions]

case linha > 2 && linha < 5:
  return quandoEntreDuaseCincoLinhas(linha, coluna, positions) // <-- essa é a única que atualiza positions!

case linha >= 5:
  return [quandoMaiorQueCinco(linha, coluna), positions]

default:
  return [false, positions]

```


### Distribuição Eletrônica - Solução Final

Porém depois dessa refatoração ele apelou fortemente para técnicas utilizando `head` e `tail` que são largamente usadas na Programação Funcional e as quais eu ainda não conheço bem, por isso usarei muito os códigos dele para estudar e depois ensinar vocês.

[Solução final dele](https://github.com/halan/atomic-dist/blob/master/distribution.js):

```js
const step = (x, y) => (!y) 
  ? [ Math.ceil((x+1) / 2), Math.floor((x+1) / 2) ] 
  : [ x+1, Math.max(y-1, 0) ]

const mount = ([head, ...tail], last) => equalCoord(head, last) 
  ? [ head, ...tail ] 
  : [ ...mount([step(...head)], last), head, ...tail ]

const equalCoord = ([x, y], [x2, y2]) => x === x2 && y === y2

const initCoord = [0, 0]
  
const getCoord = (arr, [x, y]) => arr[x][y]

const getLastCoord = (input) => [input.length-1, input.slice(-1)[0].length-1]

const orderedCoords = (input) => mount([initCoord], getLastCoord(input)).reverse()

const coordsToValues = (coords, input) => coords.map(getCoord.bind(null, input))

const distribution = (input) => coordsToValues(orderedCoords(input), input)

module.exports = distribution


const order = arr => (
  Array.apply(null, Array(count(arr)))
    .reduce( step, { source: arr, result: []})
    .result
)

module.exports = order
```
