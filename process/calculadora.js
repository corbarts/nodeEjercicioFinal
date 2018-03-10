'use strict';

//con el on establecemos un listener
process.on('message', (msg)=> {
    let resultado = null;
    if (msg.operacion === 'suma') {
        resultado = msg.operando1 + msg.operando2;
        if (msg.operando3 != null) {
            resultado = resultado + msg.operando3;
        }
        if (msg.operando4 != null) {
            resultado = resultado + msg.operando4;
        }
    }
    if (msg.operacion === 'resta') {
        resultado = msg.operando1 - msg.operando2;
        if (msg.operando3 != null) {
            resultado = resultado - msg.operando3;
        }
        if (msg.operando4 != null) {
            resultado = resultado - msg.operando4;
        }
    }
    if (msg.operacion === 'multiplica') {
        resultado = msg.operando1 * msg.operando2;
        if (msg.operando3 != null) {
            resultado = resultado * msg.operando3;
        }
        if (msg.operando4 != null) {
            resultado = resultado * msg.operando4;
        }
    }
    if (msg.operacion === 'division') {
        resultado = msg.operando1 / msg.operando2;
        if (msg.operando3 != null) {
            resultado = resultado / msg.operando3;
        }
        if (msg.operando4 != null) {
            resultado = resultado / msg.operando4;
        }
    }
    process.send({
        'resultado': resultado
    })
   
});
