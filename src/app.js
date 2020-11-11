
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// iniciarlizar la app

const app = express();

// Configuración.
const port = process.env.PORT || 3000
app.set('port', process.env.PORT|| port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/entries.routes'))
// 404 errores 
app.use((req, res) => {
    res.status(404).render('404')
});

// Arrancar la app.
app.listen(port, (req, res)  => {
    console.log(`El puerto está corriendo en el ${port}`)
})