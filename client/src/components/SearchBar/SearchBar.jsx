import React from 'react';
import {useState} from 'react'; 
import {useDispatch} from 'react-redux'; 
import { getNameDogs } from '../../actions'; 
import style from '../SearchBar/SearchBar.module.css'



export default function SearchBar() {
    const dispatch = useDispatch(); 
    const [name, setName] = useState(""); 

    function handleInputChange (e){
        e.preventDefault();
        setName(e.target.value)
    };
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameDogs(name));
        setName("");
    }

    return (
        <div class="input-group">
        <div class="form-outline" style={{marginTop:'-40px'}}>
          <input type="search" id="form1" class="form-control"  onChange={(e) => handleInputChange(e)} />
         
          <button 
            className={style.button}
            type="submit"
            onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
        
      </div>
        
        

    )






}