import React from 'react'
import Mountains from "./mountains.webp"


const Home = () => {
    return (
        <div className="home div-component">
            <h2 className="home-title">Welcome to freedom city</h2>
            {/* <img src="http://via.placeholder.com/1200x200" alt="placeholder"></img> */}
            <img className="img-home" src={Mountains} alt="icy pines"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid maiores reprehenderit minus culpa saepe debitis, impedit a quisquam blanditiis pariatur quasi rerum assumenda repellat praesentium magni numquam. Reprehenderit optio rem vero, eum voluptatum quibusdam blanditiis at nesciunt, consectetur atque soluta, dolorem exercitationem magni temporibus officia explicabo quaerat iste natus ex corrupti.</p>
            <a href="#"><button className="btn-test btn-std">click & hold</button></a>
        </div>
    );
}

export default Home;