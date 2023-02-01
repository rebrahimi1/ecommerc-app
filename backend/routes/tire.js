require('dotenv').config();
const express = require("express");
const router = express.Router();
const path = require('path');
const uuid = require('uuid').v4;
const multer = require('multer');
const Aws = require('aws-sdk');
const multerS3 = require("multer-s3");
const { Profile, Product, Image } = require('../models/index');

const s3 = new Aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.S3_BUCKET_REGION,
});

const upload = multer({
    storage: multerS3({
        s3,
        acl: 'public-read',
        bucket: 'datingappimages',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
        }
    })
});


router.route('/upload/image').post(upload.array('item', 1), async (req, res) => {
    console.log(req.files[0].location);
    let image = new Image({
        file: req.files[0].location
    });
    image.save();
    res.json({data: image});
});


router.route('/new/tire').post(upload.array('item', 1), async (req, res) => {
    console.log(req.body.img.data.file);
    let tire = new Product({
        brand: req.body.brand,
        size: req.body.size,
        price: req.body.price,
        car: req.body.car,
        description: req.body.description,
        img: req.body.img.data.file
    });
    tire.save();
    res.json({data: tire});
});

router.route('/remove/tire').post(async (req, res) => {
    let product = await Product.findOneAndDelete({_id: req.body.id}).exec();
    res.json({data: product});
});

router.route('/tires').get(async (req, res) => {
    let tires = await Product.find({}).exec();
    res.json({data: tires});
});

router.route('/tire/:tireId').get(async (req, res) => {
    let tires = await Product.findById(req.params.tireId).exec();
    res.json({data: tires});
});

router.route('/tire/details').post(async (req, res) => {
    let queries = {};
    if (req.body.brand) {
        queries.brand = req.body.brand;
    }
    if (req.body.size) {
        queries.size = req.body.size;
    }
    if (req.body.model) {
        queries.model = req.body.model;
    }

    let product = await Product.find(queries).exec();
    res.json({data: product});

});

router.route("/msg").post(async (req, res) => {
    console.log(req.decoded.user);
    res.json({data: req.body.msg});
});



module.exports = router;