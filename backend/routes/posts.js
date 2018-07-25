const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require('../middleware/file')

const postController = require('../controllers/post')

const router = express.Router();


router.post("", checkAuth, extractFile, postController.createPost);

router.put( "/:id", checkAuth, extractFile, postController.updatePost);

router.get("", postController.fetchPosts);

router.get("/:id", postController.fetchPost);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
