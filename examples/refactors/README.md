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

Porém o nosso querido mestre do Funcional, [Halan](), conseguiu melhorar mais. Esse cara é foda!

Essa é nossa versão final, encapsulando em uma função para deixarmos mais legível:

```js
const idFilter = (array, id) =>
    array 
      ? array.filter(el => el.id == id)
      : null

module("app").filter('searchById', () => idFilter)
```

![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/refatoracao01.png)

**Espero que esse meu hobby de refatorar o código dos outros ajude alguém.**



