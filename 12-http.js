const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/end'){
        res.end('welcome Nivedeeta')
    }
    if(req.url === '/about'){
        res.end("short history")
    }
    res.end(`
    <h1>Oops!!</h1>
    <p>page doesnt fount</p>
    <a href = '/'>back home</a>
    `)
})

server.listen(5000)