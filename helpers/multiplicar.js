
const fs = require('fs');
const colors = require('colors');

const crearTablaMultiplicar = async( numero = 2, listar = false, hasta = 10 ) => {

    // imprimir tabla del x numoer
    let salida = '';
    try {
        
        for( let i = 1; i <= hasta; i++) {

            const resultado = numero * i;
    
            salida += `${numero} x ${i} = ${resultado}\n`;
        }
        
        fs.writeFileSync( `./salida/tabla-${ numero }.txt`, salida);
        
        if( listar ) {
            console.log('=========================='.green);
            console.log(`       Tabla del: ${ numero }`);
            console.log('=========================='.green);
            console.log( salida );
        }

        return `Tabla-${ numero }.txt`;

    } catch (error) {
        throw error
    }
    
}


module.exports = {
    crearTablaMultiplicar
}