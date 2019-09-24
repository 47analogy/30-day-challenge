import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './App'
import './index.css'
import rootReducer from './reducers'
import { getPosts } from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(getPosts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
