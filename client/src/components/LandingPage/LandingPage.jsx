import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import style from './landingPage.module.css';





const LandingPage = () => { 
    return (
        <div className = {style.bar}>
            <h1>Henry's dogs App</h1>
            <NavLink to ='/home'>
                <button className={style.btn}>Home</button>
            </NavLink>
        </div>
    )
}; 


export default LandingPage;