const { io } = require('../server');

io.on('connection', (cliente => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido'
    })

    // para saber si un usuario se desconecta de nuestro servidor
    cliente.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // escuchar el cliente

    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);

        /*
        if (mensaje.usuario) {

            callback({ resp: 'TODO SALIO BIEN' });

        } else {

            callback({ resp: 'TODO SALIO MAL' });
        }
        */
    });

}));