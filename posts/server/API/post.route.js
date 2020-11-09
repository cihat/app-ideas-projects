const express = require('express');
const postRoutes = express.Router();

//Require Post model in our routes module
let Post = require('./post.model');

//DEfined store route
postRoutes.route('/add').post((req, res) => {
  let post = new Post(req.body);
  post.save()
    .then(() => {
      res.status(200).json({ 'business': 'business in added successfully' });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

//Defined get data(index or listing) route
postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => {
    if (err) res.json(err);
    else res.json(posts);
  })
});

//Defined update route
postRoutes.route('update/:id').post((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) res.status(404).send('data is not found');
    else {
      post.title = req.body.title;
      post.body = req.body.body;
      post.save().then(() => {
        res.json('Update complete');
      })
        .catch(() => {
          res.status(404).send('unable to update the database');
        });
    }
  });
});

//Defined delete | remove | destroy router
postRoutes.route('delete/:id').delete((req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }, (err) => {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = postRoutes;