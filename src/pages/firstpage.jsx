import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Firstpage = () => {
    
   

    return (
        <div className='main'>
            <h1>NOTES</h1>
            <img src='src\pages\notes.png' alt='Notes'  width={590} height={700}/>
          
            <br/>
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
