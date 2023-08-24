// Servidor de express
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // http server
        this.server = http.createServer(this.app)

        this.io = socketIO(this.server, { /* configuraciones */ });
    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use(express.static(path.resolve( __dirname, '../public')));
        // CORS
        this.app.use(cors());
    }

    socketsConfiguration() {
        new Sockets( this.io )
    }

    execute() {
        //init middlewares
        this.middlewares()

        // Init sockets
        this.socketsConfiguration() 

        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        })
    }

}

module.exports = Server