const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'posts',
    timestamps: true,
  },
);

module.exports = mongoose.model('Post', Post);
