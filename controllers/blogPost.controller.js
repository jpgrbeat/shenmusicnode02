var blogPostController = (BlogPost)=>{
  var post = (req,res)=>{
    var blogPost = new BlogPost(req.body);
    blogPost.save();
    res.status(200).send(blogPost);
  }
  var get = (req,res)=>{
    var query = [];
    if(req.query.topic){
      query.topic = req.query.topic;
    }else if (req.query.author) {
      query.author = req.query.author;
    }
    BlogPost.find(query, (err,blogPosts)=>{
      if(err){
        res.status(500).send(err)
      }else{
        res.json(blogPosts)
      }
    })
  }
  return {
    post: post,
    get : get
  }
}

module.exports = blogPostController;
