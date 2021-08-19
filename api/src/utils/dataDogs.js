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
            height: el.height.metric,
            weight: el.weight.metric,
            life_span: el.life_span,
            imagen: el.image.url, 
            temperament: el.temperament          
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
}; 
    


module.exports = {
    apiData, 
    dataDb, 
    allDogs, 
};