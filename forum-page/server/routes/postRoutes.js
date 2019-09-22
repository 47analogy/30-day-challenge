const express = require('express');

const PostRoutes = express.Router();

// Require Post model in our routes module
const Post = require('../models/postsModel');

// add post
PostRoutes.route('/posts').post((req, res) => {
  const post = new Post(req.body);
  post
    .save()
    .then(savePost => {
      res.status(200).json(savePost);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// get posts
PostRoutes.route('/posts').get((req, res) => {
  Post.find()
    .then(posts => {
      res.status(200).json({ posts });
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error getting all posts',
      });
    });
});

module.exports = PostRoutes;
