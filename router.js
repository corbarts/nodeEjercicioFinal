'use strict';
const express = require('express');

const { getSuma, getResta, getMultiplica, getDivide } = require('./model/model.js') ;

const router = express.Router();

router.get('/', (req, res) => {
    let data = {
        routes: {
            '/suma':  {
                methods: ['GET', 'POST']
            }
        }
    };
    res.json(data);
});

router.post('/suma', (req, res) => {
    //se obtiene el campo body de la request
    let data = req.body;
    /*TODO:
     hay que obtener el proceso hijo que (que se creara en la carpeta process)
     y añadir los eventos para que envie los datos del json de respuesta

    
    */
    req.app.get('child').send(data);
    res.json(data);
});

module.exports = router;

