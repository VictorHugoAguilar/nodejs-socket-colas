var socket = io();

/** 
 * .on para escuchar
 */

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

/** 
 * .emit para Enviar informacion
 */

socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {

    console.log('respuesta server: ', resp)
});


/** 
 * escuchar informacion
 */

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});