const express = require("express");
const router = express.Router();

const { Profile, Product, ShoppingCart, Purchase } = require('../models/index');
const cartHelper = require('../helpers/cartHelper');

router.route('/get/carts').get(async (req, res) => {
    let product;
    product = await ShoppingCart.findOne({userId: req.user.id})
    .populate({ path: 'items.itemId', model: Product, select: 'brand size price car img'})
    .exec();

    // if (product.length === 0) {
    //     prodct = 
    // }


    res.json({data: product});

});

router.route('/add/item').post(async (req, res) => {

    let checkCart = await ShoppingCart.findOne({userId: req.user.id}).exec();
    let total;
    let result;
    if(checkCart.items.length > 0) {
        checkCart.items.push({itemId: req.body.itemId, price: req.body.price, qty: req.body.qty});
        total = await cartHelper.calculateTotal(checkCart);
        checkCart.total = total;
        checkCart.save();
        result = checkCart;
    } else {
        let cart = new ShoppingCart({
            userId: req.user.id
        });
        cart.items.push({itemId: req.body.itemId, price: req.body.price, qty: req.body.qty});
        total = await cartHelper.calculateTotal(cart);
        cart.total = total;
        cart.save();
        result = cart;
    }


    res.json({data: result});

});

router.route('/update/qty').post(async (req, res) => {
    let cart = await ShoppingCart.findOne({userId: req.user.id}).exec();
    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].itemId === req.body.itemId) {
            cart.items[i].qty = req.body.qty;
        }
    }
    let total = await cartHelper.calculateTotal(cart);
    cart.total = total;
    cart.save();
    res.json({data: cart});
});

router.route('/remove/item').post(async (req, res) => {

    await ShoppingCart.findOneAndUpdate({userId: req.user.id}, {$pull: {items: {itemId: req.body.itemId}}}).exec();
    let cart = await ShoppingCart.findOne({userId: req.user.id}).exec();
    let total = await cartHelper.calculateTotal(cart);
    cart.total = total;
    cart.save();
    res.json({data: cart});

});

router.route('/payment').get(async (req, res) => {
    let product;
    product = await ShoppingCart.findOne({userId: req.user.id})
    .populate({ path: 'items.itemId', model: Product, select: 'brand size price car img'})
    .exec();

    // res.render('payment', {items: product, total: product.total});
    res.json({data: product});
});

router.route('/purchase').post(async (req, res) => {

    let cart = await ShoppingCart.findOne({userId: req.user.id}).exec();


    let pay = new Purchase({
        total: cart.total,
        userId: req.user.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        creditNumber: req.body.creditNumber,
        month: req.body.month,
        year: req.body.year,
        code: req.body.code,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipCode: req.body.zipCode,
        items: cart.items,
        pdate: Date.now
    });

    pay.save();

    res.json({data: pay});

});



module.exports = router;


