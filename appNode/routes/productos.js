var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');

/* GET all*/
router.get('/', productosController.getAll);

/* GET by id*/
router.get('/:id', productosController.getById);

/* POST */
router.post('/', (req,res,next)=>{req.app.validarUser(req,res,next)}, productosController.create);

/* DELETE */
router.delete('/:id', productosController.delete);

/* UPDATE by id*/
router.put('/:id', productosController.update);

module.exports = router;