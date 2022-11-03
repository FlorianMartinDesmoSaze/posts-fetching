import './App.css';
import React from 'react';
import Posts from './Posts';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Movies from './Movies'
// import AsyncPosts from './AsyncPosts'
import Home from './Home'
import Post from './Post'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div> */}
        <nav className="nav-bar">
          <Link to="/" className="logo">Streameo</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
