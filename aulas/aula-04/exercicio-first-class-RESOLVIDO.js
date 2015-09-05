var numbers = [1,2,3,4,5,6,7,8,9,10];
var apenasPares = function(numero){
  return !(numero % 2);
}
var resposta = numbers.filter(apenasPares)
console.log('resposta: ', resposta);