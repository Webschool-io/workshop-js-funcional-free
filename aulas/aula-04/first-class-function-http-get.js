var http = require('http');

var url = 'http://api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';

/**
Exercicio:


Criar uma função de cllback que aceite mais 1 parâmetro
que será como ele mostrará o JSON
no nosso caso ela terá que ficar assim:

function callback(data, render)

Onde a função render é a função que possui o console.log!

function(data) {
    var chunk = '';
    chunk += data;
    console.log('chunk: ', chunk)
  }

**/


http.get(url, function(res) {
  console.log("Got response: " + res.statusCode);

  res.on('data', function(data) {
    var chunk = '';
    chunk += data;
    console.log('chunk: ', chunk)
  })
})
.on('error', function(e) {
  console.log("Got error: " + e.message);
});