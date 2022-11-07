import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="logo">Streameo</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/#">Users</Link>
                <Link to="/#">About</Link>
                <Link to="/#">Login</Link>
            </div>
        </nav>
    );
}

export default Nav;