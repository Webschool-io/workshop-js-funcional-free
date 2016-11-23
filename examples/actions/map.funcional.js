// const isArrayLike = (value) => !!(value != null 
//                                 && value != undefined 
//                                 && value.length 
//                                 && Array.isArray(value))

const map = (mapper, [head, ...tail]) =>{
  console.log('mapper', mapper)
  console.log('head', head)
  console.log('tail', tail)
  console.log('[head, ...tail]', [head, ...tail])

  return head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
}

module.exports = map