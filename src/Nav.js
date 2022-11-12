import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="logo">Streameo</Link>
            {/* <div className="trash"><p>hello</p></div> */}
            <div className="nav-links">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/posts">Posts</Link>
                <Link className="nav-item" to="/#">Create</Link>
                <Link className="nav-item" to="/#">About</Link>
                <Link className="nav-item" to="/#">Login</Link>
            </div>
        </nav>
    );
}

export default Nav;