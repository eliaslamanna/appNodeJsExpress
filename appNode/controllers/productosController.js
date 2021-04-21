const productosModel = require("../models/productosModel");
const categoriaModel = require("../models/categoriesModel");

module.exports = {
    getAll : async (req, res, next) => {
        try{
            const productos = await productosModel.find({}).populate("categoria");
            res.json(productos);
        } catch(e) {
            next(e);
        }
    },
    getById : async (req, res, next) => {
        try{
            const producto = await productosModel.findById(req.params.id);
            res.json(producto)
        } catch(e) {
            next(e);
        }
    },
    create : (req, res, next) => {
        try{
            const producto = new productosModel({
                name: req.body.name,
                sku: req.body.sku,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                categoria: req.body.categoria
            })
            producto.save();
            res.json(producto);
        } catch(e) {
            next(e);
        }
    },
    delete : (req, res, next) => {
        try{
            productosModel.deleteOne({ _id: req.params.id}).then(producto => {
                res.json(producto)
            })
        } catch(e) {
            next(e);
        }
    },
    update : (req, res, next) => {
        try{
            productosModel.update({ _id: req.params.id}, req.body, {multi: false}).then(producto => {
                res.json(producto);
            })
        } catch(e) {
            next(e);
        }
    }
}