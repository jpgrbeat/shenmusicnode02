var express = require('express');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');
    cors = require('cors')
    helmet = require('helmet')

var db = mongoose.connect('mongodb://localhost/shenmusicAPI')

var blogPost = require('./models/blogPost.model');
    app = express();
    port = process.env.PORT || 4500;


var blogPostRouter = require('./routes/blogPost.routes')(blogPost);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/blogPost', blogPostRouter);
app.use(helmet())
app.use(cors())


app.get('/',(req,res)=>{
  res.send('api started')
});


app.listen(port,()=>{
  console.log('listening on port ' + port);
});
