import React from 'react';
import{ NavLink} from 'react-router-dom'


import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDogs} from '../actions';


export default function Home (){ 
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    useEffect(() =>{
        dispatch(getDogs())
    },[])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    return ( 
        <div>
            <NavLink to = '/dogs'>Create Doggie</NavLink>
            <button onClick={e=>{handleClick(e)}}>Reload all dogs</button>
            <div>
                
            </div>
        </div>
        
        
    )
}