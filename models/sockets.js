class Sockets {
    constructor(io) {
        this.io = io;

        this.socketEvents()
    }


    socketEvents() {
        this.io.on('connection', (socket) => {

            socket.on('mensaje-cliente', (data) => {
                console.log(data)

                this.io.emit('mensaje-desde-server', data)
            })

        });
    }
}

module.exports = Sockets;