import './App.css';
import React from 'react';
import Posts from './Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Movies from './Movies'
// import AsyncPosts from './AsyncPosts'
import Home from './Home'
import Post from './Post'
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="anim"></div>
      <BrowserRouter>
      {/* <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div> */}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
