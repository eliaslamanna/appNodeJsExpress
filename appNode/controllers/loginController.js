const usuariosModel = require("../models/usuariosModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    loggearUsuario: (req, res, next) => {
        try{
            usuariosModel.findOne({name:req.body.name}).then( usuario => {
                if(bcrypt.compareSync(req.body.password, usuario.password)) {
                    const token = jwt.sign({userId:usuario._id}, req.app.get("SecretKey"));
                    res.json({token:token});
                }
            })
        } catch(e) {
            next(e);
        }
    }
}