'use strict';
const express = require('express');

// Lo comento porque no esta implementado
// const { getSuma, getResta, getMultiplica, getDivide } = require('./model/model.js') ;

const router = express.Router();


// Se utiliza los middleware para el endpoint /calculadora/:operacion
router.use('/calculadora/:operacion', operacion_middleware);
router.use('/calculadora/:operacion', parametros_middleware);
router.use('/calculadora/:operacion', tipo_middleware);

router.post('/calculadora/:operacion', (req, res) => {
    //se obtiene el campo body de la request
    let data = req.body;
    let operacion = req.params.operacion

    let child = req.app.get('child');

    // Listener de las respuestas del hijo
    // Solo quiero que se registre una vez, por eso pongo "once"
    child.once('message', (msg) => {
        res.json({
            'resultado': msg.resultado
        });
    })

    child.send({
        'operacion': operacion,
        'operando1': data.operando1,
        'operando2': data.operando2,
    });
});

// Middleware para comprobar los parámetros de la consulta
function parametros_middleware(req, res, next) {
    let data = req.body;
    if (!('operando1' in data) || !('operando2' in data)) {
        res.status(400).json({
            'error': 'Parámetros no validos'
        });
    } else {
        next();
    }
}

// Middleware para comprobar el tipo de los parámetros
function tipo_middleware(req, res, next) {
    let data = req.body;
    if (!(typeof data.operando1 == 'number') || !(typeof data.operando2 == 'number')) {
        res.status(400).json({
            'error': 'Tipo parámetros no valido'
        });
    } else {
        next();
    }
}

// Middleware para comprobar la operacion
function operacion_middleware(req, res, next) {
    let suma = ['suma'];
    let resta = ['resta'];
    let multiplica = ['multiplica'];
    let division = ['division'];
    let operacion = req.params.operacion;

    if ((suma.indexOf(operacion) === -1) && resta.indexOf(operacion) === -1 
        && multiplica.indexOf(operacion) === -1 && division.indexOf(operacion) === -1 ) {
        res.status(400).json({
            'error': 'Operacion no valida'
        });
    } else {
        next();
    }
}

module.exports = router;
