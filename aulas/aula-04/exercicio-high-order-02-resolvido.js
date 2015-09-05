/**
Depois de fazer isso para `multiplicar` faça também para `dividir`.
Onde `op` será a operação de `somar` do nosso exemplo passado. 
*/

function subtrair(x, y) {
  return x - y;
};


function _dividir(op, valor, vezes){
  var sum = valor;
  for(var i=1; i <= vezes; i++){
    sum = op(sum, vezes);
  }
  return sum;
};

/**
RESULTADO
_dividir(subtrair, 8, 2)
4
*/
