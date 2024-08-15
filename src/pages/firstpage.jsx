import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Firstpage = () => {
    
   

    return (
        <div className='main'>
            <h1>NOTES</h1>
            <img src='src\pages\notes.png' alt='Notes'  width={90} height={100}/>
            
              
            <Link to="login">  
            <button>
              Login
            </button>
            </Link> 
            <Link to ="/register">    
            <button>
                Register
            </button>
            </Link>
        </div>
       
    );
};

export default Firstpage;
