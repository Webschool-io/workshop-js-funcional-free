/**
Crie uma função que multiplique recebendo 3 parâmetros:

function _multiplicar(op, valor, vezes){};

Onde `op` será a operação de `somar` do nosso exemplo passado.
*/

function somar(x, y) {
  return x + y;
};

function _multiplicar(op, valor, vezes){
  var sum = 0;
  for(var i=2; i <= vezes; i++){
    sum += op(sum, valor);
    console.log('sum:', sum);
  }
  return sum;
};

/**
RESULTADO
_multiplicar(somar, 2, 3)
sum: 2
sum: 6
6
*/