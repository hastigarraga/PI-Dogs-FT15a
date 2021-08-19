import React from 'react';
import{ NavLink, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDogs, byOrder, byOrderWeight, filterDogsCreated } from '../../actions';
import Card from '../Card/Card'; 
import Paged from '../Paged/Paged';
import style from './Home.module.css'; 
import SearchBar from '../SearchBar/SearchBar'



export default function Home (){ 
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);
    const [currentPage , setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [dogsPage, setDogPage] = useState(9); 
    const indexLastDog = currentPage * dogsPage;
    const indexFirstDog = indexLastDog - dogsPage; 
    const currentDog = allDogs.slice(indexFirstDog, indexLastDog);


    const pagedTotal = (numPage) => {
        setCurrentPage(numPage);
    };

    useEffect(() =>{
        dispatch(getDogs()) 
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    };

    function handlerFilter(e) {
        dispatch(filterDogsCreated(e.target.value));
    }
    

    function handleOrder(e) {
        e.preventDefault();
        dispatch(byOrder(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
        
    };
    function handleOrderByWeight(e) {
        e.preventDefault();
        dispatch(byOrderWeight(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }
    
    return ( 
        <div>
            <div className={style.created} >
                <Link style={{ textDecoration: 'none'}} to = '/dog'>Create Doggie</Link>            
            </div>
            <div>
                <button 
                className={style.reload}
                onChange={e=>handleClick(e)}>
                Reload all dogs
                </button><br/>               
                <select 
                onClick={e=>handlerFilter(e)} 
                className={style.temptContainer}>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                    {/* <option value='Breed'>Api</option> */}
                </select>
                <SearchBar/>            
                <button className={style.button} onClick={(e) => handleOrder(e)} value="Asc">A-Z</button>
                <button className={style.button} onClick={(e) => handleOrder(e)} value='Desc'>Z-A</button>
                <button className={style.button} onClick={(e) => handleOrderByWeight(e)} value= 'Weight 1'>SMALL</button>
                <button className={style.button} onClick={(e) => handleOrderByWeight(e)} value= 'Weight 2'>BIG</button>
            </div>       
            <div className={style.direccion}>
                {currentDog?.map((el) =>{
                    return(
                        <div className={style.contenedor} > 
                            <NavLink style={{ textDecoration: 'none' }} to ={ '/home' + el.id }>
                            <Card name  = {el.name} 
                                image = {el.image? el.image : el.imagen}
                                temperament = {el.temperament? el.temperament : el.temperaments && el.temperaments.map(t =>t.name.concat(" "))}
                                key = {el.id}/>
                            </NavLink>
                        </div>
                    )
            })}                
            </div>
            <div className={style.pagination}>
                <Paged
                    dogsPage = {dogsPage}
                    allDogs = {allDogs.length}
                    pagedTotal = {pagedTotal}
                />
            </div>
            <div>
            <Link to='/'><button className={style.back} >Back</button></Link>
            </div>
        </div> 
        
        
    )
} 

