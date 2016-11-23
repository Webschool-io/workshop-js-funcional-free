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