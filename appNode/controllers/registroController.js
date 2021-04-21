const usuariosModel = require("../models/usuariosModel");

module.exports = {
    registrarUsuario: (req, res, next) => {
        try{
            const usuario = new usuariosModel({
                name: req.body.name,
                password: req.body.password
            })
            usuario.save();
            res.json(usuario);
        } catch(e) {
            next(e);
        }
    }
}