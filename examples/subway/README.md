# Fazendo um sanduba no Subway

Depois de já termos criado manualmente as funções de `map`, `filter` e `reduce` chegou a hora de utiliza-las em algo do mundo real e **nada melhor do que unir programação com larica!**

> Imagine que você está programando um robô para fazer sanduíches no Subway.

Logo deveremos ter de antemao

```js
const paes = ['Integral', 
  '9 grãos', 
  '9 grãos com aveia e mel',
  'Italiano', 
  'Parmesão e orégano', 
  'Três Queijos']
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


const meuSanduba = {
  quente: true,       
  pao: ['Integral'],
  recheio: ['Atum'],
  queijo: ['Suíço'],
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

const monteSanduba = (sanduba) => {

  const escolhaPao = (pao) => sanduba.pao.includes(pao)
  const escolhaRecheio = (recheio) => sanduba.recheio.includes(recheio)
  const escolhaQueijo = (queijo) => sanduba.queijo.includes(queijo)
  const escolhaSaladas = (salada) => sanduba.saladas.includes(salada)
  const escolhaMolhos = (molho) => sanduba.molhos.includes(molho)
  const fechaSanduba = (sanduba, ingrediente) => sanduba + ' + ' + ingrediente
  const esquentar = (ingrediente, i) => (i <= 2) 
                                        ? ingrediente + '(quente)'
                                        : ingrediente

  return 'Sanduba fechado com: ' + [...paes.filter(escolhaPao), 
          ...recheios.filter(escolhaRecheio),
          ...queijos.filter(escolhaQueijo)]
          .map(esquentar)
          .concat([ ...saladas.filter(escolhaSaladas),
                    ...molhos.filter(escolhaMolhos)])
          .reduce(fechaSanduba)
}

console.log(monteSanduba(meuSanduba))
```

> **Agora sim podemos pegar nosso sanduba!**

```js
➜ node examples/subway/subway.js

Sanduba fechado com: 
Integral(quente)
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