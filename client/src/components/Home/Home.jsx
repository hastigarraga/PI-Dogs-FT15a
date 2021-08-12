import React from 'react';
import{ NavLink} from 'react-router-dom'


import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDogs} from '../../actions';
import Card from '../Card/Card';


export default function Home (){ 
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    useEffect(() =>{
        dispatch(getDogs())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    return ( 
        <div>
            <NavLink to = '/dogs'>Create Doggie</NavLink>
            <button onClick={e=>{handleClick(e)}}>Reload all dogs</button>
            <div>
                <select>
                    <option value='Asc'>Asc</option>
                    <option value='Desc'>Desc</option>
                </select>
            </div>
            <div>
                {allDogs?.map((el) =>{
                    return(
                        <div> 
                            <NavLink to ={ '/home' + el.id }>
                            <Card name = {el.name} 
                                image = {el.image}
                                temperament = {el.temperament}
                                key = {el.id}
                            />
                            </NavLink>

                        </div>
                    )
            })}
                
            </div>
        </div>
        
        
    )
}