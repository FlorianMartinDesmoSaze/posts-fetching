import React from 'react'
import Mountains from "./mountains.webp"


const Home = () => {
    return (
        <div className="home">
            <h2 className="home-title">Welcome to freedom city</h2>
            {/* <img src="http://via.placeholder.com/1200x200" alt="placeholder"></img> */}
            <img src={Mountains} alt="icy pines"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid maiores reprehenderit minus culpa saepe debitis, impedit a quisquam blanditiis pariatur quasi rerum assumenda repellat praesentium magni numquam. Reprehenderit optio rem vero, eum voluptatum quibusdam blanditiis at nesciunt, consectetur atque soluta, dolorem exercitationem magni temporibus officia explicabo quaerat iste natus ex corrupti.</p>
            <button className="btn-test">click & hold</button>
        </div>
    );
}

export default Home;