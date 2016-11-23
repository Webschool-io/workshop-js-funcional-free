const filter = ([head, ...tail], fn) => (head) 
                                          ? [ ...(fn(head) ? [head] : []), 
                                              ...filter(tail, fn)]
                                          : []

module.exports = filter