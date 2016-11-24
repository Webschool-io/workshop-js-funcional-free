# Exemplos de funções conhecidas e como cria-las


```js
[🍞, 🍗].reduce((sanduba, ingrediente) => 🍔)
.concat(
[🍏, 🍎, 🍐, 🍊, 🍋, 🍌]
.filter((fruta) => fruta === 🍎 || fruta === 🍋)
.reduce((suco, fruta) => 🍹))
```

Os [códigos de exemplo funcionais](https://gist.github.com/halan/c3c0ec1142b8d1bbf242939c238fbcab) são do mestre [Halan Pinheiro](https://github.com/halan)! Eu apenas irei mostrar como criar as funções de forma imperativa e depois analisando os códigos do Halan mostrarei como refatorarmos para chegarmos à esse resultado maravilhosamente **funcional**.

Como estou aprendendo bastante no grupo [Programacao Funcional Brasil](https://telegram.me/ProgramacaoFuncionalBrasil) com o [Halan Pinheiro](https://github.com/halan) então nada mais justo que eu ensine vocês também.

Antes de entrarmos nas funções podemos fazer uma analogia simples do `map`  & `reduce` com a fabricação de sanduíches, veja a imagem abaixo:

![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/map-reduce.png)

Caso queira outro exemplo mais lúdico e com o `filter` também aí vai:


![map filter reduce in emoji](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/map-filter-reduce-in-emoji.png)


## [Map](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/map.md)

**Explicação completa [AQUI](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/map.md)!** 

```js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
```



![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/array-map.png)


## [Filter](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/filter.md)


**Explicação completa [AQUI](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/filter.md)!**


```js
const filter = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop
```


![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/array-filter.png)


## [Reduce](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/reduce.md)

**Explicação completa [AQUI](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/reduce.md)!**


```js
const reduce = (reducer, initial, [head, ...tail]) =>
  head // condition to go or stop
    ? reduce(reducer, reducer(initial, head), tail) // recursion
    : initial // stop
```

![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/array-reduce.png)



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
