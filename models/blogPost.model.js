var mongoose = require('mongoose');

var blogPostModel = new mongoose.Schema({
  topic:{  type: String},
  author:{ type: String},
  post: {type: Object}
});

module.exports = mongoose.model('BlogPost', blogPostModel);
