const map = ([head, ...tail], fn) => (!head) 
                                        ? [] 
                                        : [fn(head), ...map(tail, fn)]

module.exports = map