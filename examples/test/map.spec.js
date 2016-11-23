const expect = require('chai').expect

const map = require('./../actions/map')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {

  describe('Number',  () => {

    // const resultadoRecebido = map(value, times10)
    // const resultadoEsperado = 20


    // it('deve retornar um Number', () => {
    //   expect(resultadoRecebido).to.be.a('number')
    // })

    // it(`deve retornar o valor antigo ${value} multiplicado por 10`, () => {
    //   expect(resultadoRecebido).to.eql(resultadoEsperado)
    // })
  })

  describe('Array',  () => {

    const resultadoRecebido = map(values, times10)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    // it('deve retornar um ERRO caso não seja Array', () => {
    //   const err = new TypeError('Não é Array')
    //   expect(map(2, times10)).to.throw(err)
    // })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})