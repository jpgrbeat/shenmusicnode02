var express = require('express');
var blogPostRouter = express.Router();

var routes = (BlogPost)=>{
  var blogPostController = require('../controllers/blogPost.controller')(BlogPost)
  blogPostRouter.route('/')
  .post(blogPostController.post)
  .get(blogPostController.get)

  return blogPostRouter;
}
module.exports = routes;
