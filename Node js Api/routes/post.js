//this a route that i created in order to imore in our app.js  
const express = require("express");
//we dont need to give the same esonse i the routes we can just use controlers 
const postController = require('../controllers/post')

const router = express.Router()
const validator = require("../validator")
router.get("/",postController.getPost)
router.post("/post",postController.createPost)

module.exports = router;
