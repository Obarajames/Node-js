
exports.getPost = (req,res) => {
    /* res.json({
        post: [
            {title: "first post"},
            {title : "second post"}
        ]
    }); */
    //get post from the data base
    const posts = Post.find().select("_id title body")
    .then(() => {
        res.status(200).json({posts: posts})
    })
    .catch(err => console.log(err) )
};

const post = require("../models/post")

exports.createPost = (req, res) => {
    const post = new Post(req.body); // Assuming "Post" is the mongoose model
  
    /* post.save((err, result) => {
      if (err) {
        return res.status(404).json({
          error: err
        });
      }
  
      res.status(200).json({
        post: result
      });
    }); */
    post.save().then((result) => {
        res.json({
          post: result
        });
      });
      
  };

//as we building a api we return json format
//it is like object res.json({}) instead of res.send