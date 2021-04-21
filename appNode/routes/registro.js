var express = require('express');
var router = express.Router();

const registroController = require('../controllers/registroController');

/* registra un usuario */
router.post('/', registroController.registrarUsuario);

module.exports = router;