const http = require('http');

var port = 3000;
const server = http.createServer((req, res)=>{
    res.write("Hello This My First Node Js and Cloud Project");
    res.end();
});

server.listen(port, ()=>{
    console.log(`server Is Runing ${port}`)
})
