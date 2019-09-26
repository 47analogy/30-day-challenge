import React from 'react';
import './App.css';
import AddPost from './components/AddPost';
import DisplayPosts from './components/DisplayPosts';

function App() {
  return (
    <div className='App'>
      <AddPost />
      <DisplayPosts />
    </div>
  );
}

export default App;
