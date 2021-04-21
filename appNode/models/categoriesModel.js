const mongoose = require("../bin/mongodb");

const categoriesSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    }
})

module.exports = mongoose.model("categories", categoriesSchema);