const express = require('express');

// importamos los socket
const socketIO = require('socket.io');

const http = require('http');

const path = require('path');

const app = express();

// montamos el servidor con la configuracion de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// inicializamos el socket io (io = es la comunicacion del backend)
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});