import React from 'react'; 
import style from './Card.module.css'; 
// import { deleteDog } from '../../actions';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


export default function Card ({name, image, temperament}) { 
    // const dispatch = useDispatch(); 
    // const allDogs = useSelector((state) => state.dogs);

    // useEffect(() => {
    //     dispatch(deleteDog())
    // },[]) 

    // async function handleDeleteDog  (id) {
    //     await dispatch(deleteDog(id)) 
    //     window.location.reload();
    //     // allDogs = allDogs.filter(d => d.id !== id)
    // }
    
    return(
        <div>
            {/* <button  style={{ backgroundColor: 'red',color: 'white' }} onClick={handleDeleteDog(id)}className="btn btn-sm btn-danger">X</button> */}
            <h3 className={style.title}>{name}</h3>
            <img className={style.image} src={image} alt="Not Found" width='200px' height='250px'></img>
            <h3 className={style.titleTemps}>{temperament}</h3> 
        </div>
    );
};
