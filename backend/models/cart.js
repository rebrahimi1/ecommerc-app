const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'ProfileSchema'},
    items: {
        default: [],
        type: Array,
        itemId: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductSchema'},
        qty: Number,
        price: Number,
    },
    total: Number
});



module.exports = mongoose.model("ShoppingCart", CartSchema);

