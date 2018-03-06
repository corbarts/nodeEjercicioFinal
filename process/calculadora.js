'use strict';
//const { saveTweet} = require('./model.js');


 function onSuma(data) {
    
 }

//con el on establecemos un listener
process.on('message', (msg)=> {
    let resultado = null;
    if (msg.operacion === 'suma') {
        resultado = msg.operando1 + msg.operando2;
    }
    if (msg.operacion === 'resta') {
        resultado = msg.operando1 - msg.operando2;
    }
    if (msg.operacion === 'multiplica') {
        resultado = msg.operando1 * msg.operando2;
    }
    if (msg.operacion === 'division') {
        resultado = msg.operando1 / msg.operando2;
    }
    process.send({
        'resultado': resultado
    })
});
