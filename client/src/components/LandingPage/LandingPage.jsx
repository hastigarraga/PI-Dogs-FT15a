import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import style from './landingPage.module.css'; 
import Footer from '../Footer/Footer'





const LandingPage = () => { 
    return ( 
        <div>
            <div className = {style.bar}>
                <h1>Henry's dogs App</h1>
            </div> 
            <div className={style.textDiv} >
            <p >Dogs make our lives better!!</p> 
            <div className={style.ttDiv}>
                <h6> learn everything about them..</h6><br/>

            </div>
            <div>
                <NavLink to ='/home'>
                        <button className={style.third} >Join!</button>
                </NavLink>
            </div>
            </div>  
            {/* <div>
                <Footer/>
            </div> */}

        </div>
    )
}; 


export default LandingPage;