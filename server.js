'use strict';

//Se importa solo el fork que está contenido en el paquete child_process
const { fork } = require('child_process');
//Se usa para el manejo de las peticiones http
const express = require('express');
const bodyParse = require('body-parser');

//Se importar el fichero route que es el que contiene las definiciones de la 
// url para las peticiones http
const router = require('./router.js');

//definimos el puerto que se va a escuchar
const port = 8080;
//Archivo que será nuestro proceso hijo
const childUrl = 'process.js';

//Se crea la variable de aplicacion
const app = express();
//creamos el proceso hijo.
const child = fork(childUrl);

app.set('child', child);

app.use(bodyParse.json());
//Indicamos la url donde se va a atender las peticiones en nuestro servidor.
app.use('/api/v1',router);

app.listen(port);