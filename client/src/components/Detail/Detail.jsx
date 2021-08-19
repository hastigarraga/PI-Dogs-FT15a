import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { dogDetail } from "../../actions/index" 
import style from './Detail.module.css'

export default function Detail (props) {
    const dispatch = useDispatch();

    // const [loading, setLoading] = useState(false)
    const {id} = props.match.params;
    
    useEffect(() => {
        dispatch(dogDetail(id))
    }, [id,dispatch]);
    
    const myDog = useSelector((state) => state.detail);


    return (
        <div className={style.contenedor}>
            {
            myDog.length > 0? 
                <div>
                    <h2 className={style.title}>{myDog[0].name}</h2>
                    <img className={style.image} src={myDog[0].image? myDog[0].image : myDog[0].imagen} alt="Not found"></img>
                    <p className={style.text}> Height: {myDog[0].height} m</p>
                        <p className={style.text}> Weight: {myDog[0].weight} kg</p>
                        <p className={style.text}> Life Span: {myDog[0].life_span}</p>
                        <p className={style.text}>{myDog?.temperament}</p>
                    <h4 className={style.text}>Temperaments: {!myDog[0].createInDb ? myDog[0].temperament + ' ': myDog[0].temperaments.map(t => t.name + (' ')) }</h4>
                </div> : 
        <h2>Loading...</h2>
        } 
        <div>
            <Link to= '/home'><button className={style.back} >Back</button></Link>
        </div>
        </div>
        
    )
};
