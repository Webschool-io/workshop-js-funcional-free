const filter = (predicate, [head, ...tail]) =>{
  console.log('head', head)
  console.log('tail', tail)
  console.log('[head, ...tail]', [head, ...tail])
  console.log('predicate', predicate)
  console.log('predicate(head)', predicate(head))
  console.log('...(predicate(head) ? [head] : [])', ...(predicate(head) ? [head] : []))
  console.log('')

  return head // condition to go or stop
    ? [ ...(predicate(head) ? [head] : []), ...filter(predicate, tail) ] // recursion
    : [] // stop
}

module.exports = filter