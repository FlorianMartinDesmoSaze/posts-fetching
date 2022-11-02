import './App.css';
import React from 'react';
import Posts from './Posts';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Movies from './Movies'
import AsyncPosts from './AsyncPosts'
import Home from './Home'
import Post from './Post'

function App() {
  return (
    <div className="App">
      <h2>Latest articles</h2>
      <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
