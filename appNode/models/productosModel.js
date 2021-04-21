const mongoose = require("../bin/mongodb");

const productosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    sku: {
        type: String,
        unique: true,
        minlength: 6,
        maxlength: 8,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 1
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    }
})

module.exports = mongoose.model("productos", productosSchema);