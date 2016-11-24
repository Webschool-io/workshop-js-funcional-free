# Refatoração do coração <3

Hoje estava de bobeira no grupo [angularjsbrasil](https://telegram.me/angularjsbrasil) quando me deparo com esse código:

```js
module("app")
    .filter('searchById', function () {
        return function (array, id) {
            if (array) {
                var i = 0;
                var len = array.length;
                for (; i < len; i++) {
                    if (+array[i].id == +id) {
                        return array[i];
                    }
                }
                return null;
            }
        }
    });
```

**Logo minha mente deu um estalo e precisei refatorar deixando ele desse jeito:**

```js
module("app")
    .filter('searchById', () => (array, id) => 
      (array) 
        ? array.filter(el => el.id == id)
        : null
    );
```

> Então o que aconteceu ali?

Primeiramente troquei de *function* para *arrow function*:


```js
module("app")
    .filter('searchById', () => {
        return (array, id) => {
            if (array) {
                var i = 0;
                var len = array.length;
                for (; i < len; i++) {
                    if (+array[i].id == +id) {
                        return array[i];
                    }
                }
                return null;
            }
        }
    });
```

Nem precisamos corrigir o `for` pois usarei o `filter` tendo em vista que é isso que ele gostaria que acontecesse, vide esse código:

```js
if (+array[i].id == +id) {
    return array[i];
}
```

Continuando:

```js
module("app")
    .filter('searchById', () => {
        return (array, id) => {
            if (array) {
              retun array.filter(el => parseInt(el.id) === parseInt(id))
            }
        }
    });
```

Vamos dar aquele toque maroto para retirar os `return`s:


```js
module("app")
  .filter('searchById', () => (array, id) => {
    if (array) {
      retun array.filter(el => parseInt(el.id) === parseInt(id))
    }
  });
```

E para finalizar trocamos o `if` por um ternário:

```js
module("app")
  .filter('searchById', () => (array, id) =>  
    array 
        ? array.filter(el => el.id == id)
        : null
  );
```

## Finalizando

Porém o nosso querido mestre do Funcional, [Halan](https://github.com/halan), conseguiu melhorar mais. Esse cara é foda!

Encapsulando em uma função para deixarmos mais legível:

```js
const idFilter = (array, id) =>
    array 
      ? array.filter(el => el.id == id)
      : null

module("app").filter('searchById', () => idFilter)
```

> E seu te disser que ainda rola melhorar mais um pouco?


Pois sim! O [Cleiton Loyola] lá no grupo [Programação Funcional Brasil](https://telegram.me/ProgramacaoFuncionalBrasil) melhorou eliminando a nossa necessidade do `if` ternário:

```js
const idFilter = (array, id) => 
  (array || []).filter(el => el.id == id)

module("app").filter('searchById', () => idFilter)
```

Dessa forma é bem melhor pois não estamos retornando `null` fazendo com que nossa função realmente fique funcional!


![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/refatoracao01.png)

> **Espero que esse meu hobby de refatorar o código dos outros ajude alguém.**

## Referências

- [Is returning null bad design?](http://stackoverflow.com/questions/1274792/is-returning-null-bad-design)
- [Why NULL is Bad?](http://www.yegor256.com/2014/05/13/why-null-is-bad.html)






