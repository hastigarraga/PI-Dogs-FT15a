import React from 'react'; 
import { NavLink } from 'react-router-dom';




const LandingPage = () => { 
    return (
        <div >
            <NavLink to ='/home'>
                <button>Get In</button>
            </NavLink>
        </div>
    )
}; 


export default LandingPage;