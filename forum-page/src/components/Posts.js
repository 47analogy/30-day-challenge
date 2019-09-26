import React from 'react';

const Posts = props => {
  const { title, newPost } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{newPost}</p>
    </div>
  );
};

export default Posts;
