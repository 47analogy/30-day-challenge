import { ADD_POST, GET_POSTS } from './actionsTypes';
import axios from 'axios';

const URL = 'http://localhost:5000/posts';

export const addPost = (title, newPost) => {
  return dispatch => {
    dispatch({ type: ADD_POST });
    axios
      .post(`${URL}/posts`, {
        title,
        newPost,
      })
      .then(res => {
        dispatch({
          type: ADD_POST,
          payload: {
            _id: res._id,
            title: res.title,
            newPost: res.newPost,
          },
        });
      })
      .catch(err => {
        dispatch({ type: err });
      });
  };
};

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: GET_POSTS });
    axios
      .get(`${URL}`)
      .then(res => {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({ type: err });
      });
  };
};
