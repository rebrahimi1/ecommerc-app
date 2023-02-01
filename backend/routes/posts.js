const express = require('express');
const multer = require('multer');
const router = express.Router();
const Post = require('../models/post');


const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
  };
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
      const name = file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  });


router.post("/api/posts", (req, res, next) => {
    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    console.log(post);
    res.status(201).json({
        message: 'post added',
        postId: post._id,
        post: post
    });
});

router.get('/api/posts', async (req, res) => {
    let posts = await Post.find({}).exec();
    res.json({message: "posts fetched succ", posts: posts});
});

router.delete("/api/posts/:id", async (req, res) => {
    console.log(req.params.id);
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({success: true, message: 'post deleted'});
});

router.put("/api/posts/:id", async (req, res) => {
    console.log(req.params.id);
    let post = await Post.findById(req.params.id).exec();
    post.title = req.body.title;
    post.content = req.body.content;
    post.save();
    console.log(post);
    res.json({
        postId: post._id
    });
});

router.get("/api/posts/:id", async (req, res) => {
    let post = await Post.findById(req.params.id).exec();
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({message: 'Post not found'});
    }
});


// router.post('/api/posts', multer({storage: storage}).single("image"), async (req, res) => {
//     let url = req.protocol + "://" +req.get("host");
//     let post = new Post({
//         title: req.body.title,
//         content: req.body.content,
//         imagePath: url + "/images/" + req.file.filename
//     });
//     post.save();
//     res.status(201).json({
//         message: "Post added",
//         post: {
//             ...post,
//             postId: post._id
//         }
//     });
// });



module.exports = router;