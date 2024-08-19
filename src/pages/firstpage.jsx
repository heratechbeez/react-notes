//import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const Firstpage = () => {
    return (
        <div className='main'>
        <div className="left-container">
            <h1>NOTES</h1>
            <div className="button-container">
                <Link to="login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
        <img src='src/pages/notes.png' alt='Notes' width={400} height={650} />
    </div>
    
    );
};

export default Firstpage;