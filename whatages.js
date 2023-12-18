var http = require("http");
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var queryParams = url.parse(req.url, true).query;
    var name = queryParams.name || 'Unknown';
    var birthYear = parseInt(queryParams.year) || 0;
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    var ageMessage = name + ' is ' + age + ' years old.';





    res.end(ageMessage);
}).listen(8083);
console.log('Server running at http://127.0.0.1:8083/?name=thidk&year=1984');
