var http = require('http')
var fs = require('fs')

http
    .createServer(function(req, resp){
        const text = fs.readFileSync('./content/big.txt', 'utf8')
        resp.end(text)
    })
    .listen(50000)