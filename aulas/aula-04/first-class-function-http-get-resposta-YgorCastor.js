var http = require('http');
 
var url =
'http://api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';
 
function callback(data){
  var chunk = '';
  chunk += data;
  console.log('chunk: ', chunk)
}
 
http.get(url, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data', callback)
})
.on('error', function(e) {
  console.log("Got error: " + e.message);
});