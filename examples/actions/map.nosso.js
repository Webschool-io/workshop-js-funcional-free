const map = ([head, ...tail], fn) => {
  
  let arr = []

  if (!head) return arr
  // fn(head)
  map(tail, fn)
}

module.exports = map