import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';

const DisplayPosts = props => {
  const { posts } = props;
  console.log('p', posts); //?? check type

  return (
    <div>
      {posts.map(post => {
        return <Posts post={post} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(DisplayPosts);
