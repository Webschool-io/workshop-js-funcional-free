# Filter

> Para compreender esse conteúdo leia antes [o `map`](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/map.md)!

Como o nome já diz essa função server para filtrar elementos de um *Array* para um novo. O `filter` assim como o `map`, e outros, também é um *Functor* logo não modificará nosso *Array* original.

Ela funciona da seguinte maneira:

- recebe 1 elemento do *Array*
- executa a função passada
  - caso o retorno seja `true`
    - adiciona esse elemento no *Array* de resposta
  - caso o retorno seja `false`    
    - **NÃO** adiciona esse elemento no *Array* de resposta  

Antes de iniciar nosso código vamos escrever o teste para ela usando de base os nossos testes para o `map`:

```js
const expect = require('chai').expect

const filter = require('./../actions/filter')
const value = 2
const values = [1, 2, 3, 4, 5]
const isEven = (value) => !(value % 2)

describe('Filter',  () => {
  describe('Número pares',  () => {

    const resultadoRecebido = filter(values, isEven)
    const resultadoEsperado = [2, 4]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => filter(value, isEven)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valores pares', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })

    it('não deve retornar os valores ímpares', () => {
      expect(resultadoRecebido).to.be.not.eql([1, 3, 5])
    })
  })
})
```

Agora usando de base nosso `map` inicial teremos que fazer o seguinte:

- iterar no *Array*
- executar a função passado no elemento atual
- verificar se o retorno dessa função é `true`
- caso seja adicionamos esse elemento no novo *Array*

Sabendo disso podemos iniciar com o seguinte 
código:


```js
const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const filter = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []
  let elemento = undefined

  for (let i=0; i<values.length; i++){
    if(fn(values[i])) {
      elemento = values[i]
      arr.push(elemento)
    }
  }

  return arr
}

module.exports = filter
```

Executando nosso teste, `mocha examples/test/filter.spec.js`, teremos o seguinte retorno:

```js

  Filter
    Número pares
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valores pares
      ✓ não deve retornar os valores ímpares


  4 passing (32ms)

```

> **CARAIIIII! Tamo zica do pântano no baguio hein!** 
> 
> Mas vamos melhorar.

No coração do `filter` não precisamos desse `elemento`, pois podemos fazer o seguinte:

```js
for (let i=0; i<values.length; i++){
  if(fn(values[i])) arr.push(values[i])
}
```

> **E PRONTO! Nosso `filter` já está correto.

Entretanto nosso estudo **mal começou** pois agora iremos partir para a refatoração funcional!

Vamos começar criando o teste para a função funcional.

## Filter - Teste

Dessa vez como já possuímos um pré-conceito iremos iniciar criando o teste para o `filter`:

```js
const expect = require('chai').expect

const filter = require('./../actions/filter.funcional')
const value = 2
const values = [1, 2, 3, 4, 5]
const isEven = (value) => !(value % 2)

describe('Filter',  () => {
  describe('Número pares',  () => {

    const resultadoRecebido = filter(isEven, values)
    const resultadoEsperado = [2, 4]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => filter(isEven, value)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valores pares', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })

    it('não deve retornar os valores ímpares', () => {
      expect(resultadoRecebido).to.be.not.eql([1, 3, 5])
    })
  })
})
```


## Filter - FUNCIONAL

O teste criado anteriormente é destinado à essa função:

```js
const filter = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop
```


Executando nosso teste, `mocha examples/test/filter.funcional.spec.js`, confirmamos sua funcionalidade:


```


  Filter
    Número pares
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valores pares
      ✓ não deve retornar os valores ímpares


  4 passing (18ms)

```

Agora vamos fazer aquele teste de mesa maroto para entendermos o passo a passo dela, para isso deixei ela assim:

```js
const filter = (predicate, [head, ...tail]) =>{
  console.log('head', head)
  console.log('tail', tail)
  console.log('[head, ...tail]', [head, ...tail])
  console.log('predicate', predicate)
  console.log('predicate(head)', predicate(head))
  console.log('...(predicate(head) ? [head] : [])', ...(predicate(head) ? [head] : []))
  console.log('')

  return head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop
}

module.exports = filter
```

Para conseguirmos o seguinte resultado:

```js
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]
predicate (value) => !(value % 2)
predicate(head) false
...(predicate(head) ? [head] : [])

head 2
tail [ 3, 4, 5 ]
[head, ...tail] [ 2, 3, 4, 5 ]
predicate (value) => !(value % 2)
predicate(head) true
...(predicate(head) ? [head] : []) 2

head 3
tail [ 4, 5 ]
[head, ...tail] [ 3, 4, 5 ]
predicate (value) => !(value % 2)
predicate(head) false
...(predicate(head) ? [head] : [])

head 4
tail [ 5 ]
[head, ...tail] [ 4, 5 ]
predicate (value) => !(value % 2)
predicate(head) true
...(predicate(head) ? [head] : []) 4

head 5
tail []
[head, ...tail] [ 5 ]
predicate (value) => !(value % 2)
predicate(head) false
...(predicate(head) ? [head] : [])

head undefined
tail []
[head, ...tail] [ undefined ]
predicate (value) => !(value % 2)
predicate(head) true
...(predicate(head) ? [head] : []) undefined
```

Vamos analisar apenas as duas primeiras iterações:


```js
head 1
predicate(head) false
...(predicate(head) ? [head] : [])

head 2
predicate(head) true
...(predicate(head) ? [head] : []) 2
```

Percebeu que quando `predicate(head)` retornar `true` o valor de `head` é retornado em `...(predicate(head) ? [head] : [])` que é o *"primeiro/cabeça"* elemento do *Array*, sendo que o segundo é a chamada recursiva como visto abaixo:

```
[ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ]
```

Graças ao Spread Operator, `...`, podemos retornar um *Array*, `[head] : []` que ele transformará em valores *"comuns"*. Por isso `[2]` vira `2` e `[]` não vira nada, como podemos ver abaixo:

```js
> [1, ...[2, 3]]
[ 1, 2, 3 ]
> [1, ...[2, 3], ...[]]
[ 1, 2, 3 ]
```

Isso praticamente mata o entendimento dessa função pois a parte recursiva já vimos [anteriormente com o `map`](https://github.com/Webschool-io/workshop-js-funcional-free/blob/master/examples/map.md).


## Filter - COMPARAÇÃO

Agora iremos aprender como sair do código imperativo:

```js
const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const filter = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    if(fn(values[i])) arr.push(values[i])
  }

  return arr
}
```

Para o código funcional:

```js
const filter = (predicate, [head, ...tail]) =>
  head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop

```

Antes de tudo obviamente precisamos criar o nosso teste para a função que iremos criar/refatorar, que na verdade é o mesmo criado lá no início mudando apenas a chamada do módulo do `filter`:

```js
const expect = require('chai').expect

const filter = require('./../actions/filter.nosso')
const value = 2
const values = [1, 2, 3, 4, 5]
const isEven = (value) => !(value % 2)

describe('Filter',  () => {
  describe('Número pares',  () => {

    const resultadoRecebido = filter(values, isEven)
    const resultadoEsperado = [2, 4]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => filter(value, isEven)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valores pares', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })

    it('não deve retornar os valores ímpares', () => {
      expect(resultadoRecebido).to.be.not.eql([1, 3, 5])
    })
  })
})
```

Como já sabemos precisamos refatorar os parâmetros da nossa função, a condição de parada da sua recursão e a própria chamada da recursão, então vamos por partes:

```js
const filter = ([head, ...tail], fn) => {
  
  let arr = []

  if (!head) return arr

  return arr
}
```

Mudamos os parâmetros para `[head, ...tail], fn` e nossa condição de saída é: `if (!head)`. Porém isso aí ainda não faz muita coisa como podemos ver a execução do nosso teste:

```


  Filter
    Número pares
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      1) deve retornar os valores pares
      ✓ não deve retornar os valores ímpares


  3 passing (22ms)
  1 failing

  1) Filter Número pares deve retornar os valores pares:

      AssertionError: expected [] to deeply equal [ 2, 4 ]
      + expected - actual

      -[]
      +[
      +  2
      +  4
      +]
      
      at Context.it (examples/test/filter.nosso.spec.js:23:36)


```

Continuando, precisamos selecionar o elemento quando o retorno da `fn` for `true` e depois fazer a chamada recursiva, basicamente estamos aqui: `[ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ]`.

**Então bora refatorar nosso código:**

```js
const filter = ([head, ...tail], fn) => {
  
  let arr = []
  let elemento = []

  if (!head) return arr
  if (fn(head)) elemento = [head]

  return [...elemento, ...filter(tail, fn)]
}

module.exports = filter
```

Agora para verificarmos se já acertamos basta executar o teste e ver:

```

  Filter
    Número pares
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valores pares
      ✓ não deve retornar os valores ímpares


  4 passing (17ms)


```

Porém obviamente ainda podemos melhora-la e é isso que faremos transformando esse `if` em um ternário dentro do *Array* do nosso `return`:


```js
const filter = ([head, ...tail], fn) => {
  
  let elemento = []

  if (!head) return []

  return [ ...(fn(head) ? [head] : []), ...filter(tail, fn)]
}
```

> **Agora para finalizar com chave de ouro hein!**
> 
> Vamos colocar toda essa função em 1 linha!

```js
const filter = ([head, ...tail], fn) => (!head) 
                                          ? []
                                          : [ ...(fn(head) ? [head] : []), 
                                              ...filter(tail, fn)]
```

Ou invertendo a lógica para deixarmos igual a função em que nos baseamos:


```js
const filter = ([head, ...tail], fn) => (head) 
                                          ? [ ...(fn(head) ? [head] : []), 
                                              ...filter(tail, fn)]
                                          : []

```

Passando lindamente no nosso teste:

```


  Filter
    Número pares
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valores pares
      ✓ não deve retornar os valores ímpares


  4 passing (17ms)

```
