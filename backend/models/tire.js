const mongoose = require('mongoose');

const TireSchema = new mongoose.Schema({
    brand: String,
    size: String,
    price: Number,
    car: String,
    description: String,
    img: String
});

module.exports = mongoose.model('Product', TireSchema);
