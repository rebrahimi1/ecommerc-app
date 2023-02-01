const mongoose = require('mongoose');


const PaymentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'ProfileSchema'},
    total: Number,
    name: String,
    email: String,
    phone: Number,
    creditNumber: Number,
    month: String,
    year: String,
    code: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    pdate: Date,
    items: {
        default: [],
        type: Array,
        itemId: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductSchema'},
        qty: Number
    }
});
  
module.exports = mongoose.model('Purchase', PaymentSchema);
