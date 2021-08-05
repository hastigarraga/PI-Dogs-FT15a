// const { Router } = require('express');
// const router = Router();
const { Dog , Temperament } = require('../db.js');
require("dotenv").config();
const axios = require('axios'); 
const { URL_API , API_KEY } = process.env


const apiData = async() => {
    const api = await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const apiInfo = await api.data.map(el =>{
        return { 
            id: el.id, 
            name: el.name, 
            height: el.height,
            weight: el.weight,
            life_span: el.life_span,
        }
    }); 
    return apiInfo;
}; 

const dataDb = async() => {
    return await Dog.findAll({ 
        include: {
            model: Temperament,
            attributes: ['name'],
            through:{
                attributes: []
            },
        }

    });
}; 


const allDogs = async() => {
    const apiInfo = await apiData();
    const dbInfo = await dataDb();
    const infoTotal = apiInfo.concat(dbInfo); 
    return infoTotal;
}  

// router.get('/dogs', async (req, res) => { 
//     const {name} = req.query;
//     const dogsTotal = await allDogs();
//     if(name){
    //         let dogName = await dogsTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
    //         dogName.length ?  
//         res.status(200).send(dogName) :
//         res.status(404).send('The puppy went for a walk')
//     }else {
//         res.status(200).send(dogsTotal);
//     }

// }); 
    
    
    
    
    
    


module.exports = {
    apiData, 
    dataDb, 
    allDogs, 
};