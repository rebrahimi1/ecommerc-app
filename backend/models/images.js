const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    file: String
})

module.exports = mongoose.model('Image', ImageSchema);
