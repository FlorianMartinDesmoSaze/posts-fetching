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
import Create from './Create'
import JobList from './JobList';
import About from './About';
import Login from './Login';
import CGU from './CGU';
import DisplayName from './DisplayName';

function App() {
  return (
    <div className="App">
      {/* testing sticky element for bg */}
      {/* <div className="main-container">
        <div className="anim">
          <div className="anim-sticky"></div>
        </div>
      </div> */}
      <BrowserRouter>
        {/* <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path='/create' element={<Create />} />
          <Route path='/joblist' element={<JobList />} />
          <Route path='/about' element={<About />} />
          <Route path='/displayname' element={<DisplayName />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cgu' element={<CGU />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
