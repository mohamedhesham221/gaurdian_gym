var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist/src',
    port: 8000
})

server.start(function(){
    console.log('server started at port' , server.port)
})