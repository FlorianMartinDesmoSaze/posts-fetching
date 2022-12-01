import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="logo">streameo</Link>
            {/* <div className="trash"><p>hello</p></div> */}
            <div className="nav-links">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/posts">Posts</Link>
                <Link className="nav-item" to="/create">Create</Link>
                <Link className="nav-item" to="/shop">Shop</Link>
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/displayname">Dsiplay Name</Link>
                <Link className="nav-item" to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Nav;