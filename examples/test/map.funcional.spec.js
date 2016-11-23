const expect = require('chai').expect

const map = require('./../actions/map.funcional')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {
  describe('Array',  () => {

    const resultadoRecebido = map(times10, values)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => map(times10, value)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})