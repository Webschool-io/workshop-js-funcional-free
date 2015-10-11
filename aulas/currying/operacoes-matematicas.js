function somar(x, y) {
  return x + y;
}

function subtrair(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  var total = 0;
  var contador = 0;
  while(x){
    total = somar(total, y)
    x--;
  }
  return total;
}

function dividir(x, y) {
  var total = x;
  var contador = 1;
  if(x === y) {
    return 1;
  }
  while(total > 0){
    console.log('total antes', total);
    total = subtrair(total, y);
    console.log('total depois', total);
    x--;
  }
  return total;
}