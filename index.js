const Server = require('./models/server.js')
require('dotenv').config() 

const server = new Server()

server.execute()