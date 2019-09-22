import React, { Component } from 'react';

class AddPost extends Component {
  state = {
    title: ' ',
    newPost: ' ',
  };

  handlePostInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePostSubmit = event => {
    event.prevent.Default();
  };

  render() {
    const { title, newPost } = this.state;
    return (
      <div>
        <form onSubmit={this.handlePostSubmit}>
          <div>
            <input
              type='text'
              placeholder='Title'
              name='title'
              onChange={this.handlePostInput}
              value={title}
            />
          </div>
          <div>
            <textarea
              cols='50'
              rows='10'
              placeholder='newPost'
              name='newPost'
              onChange={this.handlePostInput}
              value={newPost}
            />
          </div>
          <div>
            <button type='submit'>Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
