// // Servidor de express
// const express = require('express');
// const app = express();

// // Socket server - configuration
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// // Desplegar el directorio publico
// app.use(express.static(__dirname + '/public'));

// io.on('connection', (socket) => {
//     //! socket: socket del lado del server (representa al cliente conectado)

//     socket.on('mensaje-cliente', (data) => {
//         console.log(data)

//         // si usamos socket solo se emite el mensaje al cliente que lo envio
//         // si usamo io emitimos atodos los que esten conectados al namespace
//         socket.emit('mensaje-desde-server', data)
//     })

// });

// // Start server
// server.listen(8080, () => {
//     console.log('Server listening on port 8080');
// });

const Server = require('./models/server')
require('dotenv').config() 

const server = new Server()

server.execute()