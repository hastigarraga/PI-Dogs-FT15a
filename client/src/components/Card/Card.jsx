import React from 'react'; 
import style from './Card.module.css';



export default function Card ({name, image, temperament}) {
    return(
        <div>
            <h3 className={style.title}>{name}</h3>
            <img className={style.image} src={image} alt="Not Found" width='200px' height='250px'></img>
            <h3 className={style.titleTemps}>{temperament}</h3>
        </div>
    );
};
