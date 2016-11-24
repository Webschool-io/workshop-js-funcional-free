# Fazendo um sanduba no Subway

Depois de já termos criado manualmente as funções de `map`, `filter` e `reduce` chegou a hora de utiliza-las em algo do mundo real e **nada melhor do que unir programação com larica!**

> Imagine que você está programando um robô para fazer sanduíches no Subway.

![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/robo.jpg)

Logo deveremos ter de antemão o menu:

```js
const paes = ['Integral', 
  '9 grãos', 
  '9 grãos com aveia e mel',
  'Italiano', 
  'Parmesão e orégano', 
  'Três Queijos']
const tamanhos = [15, 30]
const recheios = ['Vegetariano', 'Atum', 'Italiano', 'Frango']
const queijos = ['Cheddar', 'Prato', 'Suíço']  
const saladas = ['Alface', 
  'Tomates', 
  'Pepinos', 
  'Pimentões verdes', 
  'Cebolas',
  'Azeitonas pretas',
  'Picles']
const molhos = ['Mostarda e Mel',
  'Cebola Agridoce',
  'Barbecue',
  'Parmesão',
  'Chipotle',
  'Mostarda',
  'Maionese']

const menu = { paes, tamanhos, recheios, queijos, saladas, molhos }
```

Agora o robô está pronto para receber seu primeiro cliente, esse chega com o seguinte pedido:

> Integral 15, Atum, queijo Suíço.
> 
> Sim, quente.
> 
> (30 segundos depois)
> 
> Alface, Cebolas, Azeitonas pretas, Picles
> 
> Mostarda e Mel, Cebola Agridoce e Chipotle
> 
> Pode feixar.

Traduzindo o pedido para JSON teremos:

```js
const pedido = {   
  pao: ['Integral'],
  tamanho: [15],
  recheio: ['Atum'],
  queijo: ['Suíço'],
  quente: true,    
  saladas: ['Alface', 
    'Cebolas',
    'Azeitonas pretas',
    'Picles'
  ],
  molhos: ['Mostarda e Mel',
    'Cebola Agridoce',
    'Chipotle'
  ] 
}
```

Para que o robo possa montar o sanduíche precisamos definir suas ações:

```js
const montaSanduba = (sanduba) => {

  const escolhaPao = (pao) => sanduba.pao.includes(pao)
  const escolhaTamanho = (tamanho) => sanduba.tamanho.includes(tamanho)
  const escolhaRecheio = (recheio) => sanduba.recheio.includes(recheio)
  const escolhaQueijo = (queijo) => sanduba.queijo.includes(queijo)
  const escolhaSaladas = (salada) => sanduba.saladas.includes(salada)
  const escolhaMolhos = (molho) => sanduba.molhos.includes(molho)
  const fechaSanduba = (sanduba, ingrediente) => sanduba + '\r\n' + ingrediente 
  const esquentar = (ingrediente, i) => ( i < 3 && 
                                          !Number.isInteger(ingrediente) &&
                                          sanduba.quente)
                                        ? ingrediente + '(quente)'
                                        : ingrediente

```

Ainda dentro da função `montaSanduba` iremos então executar as ações previamente definidas:

```js
  return '\r\nSanduba fechado com: ' + 
          [ menu.paes.filter(escolhaPao) + ' ' 
          + menu.tamanhos.filter(escolhaTamanho),
            ...menu.recheios.filter(escolhaRecheio),
            ...menu.queijos.filter(escolhaQueijo)
          ]
          .map(esquentar)
          .concat([ 
            ...menu.saladas.filter(escolhaSaladas),
            ...menu.molhos.filter(escolhaMolhos)
          ])
          .reduce(fechaSanduba, '')
}

console.log(montaSanduba(pedido)) 
```

> **Agora sim podemos entregar o sanduba!**

```
➜ node examples/subway/subway.js

Sanduba fechado com: 
Integral 15(quente)
Atum(quente)
Suíço(quente)
Alface
Cebolas
Azeitonas pretas
Picles
Mostarda e Mel
Cebola Agridoce
Chipotle

```

![Sanduíche de atum](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/sanduba.png)