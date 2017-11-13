var http = require('http');
var fs = require('fs');
var port = 8080;
var ip = '0.0.0.0';

http.createServer(function (req, res) {

    console.log('Request Received');

    var body = '';

    res.writeHead(200, {
        'Context-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function() {
        fs.appendFile('logs/alerts.log', body + '\n', 'utf8');
        res.end('{"msg": "OK"}');
    })



}).listen(port, ip); console.log('Server running at http://' + ip + ':' + port);


