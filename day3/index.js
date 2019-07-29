var http = require('http')
var server = http.createServer(function(req,res){
    if(req.url === '/'){

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('<h1>Halo semuanyya! Apa Kabar asdasdasdasdasd</h1>')
    }else if(req.url === '/products'){
        res.writeHead(404, {'Content-Type' : 'application/json'});
        var prodArr = [{nama : "popo", harga : 150000, desc : "WOW"}, {nama : "popasdo", harga : 1502000, desc : "WoW"}]
        res.end(JSON.stringify(prodArr))
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1>Not Found</h1>')
    }
})

server.listen(3000) // UTK MENJALANKAN SERVER

console.log('Server Aktif. Listening to port 3000')