const expect = require('chai').expect

const map = require('./../actions/map')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {
  it('deve retornar um Number novo com o valor antigo, sendo multiplicado por 10', () => {

    const resultadoRecebido = map(value, times10)
    const resultadoEsperado = 20

    expect(resultadoRecebido).to.be.a('number')
    expect(resultadoRecebido).to.equal(resultadoEsperado)

  })
  it('deve retornar um Array novo com os valores antigos, sendo cada um multiplicado por 10', () => {

    const resultadoRecebido = map(values, times10)
    const resultadoEsperado = [10, 20, 30, 40, 50]

    expect(resultadoRecebido).to.be.an('array')
    expect(resultadoRecebido).to.have.members(resultadoEsperado)
    expect(resultadoRecebido).to.equal(resultadoEsperado)

  })
})