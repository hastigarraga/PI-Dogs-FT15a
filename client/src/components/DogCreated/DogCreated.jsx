import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {postDogs,getTemperaments} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux' 
import {useState, useEffect} from 'react'; 
import style from './DogCreated.module.css'


export default function DogCreated (){ 
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments) 

    const [input,setInput] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: []

    })

    useEffect(() => {
        dispatch(getTemperaments());
        
    },[]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };
    function handleCheck(e) {
        if(e.target.checked){
            setInput({
                ...input,
                temperaments: e.target.value

            })
        }
    }


    return (
        <div>
            <Link to='/home'><button className={style.back} >Back</button></Link><br/><br/>
            <form >
                <fieldset>
                    <legend className={style.legend} >Create your doggie</legend>
                        <div>
                            {/* <label>Name:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Name'
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={handleChange}>   

                            </input>
                        </div>
                        <div>
                            {/* <label>Height:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Height'
                                type='text'
                                name='height'
                                value={input.height}
                                onChange={handleChange}>   

                            </input>
                        </div>
                        <div>
                            {/* <label>Weight:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Weight'
                                type='text'
                                name='weight'
                                value={input.weight}
                                onChange={handleChange}>   

                            </input>
                        </div>
                        <div>
                            {/* <label>Life Span:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Life Span'
                                type='text'
                                name='life_span'
                                value={input.life_span}
                                onChange={handleChange}>   

                            </input>
                        </div>
                        <div>
                            {/* <label>Image:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Image'
                                type='text'
                                name='image'
                                value={input.image}
                                onChange={handleChange}>   

                            </input>
                        </div>
                        <div className={style.content}> 
                            <div className={style.temptContainer}>
                                {
                                        temperaments?.map((e) => (
                                            <li  
                                            value={e.id} key={e.id}><input 
                                            type='checkbox'
                                            name='temperaments'
                                            value={input.temperaments}
                                            onChange={handleCheck}>             
                                        </input>
                                            {e.name}
                                            </li>
                                        ))
                                    }
                            </div>
                            

                        
                            
                        </div>
                        <button className={style.input} type= "submit" name= "submit" >Create</button>

                </fieldset>





            </form>
        </div>
    )

}