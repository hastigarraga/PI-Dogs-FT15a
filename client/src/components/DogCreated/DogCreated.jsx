import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {postDogs,getTemperaments} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux' 
import {useState, useEffect} from 'react'; 
import style from './DogCreated.module.css'


// function validate(input) {
//     let errors = {};
//     if (!input.name) {
//       errors.name = 'Name is required';
//     } 
//     if (!input.height) {
//       errors.height = 'Height is required';
//     } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
//         errors.height = "Add a height range. Example: '10-12'"
//     }
//     if (!input.weight) {
//         errors.weight = "Weight is required";
//     } else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)) {
//         errors.weight = "Add a weight range. Example: '10-12'"
//     }
//     if (!input.life_span) {
//         errors.life_span = "Life Span is required"
//     }
//     if (!input.temperament) {
//         errors.temperament = "Add at least one temperament"
//     }
//     return errors;
// };


export default function DogCreated (){ 
    const dispatch = useDispatch();
    const temperament = useSelector((state) => state.temperament)
    // const [errors, setErrors] = useState({}); 

    // var heightMax ;
    // var heightMin;
    // var weightMax;
    // var weightMin;
    

    const [input,setInput] = useState({
        name: "",
        // heightMax: "",
        // heightMin: "",
        // weightMax: "",
        // weightMin: "",
        // height: `${heightMax} - ${heightMin}`, 
        // weight: `${weightMax} - ${weightMin}`,
        height: "",
        weight: "",
        life_span: "",
        imagen:"",
        temperament: []
    })

    useEffect(() => {
        dispatch(getTemperaments());
        
    },[]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        // setErrors(validate({...input,[e.target.name]: e.target.value}));
    };
    function handleSelect(e) {
            if (input.temperament.includes(e.target.value)) {
                alert("Repeated temperament, choose another");                
                
            }else{
                setInput((temps) => ({
                    ...temps,
                    temperament: [...temps.temperament, e.target.value],
                  }));
                
            }
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input) 
        dispatch(postDogs(input)); 
        alert('Doggie created!');
        setInput({
            name: "",
            // heightMax: "",
            // heightMin: "",
            // weightMax: "",
            // weightMin: "",
            // height: `${heightMax} - ${heightMin}`, 
            // weight: `${weightMax} - ${weightMin}`,
            height: "",
            weight: "",
            life_span: "",
            imagen:"",
            temperament: []


        })
    }

    return (
        <div>
            <form onSubmit ={(e) =>{handleSubmit(e)}}>
                <fieldset>
                    <legend className={style.legend} >Create your doggie</legend>
                        <div>
                            {/* <label>Name:</label> */}
                            <input 
                                key = "name"
                                className={style.input}
                                placeholder='Name'
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={(e) => handleChange(e)}
                                required>                                  

                            {/* {errors.name && (<p className='danger'>{errors.name}</p>)} */}
                            </input>
                        </div>
                        <div>
                            {/* <label>Height:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Height Max - Height Min'
                                type='text'
                                name='height'
                                value={input.height}
                                onChange={(e) => handleChange(e)}
                                required> 
                                {/* {errors.name && (<p className={style.danger}>{errors.name}</p>)} */}
                            </input>
                            {/* <input 
                                className={style.maxmin}
                                placeholder='Height Min'
                                type='text'
                                name='heightMin'
                                value={input.heightMin}
                                onChange={(e) => handleChange(e)}>  
                                {errors.name && (<p className={style.danger}>{errors.name}</p>)} 

                            </input> */}
                        </div>
                        <div>
                            {/* <label>Weight:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Weight Max - Weight Min'
                                type='text'
                                name='weight'
                                value={input.weight}
                                onChange={(e) => handleChange(e)}
                                required>  
                                {/* {errors.name && (<p className={style.danger}>{errors.name}</p>)}  */}

                            </input>
                            {/* <input 
                                className={style.maxmin}
                                placeholder='Weight Min'
                                type='text'
                                name='weight'
                                value={input.weight}
                                onChange={(e) => handleChange(e)}>  
                                {errors.name && (<p className={style.danger}>{errors.name}</p>)} 

                            </input> */}
                        </div>
                        <div>
                            {/* <label>Life Span:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Life Span'
                                type='text'
                                name='life_span'
                                value={input.life_span}
                                onChange={(e) => handleChange(e)}
                                required>
                                {/* {errors.name && (<p className={style.danger}>{errors.name}</p>)}    */}

                            </input>
                        </div>
                        <div>
                            {/* <label>Image:</label> */}
                            <input 
                                className={style.input}
                                placeholder='Image'
                                type='text'
                                name='imagen'
                                value={input.imagen}
                                onChange={(e) => handleChange(e)}
                                required>   

                            </input>
                        </div>
                        <div className={style.content}> 
                            <select 
                                className={style.temptContainer}
                                type='text'
                                name='temperament'
                                value={input.temperament}
                                onChange={(e) => handleSelect(e)}
                                required>
                                    <option value={input.temperament}>Temperaments</option>
                                
                                {
                                    temperament?.map((e) => (
                                        <option  
                                            className={style.l}                                          
                                            value={e.name} 
                                            key={e.id}>                                                                                            
                                            {e.name}
                                        </option>                                          
                                        ))                                 
                                    }
                            </select>  
                            <ul>
                                <li className={style.li}>{input.temperament.map(i => i + ", ")}</li>
                            </ul>                                          
                        </div>
                        <button 
                            className={style.submit} 
                            type= "submit" 
                            name= "submit" 
                            >Create
                        </button>
                        <Link to='/home'><button className={style.back} >Back</button></Link><br/>                
                </fieldset>                
            </form>
        </div>
    )

}