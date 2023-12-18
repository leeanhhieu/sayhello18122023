var http = require("http");
var url = require('url');


http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var queryParams = url.parse(req.url, true).query;
    var name = queryParams.name || 'Unknown';
    var title = queryParams.title || 'Unknown';
    var greeting = 'Hello, ' + title + ' ' + name + '!';

    res.end(greeting);



}).listen(8082);
console.log('Sever running at http://127.0.0.1:8082/?name=dangkimthi&title=mrs');