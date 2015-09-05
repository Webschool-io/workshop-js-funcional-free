var http = require('http');

var url = 'http://api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';

function render(data) {
  console.log('render: ', data)
}

function callback(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    render(str);
  });
}
var req = http.get(url, callback);