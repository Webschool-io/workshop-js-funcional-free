const isArrayLike = (value) => value != null && value.length && Array.isArray(value)

const map = (values, fn) => {
  console.log('isArrayLike(values)', isArrayLike(values))
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}

module.exports = map