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