const http = require('http')
const app = require('../app')
const server = http.createServer(app)
const port = process.env.PORT

server.listen(port, ()=>{
    console.log('server listen to port', port)
})