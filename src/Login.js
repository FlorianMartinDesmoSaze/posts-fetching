import React from 'react';
import WorkInProgress from './work-in-progress-01.jpg';

const Login = () => {
    return (
        <div className="login div-component">
            <img src={WorkInProgress} alt="page under contruction" />
            <a href="/"><button className="btn btn-std">Back to main page</button></a>
        </div>
    );
}

export default Login;