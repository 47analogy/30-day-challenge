import { ADD_POST, GET_POSTS } from '../actions/actionsTypes';

const initialState = {
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: action.payload };
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
