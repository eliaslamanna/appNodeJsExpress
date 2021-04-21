const mongoose = require("../bin/mongodb");
const bcrypt = require("bcrypt");

const usuariosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    }
})
usuariosSchema.pre("save",function(next) {
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model("usuarios", usuariosSchema);