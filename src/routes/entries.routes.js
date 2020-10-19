const {Router} = require('express');
const router = Router();

// importar las funciones del controlador
const {renderIndex,renderNewEntries,createNewEntries} = require('../controllers/entries.controller');

// definiendo Ruta principal
router.get('/', renderIndex);
// Definiendo la ruta de nuevas entredas
router.get('/new-entry', renderNewEntries); // envío una petición por get.
router.post('/new-entry', createNewEntries); // recibo una petición por post





module.exports = router;