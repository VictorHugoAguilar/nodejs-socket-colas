const express = require('express');

const http = require('http');

const path = require('path');

const app = express();

// importamos los socket
const socketIO = require('socket.io');

// montamos el servidor con la configuracion de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// inicializamos el socket io (io = es la comunicacion del backend)
let io = socketIO(server);

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});