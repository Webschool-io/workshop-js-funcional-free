const paes = ['Integral',
    '9 grãos',
    '9 grãos com aveia e mel',
    'Italiano',
    'Parmesão e orégano',
    'Três Queijos'
]
const tamanhos = [15, 30]
const recheios = ['Vegetariano', 'Atum', 'Italiano', 'Frango']
const queijos = ['Cheddar', 'Prato', 'Suíço']
const saladas = ['Alface',
    'Tomates',
    'Pepinos',
    'Pimentões verdes',
    'Cebolas',
    'Azeitonas pretas',
    'Picles'
]
const molhos = ['Mostarda e Mel',
    'Cebola Agridoce',
    'Barbecue',
    'Parmesão',
    'Chipotle',
    'Mostarda',
    'Maionese'
]

const menu = {
    paes,
    tamanhos,
    recheios,
    queijos,
    saladas,
    molhos
}

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

const montaSanduba = (sanduba) => {

    const escolhaPao = (pao) => sanduba.pao.includes(pao)
    const escolhaTamanho = (tamanho) => sanduba.tamanho.includes(tamanho)
    const escolhaRecheio = (recheio) => sanduba.recheio.includes(recheio)
    const escolhaQueijo = (queijo) => sanduba.queijo.includes(queijo)
    const escolhaSaladas = (salada) => sanduba.saladas.includes(salada)
    const escolhaMolhos = (molho) => sanduba.molhos.includes(molho)
    const fechaSanduba = (sanduba, ingrediente) => `${sanduba}\r\n${ingrediente}`
    const esquentar = (ingrediente, i) => (!Number.isInteger(ingrediente) &&
            sanduba.quente) ?
        `${ingrediente}(quente)` :
        ingrediente

    return `\r\nSanduba fechado com: ${[ menu.paes.filter(escolhaPao) + ' ' 
+ menu.tamanhos.filter(escolhaTamanho),
  ...menu.recheios.filter(escolhaRecheio),
  ...menu.queijos.filter(escolhaQueijo)
]
.map(esquentar)
.concat([ 
  ...menu.saladas.filter(escolhaSaladas),
  ...menu.molhos.filter(escolhaMolhos)
])
.reduce(fechaSanduba, '')}`
}

console.log(montaSanduba(pedido))
