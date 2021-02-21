const { crearTablaMultiplicar } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


crearTablaMultiplicar( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, ' creado.'))
    .catch( err => console.log(err));

